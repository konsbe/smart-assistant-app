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
import AboutScreen from "./routes/Home/Routes/About";
import WatchLiveScreen from "./routes/Home/Routes/WatchLive";
import WelcomeScreen from "./routes/Home/Routes/Welcome";
import { createAppContainer } from "react-navigation";
import DetailsScreen from "./routes/Profile/Routes/Details";
import TodoScreen from "./routes/Profile/Routes/Todo";
import SettingsScreen from "./routes/Profile/Routes/Settings";

// const screens = {
//   Welcome: {
//     screen: WelcomeScreen,
//   },
//   About: {
//     screen: AboutScreen,
//   },
//   WatchLive: {
//     screen: WatchLiveScreen
//   },
// };

// const LinkingConfiguration: LinkingOptions<any> = {
const LinkingConfiguration: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              Welcome: WelcomeScreen,
              About: AboutScreen,
              WatchLive: WatchLiveScreen,
            },
          },
          Profile: {
            screens: {
              Details: DetailsScreen,
              Todo: TodoScreen,
              Settings: SettingsScreen,
            },
          },
        },
      },
      Modal: "modal",
      NotFound: "*",
    },
  },
};
export default LinkingConfiguration;
// home stack navigator screens
// const HomeStack = createNativeStackNavigator({screens});

// export default createAppContainer(HomeStack);
