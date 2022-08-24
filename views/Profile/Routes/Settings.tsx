import * as React from "react";
import { View, Text } from "react-native";
import {
  EnumHomeTypes,
  EnumProfileTypes,
  RootTabScreenProps,
} from "../../../types";

export default function SettingsScreen({
  navigation,
}: RootTabScreenProps<EnumProfileTypes.Settings>) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => navigation.navigate(EnumHomeTypes.WatchLive)}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        Settings Screen
      </Text>
    </View>
  );
}
