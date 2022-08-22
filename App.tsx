import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import BottomNavigation from "./navigation/BottomNavigator";
import SignInScreen from "./views/SignIn";

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
const NavBar = createNativeStackNavigator<any>();

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [state, setState] = useState(false);
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        {!state ? (
          <SignInScreen setState={setState} />
        ) : (
          <>
            <BottomNavigation colorScheme={colorScheme} />
            <StatusBar />
          </>
        )}
      </SafeAreaProvider>
    );
  }
}

