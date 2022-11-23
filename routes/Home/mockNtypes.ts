import { Dimensions, StyleSheet } from "react-native";
import {
  Entypo,
  FontAwesome5,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";

export type CalendarEvent = {
  title: string;
  location: string;
  description: string;
  date: string | any;
  goingBy: string;
  goingByColor: string;
  icon: any;
};

export const INITIAL_STATE = {
  title: "",
  location: "",
  description: "",
  date: new Date(),
  goingByColor: "#ffc2f4",
  goingBy: "walking",
  icon: FontAwesome5,
};
//
const goingBy: any[] = [
  { vectorIcon: FontAwesome5, name: "walking", backGroundColor: "#ffc2f4" },
  { vectorIcon: FontAwesome5, name: "car-alt", backGroundColor: "#91ffb8" },
  { vectorIcon: Ionicons, name: "airplane", backGroundColor: "#549cbf" },
  { vectorIcon: FontAwesome, name: "ship", backGroundColor: "#8cfaf3" },
  { vectorIcon: FontAwesome, name: "taxi", backGroundColor: "#e3fa98" },
];
export const INITIAL_CARD_MAPS = [
  {
    title: "Meeting with Friends",
    location: "Athens Syntagma",
    description: "",
    date: new Date(),
    goingByColor: "#ffc2f4",
    goingBy: "walking",
    icon: FontAwesome5,
  },
  {
    title: "Pay my bills",
    location: "Athens Kupseli",
    description: "",
    date: new Date(),
    goingByColor: "#ffc2f4",
    goingBy: "walking",
    icon: FontAwesome5,
  },
  {
    title: "Shopping Therapy",
    location: "Marousi The Mall Athens",
    description: "",
    date: new Date(),
    goingByColor: "#91ffb8",
    goingBy: "car-alt",
    icon: FontAwesome5,
  },
  {
    title: "Vocation",
    location: "New York",
    description: "",
    date: new Date(),
    goingByColor: "#549cbf",
    goingBy: "airplane",
    icon: Ionicons,
  },
];

export const styling = StyleSheet.create({
  footer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 100,
  },
  inputField: { fontSize: 40, width: "100%", marginBottom: 10 },
});

export const datesStyles = {
  "2022-10-05": { textColor: "#43515c" },
  "2022-10-09": [
    {
      textColor: "#43515c",
      name: "item 4 - any js object",
      description: "small description",
      startingDay: true,
      endingDay: true,
    },
  ],
  "2022-10-14": { startingDay: true, endingDay: true, color: "#ffc2f4" },
  "2022-10-16": { selected: true, marked: true, selectedColor: "#ffc2f4" },
  "2022-10-17": { marked: true, color: "#ffc2f4" },
  "2022-10-18": { marked: true, dotColor: "red", activeOpacity: 0 },
  "2022-10-19": { disabled: true, disableTouchEvent: true },
  "2022-10-21": { startingDay: true, color: "#ffc2f4" },
  "2022-10-22": { endingDay: true, color: "#ffc2f4" },
  "2022-10-24": { startingDay: true, color: "gray" },
  "2022-10-25": { color: "gray" },
  "2022-10-26": { endingDay: true, color: "gray" },
};
export const INITIAL_DATES = {
  "2022-10-10": [
    { name: "item 1 - any js object", description: "small description" },
    { name: "item 2 - any js object", description: "small description" },
  ],
  "2022-10-16": [{ name: "item 5 - any js object", height: 80 }],
  "2022-05-24": [],
  "2022-05-25": [{ name: "item 3 - any js object" }, { name: "any js object" }],
};
