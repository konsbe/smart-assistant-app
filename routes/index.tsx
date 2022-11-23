import { StatusBar, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BottomNavigation from "../navigation/BottomNavigator";
import useColorScheme from "../hooks/useColorScheme";
import  { UserContext } from "../context/UserContext";

const MainRoute = (): JSX.Element => {
  const colorScheme = useColorScheme();
  const { userContextData, setUserContextData } =
    React.useContext<any>(UserContext);
  // console.log("userContextData", userContextData);
  return (
    <SafeAreaProvider>
      <BottomNavigation
        contextData={userContextData}
        colorScheme={colorScheme}
      />
      <StatusBar />
    </SafeAreaProvider>
  );
};

export default MainRoute;

const styles = StyleSheet.create({});
