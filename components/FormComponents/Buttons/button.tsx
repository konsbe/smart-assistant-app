import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text } from "react-native";

const styling = {
  btn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
};
const Button = ({
  styles,
  handlePress,
  textButton,
  textStyles,
}: {
  styles?: React.CSSProperties;
  handlePress: (prop?: any) => void;
  textButton: string;
  textStyles?: React.CSSProperties;
}) => {
  return (
    <TouchableOpacity
      style={styles ? styles : !styling.btn}
      onPress={handlePress}>
      <Text style={textStyles}>{textButton}</Text>
    </TouchableOpacity>
  );
};

export default Button;
