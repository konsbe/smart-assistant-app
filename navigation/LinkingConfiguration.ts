/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "../types";

const LinkingConfiguration: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Home: "Home",
          Welcome: "Welcome",
        },
      },
      // Home: "Home",
      // Home: "Home",
      // Home: "Home",
      // Home: "Home",
      // Home: "Home",
      // Home: "Home",
      Modal: "modal",
      NotFound: "*",
    },
  },
};

export default LinkingConfiguration;
