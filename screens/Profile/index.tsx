import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import UpperNavigator from "../../navigation/UpperNavigator";
import SettingsScreen from "../Profile/Settings";
import ProfileScreen from "./Profile";
import DetailsScreen from "./Details";
import { EnumProfileTypes as EnumTypes } from "../../types";

const ProfileRoute = () => {
  return (
    <SafeAreaProvider>
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
