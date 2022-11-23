import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import ModalPoup from "../../../components/Modal";
import { EnumHomeTypes, RootTabScreenProps } from "../../../types";
import { rooms } from "../../../smartHome";
import { FontAwesome5, Ionicons, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { VectorIcon } from "../../../components/VectorIcon";

export type IArray = Array<{
  ark: number;
  isOpen: boolean;
  title: string;
  description: string;
}>;
let newArray: IArray = [...Array(42).keys()].map((key) => {
  return {
    ark: key,
    isOpen: Math.random() * 10 > 8 ? true : false,
    title: "This is the title",
    description: "this is the description",
  };
});
export default function WatchLiveScreen({
  navigation,
}: RootTabScreenProps<EnumHomeTypes.WatchLive>) {
  const [visible, setVisible] = React.useState(false);
  const [array, setArray] = React.useState<IArray>(newArray);
  const toggleModal = () => {
    setVisible(!visible);
  };
  const toggleCloseModal = () => {
    if (visible) setVisible(!visible);
  };

  Object.entries(rooms).map(([key, value]:any) => {
    if(value?.controllers) console.log("value: ", Object.values(value.controllers)[0]);
  });

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>Class Rooms</Text>
        <View style={styles.boxes}>
          {Object.entries(rooms).map(([key, value]: any, index) => {
            const rndnumber = Math.random() * 10;
            // const color = props.isOpen ? "green" : "none";
            return (
              <View key={index} style={{ ...styles.box }}>
                <View style={styles.sideTexts}>
                  <Image style={styles.image} source={value.image} />
                  <View style={styles.sideTexts}>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        padding: 5,
                      }}>
                      <View style={styles.sideTexts}>
                        <VectorIcon
                          type={FontAwesome5}
                          name={"temperature-high"}
                          size={24}
                          color={value.temperature > 25 ? "red" : "blue"}
                        />
                        <Text>{value.temperature} oC</Text>
                      </View>
                        {value.controllers ? (
                          <View style={styles.sideTexts}>
                            <VectorIcon
                              type={MaterialCommunityIcons}
                              name={"devices"}
                              size={24}
                              color={Object.values(value.controllers)[0] ? "green" : "red"}
                            />
                            <Text>{Object.keys(value.controllers)[0]}</Text>
                          </View>
                        ) : (
                          ""
                        )}
                      <View style={styles.sideTexts}>
                        <VectorIcon
                          type={FontAwesome5}
                          name={"lightbulb"}
                          size={24}
                          color={value.state.lights ? "orange" : "gray"}
                        />
                        <Text>{value.state.lights ? "on" : "off"}</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.title}>
                  <TouchableOpacity
                    onPress={() => {
                      // handleNotification(item, index);
                      navigation.navigate("Room");
                    }}>
                    <Text style={styles.text}>{key}</Text>
                  </TouchableOpacity>
                  {/* <Text onPress={() => toggleModal()}>{key}</Text> */}
                </View>
              </View>
            );
          })}
        </View>
        <ModalPoup
          toggleCloseModal={toggleCloseModal}
          toggleClose={toggleCloseModal}
          visible={visible}
        />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  header: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
  boxes: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    display: "flex",
    flexDirection: "row",
  },
  box: {
    borderWidth: 2,
    borderRadius: 15,
    margin: 5,
    width: "45%",
    height: 160,
    // padding: 2,
    display: "flex",
    flexDirection: "column",
  },
  cardContainer: {
    borderWidth: 2,
    borderRadius: 15,
    margin: 5,
    width: "45%",
    height: 160,
    // padding: 2,
  },
  title: { width: "100%", alignItems: "center", backgroundColor: "green" },
  text: { color: "white" },
  sideTexts: { display: "flex", flexDirection: "row",justifyContent:"space-evenly" },
  image: { width: "50%", borderTopLeftRadius: 15, height: 130 },
});
// 102255476975023921050
