import * as React from "react";
import { useState } from "react";
import {
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  TextStyle,
  KeyboardTypeOptions,
} from "react-native";

export const InputField = ({
  styles,
  placeholder,
  placeholderTextColor,
  secureText,
  setValue,
  multiline,
  numberOfLines,
  keyboardType
}: {
  styles: StyleProp<TextStyle>;
  placeholder: string;
  placeholderTextColor?: string;
  secureText: boolean;
  value: any;
  setValue: any;
  multiline?: boolean;
  numberOfLines?: number;
  keyboardType?:KeyboardTypeOptions
}): JSX.Element => {
  return (
    <TextInput
      numberOfLines={numberOfLines}
      multiline={multiline}
      style={styles ? styles : styling.TextInput}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      secureTextEntry={secureText}
      onChangeText={(value) => setValue(value)}
      keyboardType={keyboardType ? keyboardType : "default"}
    />
  );
};
const styling = StyleSheet.create({
  TextInput: { fontSize: 20, width: 100, marginBottom: 10 },
});
