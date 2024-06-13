import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  Box,
  Button,
  Collapse,
  FormControl,
  Grow,
  IconButton,
  Input,
  InputLabel,
  MenuItem,
  Modal,
  Paper,
  Select,
  useTheme,
} from "@mui/material";
import "./Hero.scss";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import MapIcon from "@mui/icons-material/Map";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import PinDropIcon from "@mui/icons-material/PinDrop";
import SendIcon from "@mui/icons-material/Send";
import { useCallback, useContext, useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowRightAltOutlined,
  CancelRounded,
} from "@mui/icons-material";
import { convertFromNaira, numberWithCommas } from "../../../libs/utils";
import { ExchangeRatesContext } from "../../../App";
import { ExchangeRates } from "../../../types";
function Hero() {
  return (
    <div className="hero">
      <div className="content">
        <div>
          <h1 className="font-accent text-light text-4xl md:text-5xl font-extrabold ">
            <span>Unlock</span>
            <span>
              <LockOpenIcon sx={{ fontSize: "2.5rem", mb: 1 }} />
            </span>
          </h1>
          <h2 className="text-3xl md:text-6xl font-bold mb-7 ">Your World</h2>
          <p className="max-w-[45ch]">
            Expert Guidance and Seamless Travel Solutions for Your Global
            Adventure
          </p>
        </div>
      </div>
      <HeroAddon />
    </div>
  );
}
function HeroAddon() {
  const theme = useTheme();
  const [openLocationsModal, setOpenLocationsModal] = useState(false);
  const [openLowestPricesModal, setOpenLowestPricesModal] = useState(false);
  return (
    <div className="hero-addon" id="hero-addon">
      <div>
        <Button
          sx={{ color: theme.palette.text.primary }}
          onClick={(e) => {
            setOpenLocationsModal(true);
          }}
        >
          <span className="flex flex-col justify-center items-center">
            <MapIcon fontSize="large" />
            <h3 className="font-bold">LOCATIONS</h3>
            <p className="capitalize">20 Slots Available</p>
            <span className="adsClickIcon">
              <AdsClickIcon />
            </span>
          </span>
        </Button>
      </div>
      <Modal
        open={openLocationsModal}
        onClose={() => {
          setOpenLocationsModal(false);
        }}
        aria-labelledby="locations-modal"
        aria-describedby="locations-modal"
      >
        <Grow in={openLocationsModal}>
          <div className="modal-child">
            <AvailableLocations setOpen={setOpenLocationsModal} />
          </div>
        </Grow>
      </Modal>
    </div>
  );
}
type Location = {
  from: string;
  purpose: string;
  to: string;
  priceRange: { start: number; end: number };
  requirements: string[];
};
const acceptedCurrencies: { [key: string]: CurrencyType }[] = [
  { NGN: "₦" },
  { USD: "$" },
  { EUR: "€" },
];

