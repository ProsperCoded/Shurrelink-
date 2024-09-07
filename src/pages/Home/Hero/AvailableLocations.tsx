import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import { PinDrop } from "@mui/icons-material";
import {
  Autocomplete,
  Button,
  Collapse,
  Divider,
  FormControl,
  FormGroup,
  FormLabel,
  Grow,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Slider,
  TextField,
  useTheme,
} from "@mui/material";
import "./Hero.scss";
import SendIcon from "@mui/icons-material/Send";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowRightAltOutlined,
  CancelRounded,
} from "@mui/icons-material";
import {
  convertFromNaira,
  convertPrices,
  getMinPriceAndMaxPrice,
  numberWithCommas,
} from "../../../libs/utils";
import { ExchangeRatesContext } from "../../../App";
import { CurrencyType, ExchangeRates, LocationType } from "../../../types";
import { acceptedCurrencies } from "../../../config";
import { uniq } from "lodash";
import { locationsData } from "./locationData";
function AvailableLocations({ setOpen }: { setOpen: Function }) {
  const [openSettings, setOpenSettings] = useState(false);
  const [currency, setCurrency] = useState(acceptedCurrencies[0].NGN);
  const largestPriceRange = getMinPriceAndMaxPrice(locationsData);
  const [restrictedPriceRange, setRestrictedPriceRange] = useState([
    largestPriceRange.min,
    largestPriceRange.max,
  ]);
  const [searchValue, setSearchValue] = useState("");
  const locationOptions = useMemo(() => {
    // map out names, and flatten items returned as list
    const flattenedList = locationsData
      .map((option) => {
        return [option.from, option.to];
      })
      .flat();
    // remove any duplicate item from list
    const uniqueList = uniq(flattenedList);
    return uniqueList;
  }, []);
  const locationsAfterFilter = useMemo(() => {
    let filteredLocations = locationsData;
    // filter by price range
    filteredLocations = filteredLocations.filter((l) => {
      if (
        l.priceRange.start >= restrictedPriceRange[0] &&
        l.priceRange.end <= restrictedPriceRange[1]
      )
        return true;
    });
    if (searchValue) {
      // filter by search value
      console.log("recalculating searchValue", searchValue);
      filteredLocations = filteredLocations.filter((l) => {
        return (
          l.from.toLowerCase().includes(searchValue.toLowerCase()) ||
          l.to.toLowerCase().includes(searchValue.toLowerCase())
        );
      });
    }
    return filteredLocations;
  }, [locationsData, restrictedPriceRange, searchValue]);
  const exchangeRates = useContext(ExchangeRatesContext) as ExchangeRates;
  return (
    <div className="available-locations">
      <h1 className="font-bold text-3xl">
        <PinDrop sx={{ fontSize: "2.3rem" }} />
        <span className="my-auto">Available Locations</span>

        <span
          className="top-2 right-0 absolute"
          onClick={() => {
            setOpen(false);
          }}
        >
          <IconButton color="secondary">
            <CancelRounded fontSize="large" />
          </IconButton>
        </span>
      </h1>

      <div>
        <h2
          className="bg-slate-100 my-4 p-2 rounded-lg"
          onClick={() => {
            setOpenSettings((p) => !p);
          }}
        >
          Settings <ArrowRight sx={{ rotate: "90deg" }} />
        </h2>
        <Collapse in={openSettings}>
          <div className="flex justify-between items-center">
            <h3 className="font-bold">Change Currency</h3>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small-label">Currency</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={currency}
                label="Age"
                onChange={(e) => {
                  setCurrency(e.target.value as CurrencyType);
                }}
              >
                {acceptedCurrencies.map((c, i) => {
                  let name = Object.keys(c)[0];
                  let value = c[name] as string;
                  return (
                    <MenuItem
                      value={value}
                      selected={value === currency}
                      key={i}
                    >
                      {value} - {name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </div>
          <div className="flex justify-between items-center">
            <h3 className="font-bold">Filter To Prices</h3>
            <Slider
              getAriaLabel={() => "Min & Max Setter"}
              value={restrictedPriceRange}
              onChange={(e: any) => {
                setRestrictedPriceRange(e.target.value);
                // console.log("changed to", e.target.value);
              }}
              // step={100}
              // marks
              min={largestPriceRange.min}
              max={largestPriceRange.max}
              valueLabelDisplay="on"
              getAriaValueText={(e) => {
                return convertPrices(
                  currency,
                  { priceRange: { start: 0, end: e } },
                  exchangeRates
                ).end;
              }}
            />
          </div>
        </Collapse>
      </div>
      <Autocomplete
        id="search"
        freeSolo
        onChange={(e: any) => {
          console.log("value changed to", e.target.innerText);
          setSearchValue(e.target.innerText);
        }}
        getOptionLabel={(option: string) => {
          // console.log("option", option);
          if (!option) return "none";
          return option;
        }}
        options={locationOptions}
        renderInput={(params) => (
          <TextField {...params} label="Search Destination" />
        )}
      />
      <div className="content">
        {locationsAfterFilter.map((l, i) => {
          return (
            <LocationComponent
              locationData={{
                from: l.from,
                to: l.to,
                priceRange: l.priceRange,
                requirements: l.requirements,
                purpose: l.purpose,
              }}
              key={i}
              currency={currency}
            />
          );
        })}
      </div>
      <div className="border-slate-300 [&&&]:mt-8 p-3 border rounded-md">
        <Divider>
          <h1 className="font-bold text-lg">REQUEST A LOCATION</h1>
        </Divider>
        <h5 className="font-secondary text-lg text-secondary italic">
          Didn't find What You Where looking for ❔🤔
          <br /> Request a location your needed destination and we will try to
          make it possible
        </h5>
        <h3>Kindly Fill In Request Information Below </h3>
        <div className="flex flex-col justify-center gap-3">
          <h2 className="mx-auto w-2/3 font-bold text-center text-xl">
            Request Form <ReceiptLongIcon fontSize="small" />
          </h2>
          {/* <Input size="medium"></Input> */}
          <div className="flex flex-col gap-2 mx-auto w-full lg:max-w-[50vw]">
            <TextField label="From" value={"Nigeria"} />
            <TextField label="To" />
            <FormGroup>
              <FormLabel sx={{ mb: 1, mt: 2 }}>
                Give Travel Purpose(optional)
              </FormLabel>
              {/* <TextField color="neutral" minRows={3} size="lg" variant="soft" /> */}
              <TextField
                label="Your Message"
                multiline
                rows={4} // Adjust rows as needed
              />
            </FormGroup>
          </div>
          <Button
            variant="contained"
            sx={{ borderRadius: "100px", mx: "auto" }}
          >
            Send Request
          </Button>
        </div>
      </div>
    </div>
  );
}

const LocationComponent = ({
  locationData,
  currency,
}: {
  locationData: LocationType;
  currency?: CurrencyType;
}) => {
  const [contentCollapsed, setContentCollapsed] = useState(false);
  if (!currency) {
    currency = acceptedCurrencies[0].NGN;
  }
  const theme = useTheme();
  const exchangeRates = useContext(ExchangeRatesContext) as ExchangeRates;

  const convertedPriceRange = useMemo(() => {
    return convertPrices(currency, locationData, exchangeRates);
    // return { start: location.priceRange.start, end: location.priceRange.end };
  }, [currency, locationData]);
  useEffect(() => {
    console.log("price range is", locationData.priceRange);
  }, [locationData]);
  return (
    <div className="location">
      <header
        className="flex items-center capitalize"
        onClick={() => {
          setContentCollapsed((p) => !p);
        }}
      >
        <div className="item_labelled">
          <span className="label">From</span>
          <span className="item">{locationData.from}</span>
        </div>
        <div className="send-icon">
          <div className="relative flex justify-center items-center size-full">
            <SendIcon
              sx={{
                fontSize: "1rem",
                color: theme.palette.primary.main,
              }}
            />
          </div>
        </div>
        <div className="item_labelled" style={{ marginLeft: "-10px" }}>
          <span className="label">To</span>
          <span className="item">{locationData.to}</span>
        </div>
        <div
          className={
            "collapse-toggler " + (contentCollapsed ? "collapsed" : "")
          }
        >
          <IconButton
            onClick={(e) => {
              setContentCollapsed((p) => !p);
              e.stopPropagation();
            }}
          >
            <ChevronRightIcon fontSize="large" />
          </IconButton>
        </div>
      </header>
      <Collapse in={contentCollapsed} collapsedSize={0}>
        <div className="description">
          <span className="description__property">PURPOSE</span>
          <span className="description__property-value">
            {locationData.purpose}
          </span>
          <span className="description__property">PRICE RANGE</span>
          <span className="description__property-value">
            <span className="bg-primary-light p-2 rounded-lg font-bold text-sm">
              {convertedPriceRange.start}
              <ArrowRightAltOutlined fontSize="small" sx={{ mx: 1 }} />
              {convertedPriceRange.end}
            </span>
          </span>
          <div className="requirements">
            <span className="description__property">REQUIREMENTS</span>
            <ul className="description__property-value">
              {locationData.requirements.map((r, i) => {
                return (
                  <li key={i}>
                    <span>{r}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="apply-button">
            <Button variant="contained"> Apply Now</Button>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default AvailableLocations;
