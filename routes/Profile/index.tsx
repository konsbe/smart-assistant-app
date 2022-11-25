import { StatusBar, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import UpperNavigator from "../../navigation/UpperNavigator";
import SettingsScreen from "../Profile/Routes/Settings";
import DetailsScreen from "./Routes/Details";
import { EnumProfileTypes } from "../../types";
import TodoScreen from "./Routes/Todo";

export const RoutesProfile = [
  {
    component: DetailsScreen,
    name: EnumProfileTypes.Details,
  },
  {
    component: TodoScreen,
    name: EnumProfileTypes.Todo,
  },
  {
    component: SettingsScreen,
    name: EnumProfileTypes.Settings,
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
