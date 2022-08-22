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
import AboutScreen from "./screens/Home/Routes/About";
import HomeScreen from "./screens/Home/Routes/Home";
import WatchLiveScreen from "./screens/Home/Routes/WatchLive";
import DetailsScreen from "./screens/Profile/Routes/Details";
import ProfileScreen from "./screens/Profile/Routes/Profile";
import SettingsScreen from "./screens/Profile/Routes/Settings";

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
    component: React.Component;
    name: EnumHomeTypes.Home;
  };

  About: {
    component: React.Component;
    name: EnumHomeTypes.About;
  };
  WatchLive: {
    component: React.Component;
    name: EnumHomeTypes.WatchLive;
  };
  Profile: {
    component: React.Component;
    name: EnumProfileTypes.Profile;
  };
  Details: {
    component: React.Component;
    name: EnumProfileTypes.Details;
  };
  Settings: {
    component: React.Component;
    name: EnumProfileTypes.Settings;
  };
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
export enum EnumProfileTypes {
  Profile = "Profile",
  Settings = "Settings",
  Details = "Details",
}
export enum EnumHomeTypes {
  Home = "Home",
  About = "About",
  WatchLive = "WatchLive",
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
export const RoutesHome = [
  {
    component: HomeScreen,
    name: EnumHomeTypes.Home,
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

export const RoutesProfile = [
  {
    component: ProfileScreen,
    name: EnumProfileTypes.Profile,
  },
  {
    component: SettingsScreen,
    name: EnumProfileTypes.Settings,
  },
  {
    component: DetailsScreen,
    name: EnumProfileTypes.Details,
  },
];
