import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { View, Text, Pressable } from "react-native";
import React from "react";
import ExitButton from "../FormComponents/Buttons/ExitButton";
import { EnumHomeTypes, EnumScreenTypes } from "../../types";
import { useNavigation } from "@react-navigation/native";
import useColorScheme from "../../hooks/useColorScheme";
import Colors from "../../constants/Colors";

export default function HeaderRight({ contextData, route }: any) {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
  return (
    <View style={{ flexDirection: "row" }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginRight: 5,
        }}
      >
        {contextData.userName ? contextData.userName : "unkown"}
      </Text>
      {route === EnumHomeTypes.Home ? (
        <Pressable
          onPress={() => navigation.navigate(EnumScreenTypes.Modal)}
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
          })}
        >
          <FontAwesome
            name="info-circle"
            size={25}
            color={Colors[colorScheme].text}
            style={{ marginRight: 15 }}
          />
        </Pressable>
      ) : (
        <></>
      )}
      <ExitButton contextData={contextData} />
    </View>
  );
}
