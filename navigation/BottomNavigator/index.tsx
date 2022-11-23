import { FontAwesome } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
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
import { StackActions } from "@react-navigation/native";
import HeaderRight from "../../components/Header/HeaderRight";
import MapScreen from "../../routes/Map/Map";
import RoomScreen from "../../routes/Room/Room";

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function BottomNavigation({ contextData }: any) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={EnumScreenTypes.Root}
        // component={TabNavigator}
        options={{ headerShown: false }}
      >
        {() => <TabNavigator contextData={contextData} />}
      </Stack.Screen>
      <Stack.Screen name={EnumScreenTypes.SignIn} component={SignInScreen} />
      <Stack.Screen
        name={EnumScreenTypes.NotFound}
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Screen name={EnumScreenTypes.Map} component={MapScreen} />
      <Stack.Screen name={EnumScreenTypes.Room} component={RoomScreen} />
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
            <HeaderRight contextData={contextData} route={EnumHomeTypes.Home} />
          ),
        })}
      />
      <Tab.Screen
        name={EnumProfileTypes.Profile}
        component={ProfileRoute}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            // Prevent default action to handle it with navigation object
            e.preventDefault();
            !contextData.userName
              ? // Do something with the `navigation` object
                navigation.dispatch(
                  StackActions.replace(EnumScreenTypes.SignIn)
                )
              : navigation.navigate(EnumProfileTypes.Profile);
          },
        })}
        options={({
          navigation,
        }: RootTabScreenProps<EnumProfileTypes.Profile>) => ({
          title: EnumProfileTypes.Profile,
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <HeaderRight
              contextData={contextData}
              route={EnumProfileTypes.Profile}
            />
          ),
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

