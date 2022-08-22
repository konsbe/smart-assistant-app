import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BottomNavigator from "../../components/BottomNavigator/BottomNavigator";
import SettingsScreen from "../Profile/Settings";
import ProfileScreen from "./Profile";
import DetailsScreen from "./Details";

const ProfileRoute = () => {
  return (
    <SafeAreaProvider>
      <BottomNavigator
        components={[ProfileScreen, DetailsScreen, SettingsScreen]}
        name={["Profile", "Details", "Settings"]}
      />
      <StatusBar />
    </SafeAreaProvider>
  );
};

export default ProfileRoute;

const styles = StyleSheet.create({});
