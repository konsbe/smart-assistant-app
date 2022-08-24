import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BottomNavigation from "../navigation/BottomNavigator";
import useColorScheme from "../hooks/useColorScheme";

const MainRoute = () => {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <BottomNavigation colorScheme={colorScheme} />
      <StatusBar />
    </SafeAreaProvider>
  );
};

export default MainRoute;

const styles = StyleSheet.create({});
