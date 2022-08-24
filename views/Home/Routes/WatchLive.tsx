import * as React from "react";
import { View, Text } from "react-native";
import { EnumHomeTypes, RootTabScreenProps } from "../../../types";

// export type RootTabParamList = {
//   [key in EnumHomeTypes | EnumProfileTypes]: undefined;
// };

// export type RootTabScreenProperties<Screen extends keyof RootTabParamList> =
//   CompositeScreenProps<
//     BottomTabScreenProps<RootTabParamList, Screen>,
//     NativeStackScreenProps<RootStackParamList>
//   >;

export default function WatchLiveScreen({
  navigation,
}: RootTabScreenProps<EnumHomeTypes.WatchLive>) {
  console.log(navigation);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => navigation.navigate(EnumHomeTypes.Welcome)}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        Whos In Now
      </Text>
    </View>
  );
}
