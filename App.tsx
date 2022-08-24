import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import LinkingConfiguration from "./LinkingConfiguration";
import BottomNavigation from "./navigation/BottomNavigator";
import ModalScreen from "./routes/ModalScreen";
import NotFoundScreen from "./routes/NotFoundScreen";
import SignInScreen from "./routes/SignIn";

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
        {!state ? (
          <NavigationContainer>
            {/* <Stack.Navigator>
              <Stack.Screen name="Root" options={{ headerShown: false }}>
                {() => <SignInScreen setState={setState} />}
              </Stack.Screen>
              <Stack.Screen
                name="NotFound"
                component={NotFoundScreen}
                options={{ title: "Oops!" }}
              />
              <Stack.Group screenOptions={{ presentation: "modal" }}>
                <Stack.Screen name="Modal" component={ModalScreen} />
              </Stack.Group>
            </Stack.Navigator> */}
            <SignInScreen setState={setState} />
          </NavigationContainer>
        ) : (
          <NavigationContainer linking={LinkingConfiguration}>
            {/* <NavigationContainer > */}
            <BottomNavigation colorScheme={colorScheme} />
            <StatusBar />
          </NavigationContainer>
        )}
      </SafeAreaProvider>
    );
  }
}

