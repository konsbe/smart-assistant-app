import * as React from "react";
import { View, Text } from "react-native";
import {
  EnumHomeTypes,
  EnumProfileTypes,
  RootTabScreenProps,
} from "../../../types";

export default function DetailsScreen({
  navigation,
}: RootTabScreenProps<EnumProfileTypes.Details>) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => navigation.navigate(EnumHomeTypes.Welcome)}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        Details Screen
      </Text>
    </View>
  );
}
