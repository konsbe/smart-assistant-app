import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import React from "react";
import {
  EnumHomeTypes,
  EnumProfileTypes,
  EnumScreenTypes,
  RootTabParamList,
  RootTabScreenProps,
} from "../../types";
import { useNavigation } from "@react-navigation/native";
import { StackActions } from "@react-navigation/native";

export default function ExitButton() {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        // navigation.dispatch(StackActions.replace(EnumScreenTypes.SignIn))
        navigation.dispatch(StackActions.popToTop())
      }
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
      })}
    >
      <Ionicons name="exit" size={25} style={{ marginRight: 15 }} />
    </Pressable>
  );
}

const styles = StyleSheet.create({});
