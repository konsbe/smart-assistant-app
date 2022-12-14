import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Switch
} from "react-native";
import React, { useState } from "react";
import { EnumScreenTypes, RootTabScreenProps } from "../../types";
import { VectorIcon } from "../../components/VectorIcon";
import { AntDesign } from "@expo/vector-icons";
import * as Progress from "react-native-progress";

export default function RoomScreen({
  navigation,
  route,
}: RootTabScreenProps<EnumScreenTypes.Room>) {
  const { item, value, setRoomsContextData, roomsContextData }: any = route.params;
  const [progress, setProgress] = useState<number>(0.3);
  // const [progress, setProgress] = useState<number>(value.temperature/100 -20);
  React.useEffect(() => {
    setRoomsContextData({...roomsContextData, [`${item}`]: {...value, ["temperature"]: progress}})
  },[progress, setProgress])
  console.log("item: ",item)
  console.log("roomsContext: ",roomsContextData[item])
  console.log("value: ",value)
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    //  <ScrollView>
    <View style={styles.container}>
      <Image style={styles.image} source={value.image} />
      <Text style={styles.header}>{item}</Text>
      <View style={styles.containerBar}>
        <TouchableOpacity onPress={() => setProgress(progress - 0.1)}>
          <VectorIcon
            type={AntDesign}
            name={"minuscircle"}
            size={24}
            color={"black"}
          />
        </TouchableOpacity>
        <Progress.Bar
          progress={progress}
          width={200}
          height={24}
          style={{ marginHorizontal: 5 }}
        ><Text style={{position:"absolute", alignSelf:"center"}}>{progress*10+20} oC</Text></Progress.Bar>
        <TouchableOpacity onPress={() => setProgress(progress + 0.1)}>
          <VectorIcon
            type={AntDesign}
            name={"pluscircle"}
            size={24}
            color={"black"}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.containerBar}>
      <Text style={styles.text}>Light's: </Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </View>
    </View>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  containerBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // marginVertical:10,
    width: "70%",
    justifyContent:"space-between"
  },
  image: {
    width:"100%",
    height: 300,
  },
  progressBar: {
    marginHorizontal: 5,
    // width: "100%",
  },
  header: {
    fontSize: 30,
  },
  text: {
    fontSize: 20,
  },
});
