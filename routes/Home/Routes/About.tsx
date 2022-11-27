import React, { useCallback, useContext, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import {
  EnumHomeTypes,
  EnumScreenTypes,
  RootTabScreenProps,
} from "../../../types";
import { styles } from "../styles";
import PushNotification from "react-native-push-notification";
import GlobalStyle from "../../../utils/GlobalStyle";
import { StackActions } from "react-navigation";
import { INITIAL_CARD_MAPS } from "../mockNtypes";
import { VectorIcon } from "../../../components/VectorIcon";
import { CalendarContext, CalendarEvent } from "../../../context/TripContext";
import { useEffect } from "react";

export default function AboutScreen({
  navigation,
}: RootTabScreenProps<EnumHomeTypes.About>): JSX.Element {
  const handleNotification = (item: any, index: any) => {
    PushNotification.cancelAllLocalNotifications();

    PushNotification.localNotification({
      channelId: "test-channel",
      title: "You clicked on " + item.country,
      message: item.city,
      bigText:
        item.city +
        " is one of the largest and most beatiful cities in " +
        item.country,
      color: "red",
      id: index,
    });
  };
  const { calendarContextData, setCalendarContextData } =
    useContext<any>(CalendarContext);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={[GlobalStyle.CustomFont, styles.text]}>Welcome!</Text>
      <FlatList
        data={calendarContextData}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {
              // handleNotification(item, index);
              navigation.navigate("Map", {
                title: item.title,
                location: item.location,
                itemLat: item.lat,
                itemLng: item.lng
              });
            }}>
            <View
              style={{ ...styles.item, backgroundColor: item.goingByColor }}>
              <Text style={styles.title}>{item.title}</Text>
              <VectorIcon
                type={item.icon}
                name={item.goingBy}
                size={24}
                color={""}
              />
              <Text style={styles.subtitle}>{item.location}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
//
