import * as React from "react";
import { View, Text } from "react-native";
import { EnumHomeTypes, RootTabScreenProps } from "../../../types";

export default function WelcomeScreen({
  navigation,
}: RootTabScreenProps<EnumHomeTypes.Welcome>): JSX.Element {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => navigation.navigate(EnumHomeTypes.About)}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        Welcome
      </Text>
    </View>
  );
}
