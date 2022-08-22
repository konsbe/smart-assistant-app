import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import UpperNavigator from "../../navigation/UpperNavigator";
import SettingsScreen from "../Profile/Routes/Settings";
import ProfileScreen from "./Routes/Profile";
import DetailsScreen from "./Routes/Details";
import { EnumHomeTypes, EnumProfileTypes as EnumTypes } from "../../types";
import AboutScreen from "../Home/Routes/About";
import HomeScreen from "../Home/Routes/Home";
import WatchLiveScreen from "../Home/Routes/WatchLive";

export const RoutesHome = [
  {
    component: HomeScreen,
    name: EnumHomeTypes.Home,
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

const ProfileRoute = () => {
  console.log("route: ", RoutesHome);
  return (
    <SafeAreaProvider>
      {/* <UpperNavigator components={RoutesHome} /> */}
      <UpperNavigator
        components={[ProfileScreen, DetailsScreen, SettingsScreen]}
        name={[EnumTypes.Profile, EnumTypes.Details, EnumTypes.Settings]}
      />
      <StatusBar />
    </SafeAreaProvider>
  );
};

export default ProfileRoute;

const styles = StyleSheet.create({});
