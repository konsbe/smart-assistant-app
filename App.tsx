import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import UserContextProvider from "./context/UserContext";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import LinkingConfiguration from "./LinkingConfiguration";
import MainRoute from "./routes";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Ofucking yeah or oh no</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
const Stack = createNativeStackNavigator<any>();

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [state, setState] = useState(false);
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

