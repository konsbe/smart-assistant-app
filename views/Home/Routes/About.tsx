import * as React from "react";
import { View, Text } from "react-native";
import { EnumHomeTypes, RootTabScreenProps } from "../../../types";

export default function AboutScreen({
  navigation,
}: RootTabScreenProps<EnumHomeTypes.About>): JSX.Element {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => navigation.navigate("Root")}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        About Screen
      </Text>
    </View>
  );
}
