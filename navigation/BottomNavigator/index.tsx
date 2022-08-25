import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable, View } from "react-native";
import { Text } from "react-native";
import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import ModalScreen from "../../routes/ModalScreen";
import NotFoundScreen from "../../routes/NotFoundScreen";
import {
  EnumHomeTypes,
  EnumProfileTypes,
  EnumScreenTypes,
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../../types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeRoute from "../../routes/Home";
import ProfileRoute from "../../routes/Profile";
import SignInScreen from "../../routes/SignIn";
import ExitButton from "../../components/Buttons/ExitButton";
import UserContext from "../../context/UserContext";
import { StackActions } from "@react-navigation/native";

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function BottomNavigation({ contextData }: any) {
  return (
    <Stack.Navigator>
      <Stack.Screen name={EnumScreenTypes.SignIn} component={SignInScreen} />
      <Stack.Screen
        name={EnumScreenTypes.Root}
        // component={TabNavigator}
        options={{ headerShown: false }}
      >
        {() => <TabNavigator contextData={contextData} />}
      </Stack.Screen>
      <Stack.Screen
        name={EnumScreenTypes.NotFound}
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name={EnumScreenTypes.Modal} component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch routes.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const Tab = createBottomTabNavigator<RootTabParamList>();

function TabNavigator({ contextData }: any) {
  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator
      initialRouteName={EnumHomeTypes.Home}
      screenOptions={{
        tabBarActiveTintColor: "#000000",
      }}
    >
      <Tab.Screen
        name={EnumHomeTypes.Home}
        component={HomeRoute}
        options={({ navigation }: RootTabScreenProps<EnumHomeTypes.Home>) => ({
          title: EnumHomeTypes.Home,
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  marginRight: 5,
                }}
              >
                {contextData.userName ? contextData.userName : "unkown"}
              </Text>
              <Pressable
                onPress={() => navigation.navigate(EnumScreenTypes.Modal)}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}
              >
                <FontAwesome
                  name="info-circle"
                  size={25}
                  color={Colors[colorScheme].text}
                  style={{ marginRight: 15 }}
                />
              </Pressable>
              <ExitButton />
            </View>
          ),
        })}
      />
      <Tab.Screen
        name={EnumProfileTypes.Profile}
        component={ProfileRoute}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            // Prevent default action
            e.preventDefault();
            !contextData.userName
              ? // Do something with the `navigation` object
                navigation.dispatch(StackActions.popToTop())
              : navigation.navigate(EnumProfileTypes.Profile);
          },
        })}
        options={({
          navigation,
        }: RootTabScreenProps<EnumProfileTypes.Profile>) => ({
          title: EnumProfileTypes.Profile,
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => {
            return (
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    marginRight: 5,
                  }}
                >
                  {contextData.userName ? contextData.userName : "unkown"}
                </Text>
                <ExitButton />
              </View>
            );
          },
        })}
      />
    </Tab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

// export default function BottomNavigation({
//   colorScheme,
// }: {
//   colorScheme: ColorSchemeName;
// }) {
//   return (
//     <NavigationContainer
//       linking={{
//         prefixes: [Linking.createURL("/")],
//         config: {
//           initialRouteName: "HomeScreen",
//           screens: {
//             HomeScreen: "home",
//             AboutScreen: "about",
//             WatchLiveScreen: "watch",
//           },
//         },
//       }}
//       theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
//     >
//       <RootNavigator />
//     </NavigationContainer>
//   );
// }
