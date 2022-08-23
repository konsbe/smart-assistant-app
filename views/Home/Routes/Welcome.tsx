import * as React from "react";
import { View, Text } from "react-native";
import { EnumHomeTypes, RootTabScreenProps } from "../../../types";
import AboutScreen from "./About";

export default function WelcomeScreen({
  navigation,
}: RootTabScreenProps<EnumHomeTypes.Welcome>): JSX.Element {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => navigation.push("Route")}
        // onPress={() => navigation.push("Route", { route: "Home" })}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        Welcome
      </Text>
    </View>
  );
}
