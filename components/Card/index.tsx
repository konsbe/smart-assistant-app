import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Linking,
  Platform
} from "react-native";
import React from "react";
import {
  FontAwesome,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";
import { Card } from "@rneui/themed";
import { lectors } from "./lectors";

export default function CardDivider(props: any) {
  return (
    // implemented without image with header
    <ScrollView>
      <View style={styles.container}>
        <Card containerStyle={styles.containerStyle}>
          <Card.Title>Teachers</Card.Title>
          <Card.Divider />
          {lectors.map((u, i) => {
            return (
              <View key={i} style={styles.user}>
                <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={{ uri: u.avatar }}
                />
                <View style={styles.text}>
                  <Text style={styles.name}>{u.name}</Text>
                  <Text style={styles.name}
                    onPress={() =>
                      Linking.openURL(
                        `mailto:${u.email}subject=testing&body=${u.name}`
                      )
                    }
                  >{u.email}</Text>
                  <Text
                    style={styles.name}
                    onPress={() => Linking.openURL(`tel:${u.telephone}`)}
                  >
                    {u.telephone}
                  </Text>
                </View>
                <View style={styles.buttons}>
                  <MaterialCommunityIcons
                    name="card-account-details-outline"
                    size={20}
                    color="black"
                    onPress={() => props.toggleModal()}
                  />
                  <FontAwesome
                    name="mail-reply"
                    size={20}
                    color="black"
                    onPress={() =>
                      Linking.openURL(
                        `mailto:${u.email}subject=testing&body=${u.name}`
                      )
                    }
                  />
                  <Feather
                    name="phone-call"
                    size={20}
                    color="black"
                    onPress={() => Linking.openURL(`tel:${u.telephone}`)}
                  />
                </View>
              </View>
            );
          })}
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#42d1f5",
  },
  containerStyle: {
    borderWidth: 0,
    backgroundColor: "#42d1f5",
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    backgroundColor: "#b5e8f5",
    borderRadius: 10,
    flexDirection: "row",
    marginBottom: 6,
  },
  text: {
    flexDirection: "column",
    justifyContent: "space-around",
    flexGrow: 40,
  },
  image: {
    width: 70,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    height: "100%",
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  buttons: {
    marginRight: 3,
    justifyContent: "space-around",
  },
});
