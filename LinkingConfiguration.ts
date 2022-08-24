/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Linking from "expo-linking";
import { EnumHomeTypes, EnumProfileTypes } from "./types";
import { RootStackParamList } from "./types";
import AboutScreen from "./views/Home/Routes/About";
import WatchLiveScreen from "./views/Home/Routes/WatchLive";
import WelcomeScreen from "./views/Home/Routes/Welcome";
import { createAppContainer } from "react-navigation";

const screens = {
  Welcome: {
    screen: WelcomeScreen,
  },
  About: {
    screen: AboutScreen,
  },
  WatchLive: WatchLiveScreen,
};

// home stack navigator screens
// const HomeStack = createNativeStackNavigator({screens});

// export default createAppContainer(HomeStack);
