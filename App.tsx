import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import UserContextProvider from "./context/UserContext";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import LinkingConfiguration from "./LinkingConfiguration";
import MainRoute from "./routes";

const Stack = createNativeStackNavigator<any>();

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <NavigationContainer linking={LinkingConfiguration}>
          <UserContextProvider>
            <MainRoute />
          </UserContextProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}

