import { NumberValue } from "d3-scale";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

interface IProps {
  region: { lat: number; lng: number };
  setRegion: (value: any) => void;
  location: string;
}

const GooglePlacesInput = (props: IProps) => {
  const ref = useRef<any>();
  const [dest, setDest] = useState();
  const { region, setRegion, location } = props;

  useEffect(() => {
    // ref.current?.setAddressText("Syntagma");
    ref.current?.setAddressText("");
    // ref.current?.("");
  }, []);
  useEffect(() => {
    ref.current?.setAddressText(`${location}`);
    ref.current?.focus();
    // ref.current?.blur();
  }, [ref]);
  return (
    <GooglePlacesAutocomplete
      ref={ref}
      placeholder={location ? `${location}`: "Choose a place"}
      fetchDetails={true}
      keepResultsAfterBlur={true}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        setRegion({
          lat: details?.geometry.location.lat
            ? details?.geometry.location.lat
            : 0,
          lng: details?.geometry.location.lng
            ? details?.geometry.location.lng
            : 0,
        });
      }}
      query={{
        // key: "AIzaSyClDGpur3KtYNHpABdDTVTiAsdHcrt5nuA",
        key: "AIzaSyArbKw_YsajTYYnrFvec2qg0WtMkOsVHmQ",
        language: "en",
      }}
      styles={{
        container: { flex: 0, width: "95%",  },
        listView: { backgroundColor: "white" },
        textInput: {
          borderBottomColor: "#888",
          borderWidth: 1,
          borderRadius: 3,
          backgroundColor:"#ebebeb"
        },
      }}
    />
  );
};

export default GooglePlacesInput;
