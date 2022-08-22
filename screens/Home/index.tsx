import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "../../navigation";
import BottomNavigator from "../../components/BottomNavigator/BottomNavigator";

const HomeRoute = () => {
  return (
    <SafeAreaProvider>
      <BottomNavigator />
      <StatusBar />
    </SafeAreaProvider>
  );
};

export default HomeRoute;

const styles = StyleSheet.create({});
