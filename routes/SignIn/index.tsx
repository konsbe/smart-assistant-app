import * as React from "react";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { EnumScreenTypes, RootTabScreenProps } from "../../types";
import { IUserContext, UserContext } from "../../context/UserContext";

export default function SignInScreen({
  navigation,
}: RootTabScreenProps<EnumScreenTypes.SignIn>) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userName, userLessons } =
    React.useContext<Partial<IUserContext>>(UserContext);

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
        onPress={(e) => navigation.navigate(EnumScreenTypes.Root)}
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
