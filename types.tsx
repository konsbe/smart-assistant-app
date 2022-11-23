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


declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Route: NavigatorScreenParams<RootTabParamList> | undefined;
  Home: NavigatorScreenParams<RootTabParamList> | undefined;
  Welcome: any | undefined;
  About: NavigatorScreenParams<RootTabParamList> | undefined;
  WatchLive: NavigatorScreenParams<RootTabParamList> | undefined;
  Profile: NavigatorScreenParams<RootTabParamList> | undefined;
  Details: NavigatorScreenParams<RootTabParamList> | undefined;
  Todo: NavigatorScreenParams<RootTabParamList> | undefined;
  Settings: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  SignIn: NavigatorScreenParams<RootTabParamList> | undefined;
  Screen: NavigatorScreenParams<RootTabParamList> | undefined | any;
  Map: NavigatorScreenParams<RootTabParamList> | undefined | any;
  Room: NavigatorScreenParams<RootTabParamList> | undefined | any;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  [key in EnumHomeTypes | EnumProfileTypes | EnumScreenTypes]: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
export enum EnumHomeTypes {
  Home = "Home",
  Welcome = "Calendar",
  About = "Places",
  WatchLive = "HOME LIVE",
}
export enum EnumProfileTypes {
  Profile = "PROFILE",
  Settings = "SETTINGS",
  Details = "DETAILS",
  Todo = "CONTACTS",
}
export enum EnumScreenTypes {
  Root = "Root",
  Modal = "Modal",
  NotFound = "NotFound",
  SignIn = "SignIn",
  Map = "Map",
  Room = "Room",
}

export type RootParams = {
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
export type CalendarEvent = {
  title: string;
  location: string;
  description: string;
  date: string | any;
  goingBy: string;
  goingByColor: string;
  icon: any;
};

// export const RoutesMain = [
//   {
//     component: WelcomeScreen,
//     name: EnumHomeTypes.Home,
//   },
//   {
//     component: DetailsScreen,
//     name: EnumProfileTypes.Profile,
//   },
// ];
// https://expo.dev/@konsbe/not-a-simple-smart-assistant?serviceType=classic&distribution=expo-go