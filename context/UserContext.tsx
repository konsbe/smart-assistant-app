import React, { createContext } from "react";

// Creating my Context-Provider in this case is just a theme
// import { themeContextInter } from "./interface";
export interface IUserContextData {
  isLightTheme: boolean;
  light: { syntac: string; ui: string; bg: string };
  dark: { syntac: string; ui: string; bg: string };
  userName: string;
  userLessons: [];
}
export const INITAL_VALUES: IUserContextData = {
  isLightTheme: true,
  light: { syntac: "#555", ui: "#ddd", bg: "#eee" },
  dark: { syntac: "#ddd", ui: "#333", bg: "#555" },
  userName: "",
  userLessons: [],
};

export const UserContext = createContext<IUserContextData | null>(null);

const UserContextProvider = ({ children }: { children: JSX.Element }) => {
  const [userContextData, setUserContextData] =
    React.useState<IUserContextData>(INITAL_VALUES);
  const state: any = {
    userContextData,
    setUserContextData,
  };
  return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
