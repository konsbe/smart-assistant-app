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
import NotFoundScreen from "../../views/NotFoundScreen";

const Tab = createMaterialTopTabNavigator<RootTabParamList>();
type RootParams = keyof RootTabParamList | EnumHomeTypes | EnumProfileTypes;

interface IProps {
  components: Array<{
    component: React.ComponentType<any>;
    name: RootParams;
  }>;
}
const MyTabs = ({
  components,
}: {
  components: Array<{
    component: React.ComponentType<any>;
    name: RootParams;
  }>;
}) => {
  return (
    <Tab.Navigator
      // initialRouteName={components[0].name}
      screenOptions={{
        tabBarActiveTintColor: "#000000",
      }}
    >
      {components.map(({ component, name }, index) => {
        return (
          <Tab.Screen
            name={name as RootParams}
            component={component}
            options={{ tabBarLabel: name }}
            key={index}
          />
        );
      })}
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function UpperNavigator(props: IProps) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Route"
        // component={() => <UpperTabNavigator components={props.components} />} //this is weak it may cause proplems prever child props
        options={{ headerShown: false }}
      >
        {() => <UpperTabNavigator components={props.components} />}
      </Stack.Screen>
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}

export const UpperTabNavigator = (props: IProps): JSX.Element => {
  return (
    <>
      <MyTabs components={props.components} />
    </>
  );
};

export default UpperNavigator;

const styles = StyleSheet.create({});
