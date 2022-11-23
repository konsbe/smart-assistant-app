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
import MapView, { Callout, Marker } from "react-native-maps";
import GooglePlacesInput from "../../components/AutoComplete/autoComplete";
import { useCallback } from "react";

export default function MapScreen({
  navigation,
  route,
}: RootTabScreenProps<EnumScreenTypes.Map>) {
  const [region, setRegion] = React.useState({ lat: 0, lng: 0 });

  const { location, title }: any = route.params;

  const MapComponent = useCallback(
    ({ lat, lng }: { lat: number; lng: number }): JSX.Element => {
      return (
        <View style={styles.container}>
          <Text style={[GlobalStyle.CustomFont, styles.text]}>{title}</Text>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: region.lat === 0 ? 54.5259614 : region.lat,
              longitude: region.lng === 0 ? 15.2551187 : region.lng,
              latitudeDelta: 0.0002,
              longitudeDelta: 15.1821,
            }}
            provider="google"
          />
          <Marker
            coordinate={{
              latitude: region.lat === 0 ? 54.5259614 : region.lat,
              longitude: region.lng === 0 ? 15.2551187 : region.lng,
            }}
            pinColor="black"
            draggable={true}
            onDragStart={(e) => {
              // console.log("Drag start", e.nativeEvent.coordinate);
            }}
            onDragEnd={(e) => {
              setRegion({
                lat: e.nativeEvent.coordinate.latitude,
                lng: e.nativeEvent.coordinate.longitude,
              });
            }}>
            <Callout>
              <Text>Here</Text>
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
