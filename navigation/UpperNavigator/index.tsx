import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { RootTabParamList } from "../../types";

const Tab = createMaterialTopTabNavigator<RootTabParamList>();

interface IProps {
  components: Array<{
    component: React.ComponentType<any>;
    name: keyof RootTabParamList;
  }>;
}
const MyTabs = ({
  components,
}: {
  components: Array<{
    component: React.ComponentType<any>;
    name: keyof RootTabParamList;
  }>;
}) => {
  return (
    <Tab.Navigator
      initialRouteName={components[0].name}
      screenOptions={{
        tabBarActiveTintColor: "#000000",
      }}
    >
      {components.map(({ component, name }, index) => {
        return (
          <Tab.Screen
            name={name as keyof RootTabParamList}
            component={component}
            options={{ tabBarLabel: name }}
            key={index}
          />
        );
      })}
    </Tab.Navigator>
  );
};

const BottomNavigator = (props: IProps) => {
  return <MyTabs components={props.components} />;
};

export default BottomNavigator;

const styles = StyleSheet.create({});