type CurrencyType = "₦" | "$" | "€";
const locations: Location[] = [
  {
    from: "Nigeria",
    to: "Saudi Arabia",
    priceRange: { start: 5_000_000, end: 10_000_000 },
    requirements: [
      "Valid passport",
      "Work visa",
      "Medical clearance certificate",
      "Proof of employment",
    ],
    purpose: "Employment",
  },
  {
    from: "India",
    to: "United States",
    priceRange: { start: 1_500_000, end: 3_000_000 },
    requirements: [
      "H-1B visa approval",
      "Job offer letter",
      "Educational certificates",
      "Passport-sized photographs",
    ],
    purpose: "Employment",
  },
  {
    from: "Canada",
    to: "Australia",
    priceRange: { start: 2_000_000, end: 4_000_000 },
    requirements: [
      "Valid passport",
      "Australian visa",
      "Proof of funds",
      "Travel insurance",
    ],
    purpose: "Tourism",
  },
  {
    from: "Brazil",
    to: "Portugal",
    priceRange: { start: 1_000_000, end: 2_500_000 },
    requirements: [
      "Schengen visa",
      "Round-trip ticket",
      "Proof of accommodation",
      "Travel itinerary",
    ],
    purpose: "Tourism",
  },
  {
    from: "United Kingdom",
    to: "Spain",
    priceRange: { start: 500_000, end: 1_000_000 },
    requirements: [
      "Valid passport",
      "Travel insurance",
      "Proof of accommodation",
      "Return ticket",
    ],
    purpose: "Tourism",
  },
  {
    from: "China",
    to: "Germany",
    priceRange: { start: 2_500_000, end: 5_000_000 },
    requirements: [
      "Schengen visa",
      "Proof of accommodation",
      "Travel insurance",
      "Financial means",
    ],
    purpose: "Business",
  },

  {
    from: "Nigeria",
    to: "Saudi Arabia",
    priceRange: { start: 5_000_000, end: 10_000_000 },
    requirements: [
      "Valid passport",
      "Work visa",
      "Medical clearance certificate",
      "Proof of employment",
    ],
    purpose: "Employment",
  },
  {
    from: "India",
    to: "United States",
    priceRange: { start: 1_500_000, end: 3_000_000 },
    requirements: [
      "H-1B visa approval",
      "Job offer letter",
      "Educational certificates",
      "Passport-sized photographs",
    ],
    purpose: "Employment",
  },
  {
    from: "Canada",
    to: "Australia",
    priceRange: { start: 2_000_000, end: 4_000_000 },
    requirements: [
      "Valid passport",
      "Australian visa",
      "Proof of funds",
      "Travel insurance",
    ],
    purpose: "Tourism",
  },
  {
    from: "Brazil",
    to: "Portugal",
    priceRange: { start: 1_000_000, end: 2_500_000 },
    requirements: [
      "Schengen visa",
      "Round-trip ticket",
      "Proof of accommodation",
      "Travel itinerary",
    ],
    purpose: "Tourism",
  },
  {
    from: "United Kingdom",
    to: "Spain",
    priceRange: { start: 500_000, end: 1_000_000 },
    requirements: [
      "Valid passport",
      "Travel insurance",
      "Proof of accommodation",
      "Return ticket",
    ],
    purpose: "Tourism",
  },
  {
    from: "China",
    to: "Germany",
    priceRange: { start: 2_500_000, end: 5_000_000 },
    requirements: [
      "Schengen visa",
      "Proof of accommodation",
      "Travel insurance",
      "Financial means",
    ],
    purpose: "Business",
  },
  {
    from: "South Africa",
    to: "United Kingdom",
    priceRange: { start: 3_000_000, end: 6_000_000 },
    requirements: [
      "UK visa",
      "Proof of accommodation",
      "Return ticket",
      "Bank statements",
    ],
    purpose: "Tourism",
  },
  {
    from: "Japan",
    to: "France",
    priceRange: { start: 2_000_000, end: 4_500_000 },
    requirements: [
      "Schengen visa",
      "Hotel reservations",
      "Travel itinerary",
      "Travel insurance",
    ],
    purpose: "Tourism",
  },
  {
    from: "Russia",
    to: "Turkey",
    priceRange: { start: 1_000_000, end: 2_000_000 },
    requirements: [
      "E-visa",
      "Valid passport",
      "Proof of accommodation",
      "Return ticket",
    ],
    purpose: "Tourism",
  },
  {
    from: "Mexico",
    to: "Canada",
    priceRange: { start: 1_200_000, end: 2_500_000 },
    requirements: [
      "ETA (Electronic Travel Authorization)",
      "Valid passport",
      "Proof of funds",
      "Travel insurance",
    ],
    purpose: "Tourism",
  },
  {
    from: "Argentina",
    to: "Italy",
    priceRange: { start: 1_500_000, end: 3_000_000 },
    requirements: [
      "Schengen visa",
      "Valid passport",
      "Proof of accommodation",
      "Travel itinerary",
    ],
    purpose: "Tourism",
  },
  {
    from: "Egypt",
    to: "United Arab Emirates",
    priceRange: { start: 700_000, end: 1_500_000 },
    requirements: [
      "UAE visa",
      "Valid passport",
      "Proof of accommodation",
      "Return ticket",
    ],
    purpose: "Business",
  },
];

function AvailableLocations({ setOpen }: { setOpen: Function }) {
  const [openSettings, setOpenSettings] = useState(false);
  const [currency, setCurrency] = useState(acceptedCurrencies[0].NGN);
  // const [filter]
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
                {acceptedCurrencies.map((c) => {
                  let name = Object.keys(c)[0];
                  let value = c[name] as string;
                  return (
                    <MenuItem value={value} selected={value === currency}>
                      {value} - {name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </div>
        </Collapse>
      </div>

      <div className="content">
        {locations.map((l) => {
          return (
            <LocationComponent
              location={{
                from: l.from,
                to: l.to,
                priceRange: l.priceRange,
                requirements: l.requirements,
                purpose: l.purpose,
              }}
              currency={currency}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Hero;

const LocationComponent = ({
  location,
  currency,
}: {
  location: Location;
  currency?: CurrencyType;
}) => {
  const [contentCollapsed, setContentCollapsed] = useState(false);
  if (!currency) {
    currency = acceptedCurrencies[0].NGN;
  }
  const theme = useTheme();
  const exchangeRates = useContext(ExchangeRatesContext) as ExchangeRates;
  const convertedPriceRange = useMemo(() => {
    let start;
    let end;
    if (currency === acceptedCurrencies[1].USD) {
      start =
        currency +
        numberWithCommas(
          convertFromNaira(location.priceRange.start, "USD", exchangeRates)
        );
      end =
        currency +
        numberWithCommas(
          convertFromNaira(location.priceRange.end, "USD", exchangeRates)
        );
    } else if (currency === acceptedCurrencies[1].EUR) {
      start =
        currency +
        numberWithCommas(
          convertFromNaira(location.priceRange.start, "EUR", exchangeRates)
        );
      end =
        currency +
        numberWithCommas(
          convertFromNaira(location.priceRange.end, "EUR", exchangeRates)
        );
    } else {
      start = currency + numberWithCommas(location.priceRange.start);
      end = currency + numberWithCommas(location.priceRange.end);
    }
    return { start, end };
  }, [currency]);
  return (
    <div className="location">
      <header
        className="capitalize flex items-center"
        onClick={() => {
          setContentCollapsed((p) => !p);
        }}
      >
        <div className="item_labelled">
          <span className="label">From</span>
          <span className="item">{location.from}</span>
        </div>
        <div className="send-icon">
          <div className="relative size-full flex justify-center items-center">
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
          <span className="item">{location.to}</span>
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
            {location.purpose}
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
              {location.requirements.map((r, i) => {
                return (
                  <li key={i}>
                    <span>{r}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Collapse>
    </div>
  );
};
