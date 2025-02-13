import { PiWindLight, PiShower } from "react-icons/pi";
import {
  BsCupHot,
  BsDisplay,
  BsUiRadios,
  BsDiagram3,
  BsFuelPump,
  BsSafe,
} from "react-icons/bs";
import { TbFridge } from "react-icons/tb";
import { LuMicrowave } from "react-icons/lu";
import { IoWaterOutline } from "react-icons/io5";

const iconsCreateData = {
  AC: {
    icon: PiWindLight,
    label: "AC",
    condition: (camper) => camper.AC,
  },
  bathroom: {
    icon: PiShower,
    label: "Bathroom",
    condition: (camper) => camper.bathroom,
  },
  kitchen: {
    icon: BsCupHot,
    label: "Kitchen",
    condition: (camper) => camper.kitchen,
  },
  TV: {
    icon: BsDisplay,
    label: "TV",
    condition: (camper) => camper.TV,
  },
  radio: {
    icon: BsUiRadios,
    label: "Radio",
    condition: (camper) => camper.radio,
  },
  refrigerator: {
    icon: TbFridge,
    label: "Refrigerator",
    condition: (camper) => camper.refrigerator,
  },
  microwave: {
    icon: LuMicrowave,
    label: "Microwave",
    condition: (camper) => camper.microwave,
  },
  gas: {
    icon: BsSafe,
    label: "Gas",
    condition: (camper) => camper.gas,
  },
  water: {
    icon: IoWaterOutline,
    label: "Water",
    condition: (camper) => camper.water,
  },
  transmission: {
    icon: BsDiagram3,
    label: "Automatic",
    condition: (camper) => camper.transmission === "automatic",
  },
  engine: {
    icon: BsFuelPump,
    label: "Petrol",
    condition: (camper) => camper.engine,
  },
};

export default iconsCreateData;
