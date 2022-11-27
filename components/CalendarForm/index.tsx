import React from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";
import { InputField } from "../FormComponents/InputField";
import CustomButton from "../FormComponents/Buttons/button";
import DateTimePicker from "@react-native-community/datetimepicker";
import { FontAwesome5, Ionicons, FontAwesome } from "@expo/vector-icons";
import { styling } from "./styles";
import { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { VectorIcon } from "../VectorIcon";
import { FlipInEasyX } from "react-native-reanimated";
import GooglePlacesInput from "../AutoComplete/autoComplete";

type CalendarEvent = {
  title: string;
  location: string;
  description: string;
  date: string | any;
  goingBy: string;
  goingByColor: string;
  icon: any;
};

const CalendarForm = ({
  cancelButton,
  setCalendarEvent,
  calendarEvent,
  handleSubmit,
}: {
  cancelButton: () => void;
  setCalendarEvent: any;
  calendarEvent: CalendarEvent;
  handleSubmit: () => void;
}) => {
  const [mode, setMode] = React.useState("date");
  const [show, setShow] = React.useState(false);
  const [region, setRegion] = React.useState({
    lat: 0,
    lng: 0,
  });
  const onChange = (
    event: DateTimePickerEvent,
    date?: Date | undefined
  ): void => {
    const currentDate = date ? date : new Date();
    setShow(false);
    setCalendarEvent({ ...calendarEvent, date: currentDate });
  };
  const showMode = (currentMode: React.SetStateAction<string>) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };
  const handleVectorPress = (props: any) => {
    setCalendarEvent({
      ...calendarEvent,
      goingBy: props.name,
      lng:region.lng,
      lat:region.lat,
      goingByColor: props.backGroundColor,
      icon: props.vectorIcon,
    });
  };

  return (
    <>
      <View style={styling.footer}>
        <InputField
          styles={styling.inputField}
          placeholder={"Title"}
          placeholderTextColor={"green"}
          secureText={false}
          value={calendarEvent.title}
          setValue={(val: string) =>
            setCalendarEvent({ ...calendarEvent, title: val })
          }
        />
        <GooglePlacesInput
          region={region}
          setRegion={setRegion}
          location={""}
        />
        {/* <InputField
          styles={styling.inputField}
          placeholder={"location"}
          placeholderTextColor={"red"}
          secureText={false}
          value={calendarEvent.location}
          setValue={(val: string) =>
            setCalendarEvent({ ...calendarEvent, location: val })
          }
        /> */}
        <InputField
          styles={styling.inputFieldMultiline}
          placeholder={"description"}
          secureText={false}
          value={calendarEvent.description}
          setValue={(val: string) =>
            setCalendarEvent({ ...calendarEvent, description: val })
          }
          multiline={true}
          numberOfLines={4}
        />
      </View>
      <View style={styling.btnsGroups}>
        <View style={styling.btnWrapper}>
          <Button onPress={showDatepicker} title="Show date picker!" />
          <Button onPress={showTimepicker} title="Show time picker!" />
        </View>
        <Text>selected day: {calendarEvent.date.toLocaleString()}</Text>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={calendarEvent.date}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
          />
        )}
      </View>
      <View style={styling.goingByContainer}>
        {goingBy.map((itemCard, index) => {
          return (
            <View
              style={{
                ...styling.goingByCards,
                backgroundColor: itemCard.backGroundColor,
              }}
              key={index}>
              <TouchableOpacity onPress={() => handleVectorPress(itemCard)}>
                <VectorIcon
                  type={itemCard.vectorIcon}
                  name={itemCard.name}
                  size={30}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
      <View style={{ backgroundColor: calendarEvent.goingByColor }}>
        <Text>going by: {calendarEvent.goingBy}</Text>
      </View>
      <View style={styling.btnWrapper}>
        <CustomButton
          handlePress={handleSubmit}
          textButton="submit"
          styles={styling.btnSubmit}
          textStyles={styling.btnText}
        />
        <CustomButton
          handlePress={cancelButton}
          textButton="cancel"
          styles={styling.btnCancel}
          textStyles={styling.btnText}
        />
      </View>
    </>
  );
};
const goingBy: any[] = [
  { vectorIcon: FontAwesome5, name: "walking", backGroundColor: "#ffc2f4" },
  { vectorIcon: FontAwesome5, name: "car-alt", backGroundColor: "#91ffb8" },
  { vectorIcon: Ionicons, name: "airplane", backGroundColor: "#549cbf" },
  { vectorIcon: FontAwesome, name: "ship", backGroundColor: "#8cfaf3" },
  { vectorIcon: FontAwesome, name: "taxi", backGroundColor: "#e3fa98" },
  { vectorIcon: Ionicons, name: "train", backGroundColor: "#FFD3B5" },
];

export default CalendarForm;
const colors = ["#ffc2f4", "#9abdf5"];
