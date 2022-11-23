import { StatusBar, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import UpperNavigator from "../../navigation/UpperNavigator";
import AboutScreen from "./Routes/About";
import WatchLiveScreen from "./Routes/WatchLive";
import { EnumHomeTypes } from "../../types";
import WelcomeScreen from "./Routes/Welcome";
import { View } from "../../components/Themed";
import CalendarContextProvider from "../../context/TripContext";

export const RoutesHome = [
  {
    component: WelcomeScreen,
    name: EnumHomeTypes.Welcome,
  },
  {
    component: AboutScreen,
    name: EnumHomeTypes.About,
  },
  {
    component: WatchLiveScreen,
    name: EnumHomeTypes.WatchLive,
  },
];

const HomeRoute = () => {
  return (
    <CalendarContextProvider>
      <SafeAreaProvider>
        <UpperNavigator components={RoutesHome} />
        <StatusBar />
      </SafeAreaProvider>
    </CalendarContextProvider>
  );
};

export default HomeRoute;

const styles = StyleSheet.create({});
