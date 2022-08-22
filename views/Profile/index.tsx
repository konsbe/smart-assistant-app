import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import UpperNavigator from "../../navigation/UpperNavigator";
import SettingsScreen from "../Profile/Routes/Settings";
import ProfileScreen from "./Routes/Profile";
import DetailsScreen from "./Routes/Details";
import { EnumProfileTypes } from "../../types";

export const RoutesProfile = [
  {
    component: ProfileScreen,
    name: EnumProfileTypes.Profile,
  },
  {
    component: SettingsScreen,
    name: EnumProfileTypes.Settings,
  },
  {
    component: DetailsScreen,
    name: EnumProfileTypes.Details,
  },
];

const ProfileRoute = () => {
  return (
    <SafeAreaProvider>
      <UpperNavigator components={RoutesProfile} />
      <StatusBar />
    </SafeAreaProvider>
  );
};

export default ProfileRoute;

const styles = StyleSheet.create({});
