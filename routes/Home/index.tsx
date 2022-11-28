import { StatusBar, StyleSheet } from "react-native";
import React, { createContext } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import UpperNavigator from "../../navigation/UpperNavigator";
import AboutScreen from "./Routes/About";
import WatchLiveScreen from "./Routes/WatchLive";
import { EnumHomeTypes } from "../../types";
import WelcomeScreen from "./Routes/Welcome";
// import { View } from "../../components/Themed";
import CalendarContextProvider from "../../context/TripContext";
import { INITIAL_STATE_ROOMS } from "../../context/SmartHomeContext";
// import RoomsContextProvider from "../../context/TripContext";

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
export const RoomsContext = createContext({})

const HomeRoute = () => {
  const [roomsContextData, setRoomsContextData] = React.useState<{} >(
    INITIAL_STATE_ROOMS
  );
  const state: any = {
    roomsContextData,
    setRoomsContextData,
  };
  return (
    <CalendarContextProvider>
      <RoomsContext.Provider value={state}>
        <SafeAreaProvider>
          <UpperNavigator components={RoutesHome} />
          <StatusBar />
        </SafeAreaProvider>
      </RoomsContext.Provider>
    </CalendarContextProvider>
  );
};

export default HomeRoute;

const styles = StyleSheet.create({});
