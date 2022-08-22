import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/Home/Home";
import Profile from "../../screens/Profile/Profile";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AboutScreen from "../../screens/Home/About";
import SettingsScreen from "../../screens/Profile/Settings";
import HomeScreen from "../../screens/Home/Home";

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#000000",
        // style: { backgroundColor: "#000000" },
      }}
      // tabBarOptions={{
      //   style: { backgroundColor: "black" },
      // }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarLabel: "About" }}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{ tabBarLabel: "About" }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ tabBarLabel: "Settings" }}
      />
    </Tab.Navigator>
  );
};

const BottomNavigator = () => {
  return (
    <>
      <MyTabs />
    </>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({});
