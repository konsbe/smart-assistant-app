import React, { createContext } from "react";
import {
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
export type CalendarEvent = {
  title: string;
  location: string;
  lng: number;
  lat: number;
  description: string;
  date: string | any;
  goingBy: string;
  goingByColor: string;
  icon: any;
};

const newArray: any[] = [...Array(42).keys()].map((key) => {
  return {
    ark: key,
    isOpen: Math.random() * 10 > 8 ? true : false,
    title: "This is the title",
    description: "this is the description",
  };
});
export const INITIAL_CARD_MAPS = [
  {
    title: "Meeting with Friends",
    location: "Athens Syntagma",
    description: "",
    date: new Date(),
    lng: 0,
    lat: 0,  
    goingByColor: "#ffc2f4",
    goingBy: "walking",
    icon: FontAwesome5,
  },
  {
    title: "Pay my bills",
    location: "Athens Kupseli",
    description: "",
    lng: 0,
    lat: 0,  
    date: new Date(),
    goingByColor: "#ffc2f4",
    goingBy: "walking",
    icon: FontAwesome5,
  },
  {
    title: "Shopping Therapy",
    location: "Marousi The Mall Athens",
    description: "",
    lng: 0,
    lat: 0,  
    date: new Date(),
    goingByColor: "#91ffb8",
    goingBy: "car-alt",
    icon: FontAwesome5,
  },
  {
    title: "Vocation",
    location: "New York",
    description: "",
    lng: 0,
    lat: 0,  
    date: new Date(),
    goingByColor: "#549cbf",
    goingBy: "airplane",
    icon: Ionicons,
  },
];

export const CalendarContext = createContext<CalendarEvent | null>(null);

const CalendarContextProvider: any = ({ children }: any) => {
  const [calendarContextData, setCalendarContextData] =
    React.useState<any[]>(INITIAL_CARD_MAPS);
  const state: any = {
    calendarContextData,
    setCalendarContextData,
  };
  return (
    <CalendarContext.Provider value={state}>
      {children}
    </CalendarContext.Provider>
  );
};

export default CalendarContextProvider;
