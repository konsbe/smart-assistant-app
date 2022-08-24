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
import NotFoundScreen from "../../routes/NotFoundScreen";

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

// const MyTabs = ({
//   components,
// }: {
//   components: Array<{
//     component: React.ComponentType<any>;
//     name: RootParams;
//   }>;
// }) => {
//   return (
//     <Stack.Navigator>
//       {components.map(({ component, name }, index) => {
//         return (
//           <Stack.Screen
//             name={name}
//             component={component}
//             options={{ headerShown: false }}
//             key={index}
//           />
//         );
//       })}
//     </Stack.Navigator>
//   );
// };

// export const UpperTabNavigator = (props: IProps): JSX.Element => {
//   return (
//     <>
//       <MyTabs components={props.components} />
//     </>
//   );
// };
/**this is on comment its for passing components as childrents */
// export default function UpperNavigator(props: IProps) {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Route"
//         // component={() => <UpperTabNavigator components={props.components} />} //this is weak it may cause proplems prever child props
//         options={{ headerShown: false }}
//       >
//         {() => <UpperTabNavigator components={props.components} />}
//       </Stack.Screen>
//       <Stack.Screen
//         name="NotFound"
//         component={NotFoundScreen}
//         options={{ title: "Oops!" }}
//       />
//     </Stack.Navigator>
//   );
// }
