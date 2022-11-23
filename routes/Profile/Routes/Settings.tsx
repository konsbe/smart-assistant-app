import { StackActions } from "@react-navigation/native";
import * as React from "react";
import { View, Text } from "react-native";
import {
  EnumHomeTypes,
  EnumProfileTypes,
  EnumScreenTypes,
  RootTabScreenProps,
} from "../../../types";

export default function SettingsScreen({
  navigation,
}: RootTabScreenProps<EnumScreenTypes.Map>) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() =>
          navigation.dispatch(
            StackActions.replace("Root", { screen: EnumHomeTypes.WatchLive })
          )
        }
        style={{ fontSize: 26, fontWeight: "bold" }}>
        Settings Screen
      </Text>
    </View>
  );
}
