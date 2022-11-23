import * as React from "react";
import { View, Dimensions, Pressable, Animated } from "react-native";
import { EnumHomeTypes, RootTabScreenProps } from "../../../types";
import AgendaScreen from "../../../components/Calendar/agenda";
import { VectorIcon } from "../../../components/VectorIcon";
import { Entypo } from "@expo/vector-icons";
import CalendarForm from "../../../components/CalendarForm";
import {
  CalendarEvent,
  datesStyles,
  INITIAL_DATES,
  INITIAL_STATE,
  styling,
} from "../mockNtypes";
import { useContext } from "react";
import { CalendarContext } from "../../../context/TripContext";

export default function WelcomeScreen({
  navigation,
}: RootTabScreenProps<EnumHomeTypes.Welcome>) {
  const height = React.useState(
    new Animated.Value(Dimensions.get("window").height - 200)
  )[0];
  const [calendarEvent, setCalendarEvent] =
    React.useState<CalendarEvent>(INITIAL_STATE);
  const [calendarInfos, setCalendarInfos] = React.useState<any>(INITIAL_DATES);
  const [calendarStyles, setCalendarStyles] = React.useState<any>(datesStyles);
  const [state, setState] = React.useState(true);
  
  const {calendarContextData, setCalendarContextData} = useContext<any>(CalendarContext)


  const onPressFunction = () => {
    if (state) {
      setCalendarEvent(INITIAL_STATE);
      Animated.timing(height, {
        toValue: 120,
        duration: 200,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(height, {
        toValue: Dimensions.get("window").height - 200,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
    setState(!state);
  };

  const handleSubmit = () => {
    // console.log("calendarInfos: ",calendarInfos)
    if (
      !calendarInfos[
        calendarEvent?.date.toISOString().split("T")[0]
      ][0].name.includes("Nothing")
    ) {
      setCalendarInfos({
        ...calendarInfos,
        [calendarEvent.date.toISOString().split("T")[0]]: [
          ...calendarInfos[calendarEvent.date.toISOString().split("T")[0]],
          {
            name: calendarEvent.title,
            description: calendarEvent.description,
            color: calendarEvent.goingByColor,
            goingBy: calendarEvent.goingBy,
            icon: calendarEvent.icon,
          },
        ],
      });
    } else {
      setCalendarInfos({
        ...calendarInfos,
        [calendarEvent.date.toISOString().split("T")[0]]: [
          {
            name: calendarEvent.title,
            description: calendarEvent.description,
            color: calendarEvent.goingByColor,
            goingBy: calendarEvent.goingBy,
            icon: calendarEvent.icon,
          },
        ],
      });
    }
    setCalendarStyles({
      ...calendarStyles,
      [calendarEvent.date.toISOString().split("T")[0]]: {
        startingDay: true,
        endingDay: true,
        color: calendarEvent.goingByColor,
      },
    });
    setCalendarContextData([...calendarContextData, calendarEvent])
    setCalendarEvent(INITIAL_STATE);
    Animated.timing(height, {
      toValue: Dimensions.get("window").height - 200,
      duration: 500,
      useNativeDriver: false,
    }).start();
    setState(!state);
  };
  const AgendaComponent = React.useCallback(() => {
    return (
      <AgendaScreen
        items={undefined}
        val={undefined}
        width={Dimensions.get("window").width}
        markingDates={calendarStyles}
        data={calendarInfos}
        // markingDates={INITIAL_DATES}
        // data={datesStyles}
      />
    );
  }, [calendarInfos]);
  return (
    <>
      <Animated.View
        style={{
          display: "flex",
          alignItems: "flex-start",
          width: "100%",
          margin: 5,
          height: height,
        }}>
        <AgendaComponent />
      </Animated.View>
      <View style={styling.footer}>
        <View style={{ display: state ? "flex" : "none" }}>
          <Pressable onPress={onPressFunction}>
            <VectorIcon
              type={Entypo}
              name="add-to-list"
              size={24}
              color="black"
            />
          </Pressable>
        </View>
        <CalendarForm
          cancelButton={onPressFunction}
          setCalendarEvent={setCalendarEvent}
          calendarEvent={calendarEvent}
          handleSubmit={handleSubmit}
        />
      </View>
    </>
  );
}
