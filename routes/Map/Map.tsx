import { StackActions } from "@react-navigation/native";
import * as React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import {
  EnumHomeTypes,
  EnumProfileTypes,
  EnumScreenTypes,
  RootTabScreenProps,
} from "../../types";
import GlobalStyle from "../../utils/GlobalStyle";
import MapView, { Callout, Marker, Circle } from "react-native-maps";
import GooglePlacesInput from "../../components/AutoComplete/autoComplete";
import { useCallback } from "react";

export default function MapScreen({
  navigation,
  route,
}: RootTabScreenProps<EnumScreenTypes.Map>) {
  const [region, setRegion] = React.useState({ lat: 0, lng: 0 });
  const { location, title, itemLat, itemLng }: any = route.params;
	const [ pin, setPin ] = React.useState({
		latitude: itemLat,
		longitude:itemLng
	})
  // console.log("item: ",item)
  const MapComponent = useCallback(
    ({ lat, lng }: { lat: number; lng: number }): JSX.Element => {
      return (
        <View style={styles.container}>
          <Text style={[GlobalStyle.CustomFont, styles.text]}>{title}</Text>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: region.lat === 0 ? itemLat : region.lat,
              longitude: region.lng === 0 ? itemLng : region.lng,
              latitudeDelta: 0.0442,
              longitudeDelta: 0.4821,
            }}
            provider="google"
          />
          <Circle
            center={{
              latitude: itemLat,
              longitude: itemLng,
            }}
            radius={1000}
          />
          <Marker
            coordinate={pin}
            pinColor={"black"} // any color
            title={"title"}
            description={"description"}
            draggable={true}>
            <Callout style={{position:"absolute"}}>
              <Text style={{position:"absolute",backgroundColor:"red", fontSize:100, zIndex:2000}}>Here</Text>
            </Callout>
          </Marker>
        </View>
      );
    },
    [region, setRegion]
  );
  return (
    <>
      <GooglePlacesInput
        region={region}
        location={location}
        setRegion={setRegion}
      />
      <ScrollView style={styles.scrollView}>
        <MapComponent lat={region.lat} lng={region.lng} />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width - 20,
    height: 600,
  },
  body: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 40,
    // margin: 10,
  },
  scrollView: {
    width: "100%",
    marginTop: 20,
  },
});
