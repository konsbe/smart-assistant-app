/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import WelcomeScreen from "./views/Home/Routes/Welcome";
import DetailsScreen from "./views/Profile/Routes/Details";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Route: NavigatorScreenParams<RootTabParamList> | undefined;
  Home: NavigatorScreenParams<RootTabParamList> | undefined;
  Welcome: NavigatorScreenParams<RootTabParamList> | undefined;
  About: NavigatorScreenParams<RootTabParamList> | undefined;
  WatchLive: NavigatorScreenParams<RootTabParamList> | undefined;
  Profile: NavigatorScreenParams<RootTabParamList> | undefined;
  Details: NavigatorScreenParams<RootTabParamList> | undefined;
  Todo: NavigatorScreenParams<RootTabParamList> | undefined;
  Settings: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  Screen: NavigatorScreenParams<RootTabParamList> | undefined | any;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

// export type RootTabParamList = {
//   Home: undefined;
//   About: undefined;
//   Profile: undefined;
//   Details: undefined;
//   Settings: undefined;
// };

export type RootTabParamList = {
  Home: {
    component: React.Component | JSX.Element;
    name: EnumHomeTypes.Home;
  };
  Welcome: {
    component: React.Component | JSX.Element;
    name: EnumHomeTypes.Welcome;
  };
  About: {
    component: React.Component | JSX.Element;
    name: EnumHomeTypes.About;
  };
  WatchLive: {
    component: React.Component | JSX.Element;
    name: EnumHomeTypes.WatchLive;
  };
  Profile: {
    component: React.Component | JSX.Element;
    name: EnumProfileTypes.Profile;
  };
  Details: {
    component: React.Component | JSX.Element;
    name: EnumProfileTypes.Details;
  };
  Todo: {
    component: React.Component | JSX.Element;
    name: EnumProfileTypes.Todo;
  };
  Settings: {
    component: React.Component | JSX.Element;
    name: EnumProfileTypes.Settings;
  };
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
export enum EnumHomeTypes {
  Home = "Home",
  Welcome = "Welcome",
  About = "About",
  WatchLive = "WatchLive",
}
export enum EnumProfileTypes {
  Profile = "Profile",
  Settings = "Settings",
  Details = "Details",
  Todo = "Todo",
}
export const RoutesMain = [
  {
    component: WelcomeScreen,
    name: EnumHomeTypes.Home,
  },
  {
    component: DetailsScreen,
    name: EnumProfileTypes.Profile,
  },
];
