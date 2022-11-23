import { StyleSheet } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  EnumHomeTypes,
  EnumProfileTypes,
  RootStackParamList,
  RootTabParamList,
} from "../../types";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createMaterialTopTabNavigator<RootTabParamList>();
type RootParams = keyof RootTabParamList | EnumHomeTypes | EnumProfileTypes;
const Stack = createNativeStackNavigator<RootStackParamList>();

interface IProps {
  components: Array<{
    component: React.ComponentType<any>;
    name: RootParams;
  }>;
}
export default function UpperNavigator(props: IProps) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#000000",
      }}
    >
      {props.components.map(({ component, name }, index) => {
        return (
          <Tab.Screen
            component={component}
            name={name}
            options={{ tabBarLabel: name }}
            key={index}
          />
        );
      })}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});

