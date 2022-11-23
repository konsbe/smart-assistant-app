import React, { createContext } from "react";

// Creating my Context-Provider in this case is just a theme
// import { themeContextInter } from "./interface";
export type IPropType = {
  ark: number;
  isOpen: boolean;
  title: string;
  description: string;
};
export type IArray = Array<IPropType>;
export interface IUserContextData {
  isLightTheme: boolean;
  light: { syntac: string; ui: string; bg: string };
  dark: { syntac: string; ui: string; bg: string };
  userName: string;
  userLessons: IArray;
}
const newArray: IArray =   [...Array(42).keys()].map((key) => {
  return {
    ark: key,
    isOpen: Math.random() * 10 > 8 ? true : false,
    title: "This is the title",
    description: "this is the description",
  };
});
export const INITAL_VALUES: IUserContextData = {
  isLightTheme: true,
  light: { syntac: "#555", ui: "#ddd", bg: "#eee" },
  dark: { syntac: "#ddd", ui: "#333", bg: "#555" },
  userName: "",
  userLessons: newArray,
};

export const UserContext = createContext<IUserContextData | null>(null);

const UserContextProvider: any = ({ children }: any) => {
  const [userContextData, setUserContextData] =
    React.useState<IUserContextData>(INITAL_VALUES);
  const state: any = {
    userContextData,
    setUserContextData,
  };
  return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
