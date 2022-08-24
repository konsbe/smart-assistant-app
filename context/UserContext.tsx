import React, { createContext } from "react";

// Creating my Context-Provider in this case is just a theme
// import { themeContextInter } from "./interface";
export interface IUserContext {
  isLightTheme: boolean;
  light: { syntac: string; ui: string; bg: string };
  dark: { syntac: string; ui: string; bg: string };
  userName: string;
  userLessons: [];
}
export const INITAL_VALUES: IUserContext = {
  isLightTheme: true,
  light: { syntac: "#555", ui: "#ddd", bg: "#eee" },
  dark: { syntac: "#ddd", ui: "#333", bg: "#555" },
  userName: "",
  userLessons: [],
};

export const UserContext = createContext({});

const UserContextProvider = ({ children }: { children: JSX.Element }) => {
  const [state, setState] = React.useState<IUserContext>(INITAL_VALUES);
  return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
