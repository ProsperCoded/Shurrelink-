import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import {
  Autocomplete,
  Button,
  Collapse,
  Divider,
  FormControl,
  FormLabel,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  TextField,
} from "@mui/material";
import PinDropIcon from "@mui/icons-material/PinDrop";
import { useContext, useMemo, useRef, useState } from "react";
import { ArrowRight, CancelRounded } from "@mui/icons-material";
import { convertPrices, getMinPriceAndMaxPrice } from "../../../libs/utils";
import { ExchangeRatesContext } from "../../../App";
import { CurrencyType, ExchangeRates } from "../../../types";
import { acceptedCurrencies } from "../../../config";
import { locations, LocationComponent } from "./Hero";

export function AvailableLocations({ setOpen }: { setOpen: Function }) {
  const [openSettings, setOpenSettings] = useState(false);
  const [currency, setCurrency] = useState(acceptedCurrencies[0].NGN);
  const priceRange = getMinPriceAndMaxPrice(locations);
  const [restrictedPriceRange, setRestrictedPriceRange] = useState([
    priceRange.min,
    priceRange.max,
  ]);
  const [searchValue, setSearchValue] = useState("");
  const locationOptions = useRef(
    locations
      .map((option) => {
        return [option.from, option.to];
      })
      .flat()
  );
  const locationsAfterFilter = useMemo(() => {
    let filteredLocations = locations;
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
      filteredLocations = filteredLocations.filter((l) => {
        return (
          l.from.toLowerCase().includes(searchValue.toLowerCase()) ||
          l.to.toLowerCase().includes(searchValue.toLowerCase())
        );
      });
    }
    return filteredLocations;
  }, [locations, restrictedPriceRange, searchValue]);
  const exchangeRates = useContext(ExchangeRatesContext) as ExchangeRates;
  return (
    <div className="available-locations">
      <h1 className="text-3xl font-bold">
        <PinDropIcon sx={{ fontSize: "2.3rem" }} />
        <span className="my-auto">Available Locations</span>

        <span
          className="absolute right-0 top-2"
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
          className="bg-slate-100 rounded-lg p-2 my-4"
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
            <h3 className="font-bold">Filter According To Prices</h3>
            <Slider
              getAriaLabel={() => "Min & Max Setter"}
              value={restrictedPriceRange}
              onChange={(e: any) => {
                setRestrictedPriceRange(e.target.value);
                // console.log("changed to", e.target.value);
              }}
              // step={100}
              // marks
              min={priceRange.min}
              max={priceRange.max}
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
        value={searchValue}
        onChange={(e: any) => {
          console.log("value is ", e.target.value);
          setSearchValue(e.target.value);
        }}
        options={locationOptions.current}
        renderInput={(params) => (
          <TextField {...params} label="Search Destination" />
        )}
      />
      <div className="content">
        {locationsAfterFilter.map((l, i) => {
          return (
            <LocationComponent
              location={{
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
      <div className="[&&&]:mt-8 border border-slate-300 p-3 rounded-md">
        <Divider>
          <h1 className="text-lg font-bold">REQUEST A LOCATION</h1>
        </Divider>
        <h5 className="text-lg text-secondary italic font-secondary">
          Didn't find What You Where looking for ❔🤔
          <br /> Request a location your needed destination and we will try to
          make it possible
        </h5>
        <h3>Kindly Fill In Request Information Below </h3>
        <div className="flex flex-col gap-3 justify-center">
          <h2 className="w-2/3 mx-auto font-bold text-xl text-center">
            Request Form <ReceiptLongIcon fontSize="small" />
          </h2>
          {/* <Input size="medium"></Input> */}
          <div className="flex gap-2 flex-col lg:max-w-[50vw] w-full mx-auto">
            <TextField label="From" />
            <TextField label="To" />
            <FormLabel>Give Travel Purpose(optional)</FormLabel>
            <Textarea color="neutral" minRows={3} size="lg" variant="soft" />
          </div>
          {/* <div className="flex gap-2">
              <Input variant="soft" placeholder="From" />
              <Input variant="soft" placeholder="From" />
            </div> */}
          <Button
            variant="contained"
            sx={{ borderRadius: "100px", mx: "auto" }}
          >
            {" "}
            Place Request
          </Button>
        </div>
      </div>
    </div>
  );
}
