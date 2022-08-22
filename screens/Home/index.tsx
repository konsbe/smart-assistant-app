import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import UpperNavigator from "../../navigation/UpperNavigator";
import AboutScreen from "./Routes/About";
import HomeScreen from "./Routes/Home";
import WatchLiveScreen from "./Routes/WatchLive";
import { EnumHomeTypes as EnumTypes } from "../../types";

const HomeRoute = () => {
  return (
    <SafeAreaProvider>
      <UpperNavigator
        components={[HomeScreen, AboutScreen, WatchLiveScreen]}
        name={[EnumTypes.Home, EnumTypes.About, EnumTypes.WatchLive]}
      />
      <StatusBar />
    </SafeAreaProvider>
  );
};

export default HomeRoute;

const styles = StyleSheet.create({});
