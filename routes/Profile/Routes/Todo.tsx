import * as React from "react";
import { View, Text } from "react-native";
import { EnumProfileTypes, RootTabScreenProps } from "../../../types";

export default function TodoScreen({
  navigation,
}: RootTabScreenProps<EnumProfileTypes.Todo>) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => navigation.navigate(EnumProfileTypes.Details)}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        Todo
      </Text>
    </View>
  );
}
