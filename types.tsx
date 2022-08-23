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
import HomeScreen from "./views/Home/Routes/Home";
import ProfileScreen from "./views/Profile/Routes/Profile";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
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
  About = "About",
  WatchLive = "WatchLive",
  Welcome = "Welcome",
}
export enum EnumProfileTypes {
  Profile = "Profile",
  Settings = "Settings",
  Details = "Details",
  Todo = "Todo",
}
export const RoutesMain = [
  {
    component: HomeScreen,
    name: EnumHomeTypes.Home,
  },
  {
    component: ProfileScreen,
    name: EnumProfileTypes.Profile,
  },
];
