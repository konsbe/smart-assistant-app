import * as React from "react";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

interface IProps {
  setState: (value: boolean) => void;
}

export default function SignInScreen(props: IProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const goToRoutes = () => {};
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => props.setState(true)}
      >
        <Text>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = {
  inputView: {},

  TextInput: { fontSize: 20, width: 100, marginBottom: 10 },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
};
