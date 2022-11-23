import React, { Component, PureComponent } from "react";
import { Alert, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  Agenda,
  DateData,
  AgendaEntry,
  AgendaSchedule,
} from "react-native-calendars";
import { CalendarEvent } from "../../types";
import { VectorIcon } from "../VectorIcon";

interface State {
  items?: AgendaSchedule;
  val?: string;
  width: number;
  markingDates: any;
  data?: any;
}
interface AgendaScheduleEntries extends AgendaEntry, CalendarEvent {
  color: string;
}

class AgendaScreen extends PureComponent<State> {
  state: State = {
    items: this.props.items,
    val: this.props.val,
    width: this.props.width,
    markingDates: this.props.markingDates,
    data: this.props.data,
  };

  render() {
    return (
      <View style={styles.container}>
        <Agenda
          items={this.state.items}
          loadItemsForMonth={this.loadItems}
          // selected={this.state.val}
          refreshing={true}
          // renderItem={(props) => {
          //   return <RenderItem {...props} />;
          // }}
          renderItem={this.renderItem}
          // renderEmptyDate={this.renderEmptyDate}
          // rowHasChanged={this.rowHasChanged}
          showClosingKnob={true}
          style={{ width: this.state.width - 10 }}
          // pastScrollRange={50}
          futureScrollRange={25}
          // Specify how each item should be rendered in agenda
          markingType={"period"}
          markedDates={this.state.markingDates}
          theme={{
            agendaDayTextColor: "yellow",
            agendaDayNumColor: "green",
            agendaTodayColor: "red",
            calendarBackground: "grey",
            agendaKnobColor: "black",
          }}
        />
      </View>
    );
  }

  loadItems = (day: DateData) => {
    const items = this.state.data || {};
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);

        if (!items[strTime]) {
          items[strTime] = [];
          items[strTime].push({
            name: "Nothing at " + strTime + " #",
            height: Math.max(50, Math.floor(Math.random() * 150)),
            day: strTime,
            desciption: strTime,
          });
        }
      }

      const newItems: AgendaSchedule = {};
      // Object.keys(items).forEach((key) => {
      //   Object.keys(key).map((item) => {
      //   });
      //   newItems[key] = items[key];
      // });

      Object.entries(items).map(([key, value]: any) => {
        value.map((titem: any) => {
          newItems[key] = titem;
        });
      });
      this.setState({
        items: {
          ...items,
          ...newItems,
          ...this.state.data,
        },
      });
    }, 1000);
  };
  renderItem = (
    reservation: AgendaScheduleEntries,
    isFirst: boolean
  ): JSX.Element => {
    const fontSize = isFirst ? 16 : 14;
    const color = isFirst ? "black" : "#43515c";

    return (
      <TouchableOpacity
        style={[
          styles.item,
          { height: reservation.height, backgroundColor: reservation.color },
        ]}
        onPress={() => Alert.alert(reservation.name, reservation.description)}>
        <Text style={{ fontSize, color }}>{reservation.name}</Text>
        {reservation.icon && (
          <VectorIcon
            type={reservation.icon}
            name={reservation.goingBy}
            size={24}
            color={"black"}
          />
        )}
      </TouchableOpacity>
    );
  };

  renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text style={{ fontSize: 26 }}>This is empty date!</Text>
      </View>
    );
  };

  rowHasChanged = (r1: AgendaEntry, r2: AgendaEntry) => {
    return r1.name !== r2.name;
  };

  timeToString(time: number) {
    const date = new Date(time);
    return date.toISOString().split("T")[0];
  }
}

export default React.memo(AgendaScreen);
const styles = StyleSheet.create({
  container: {
    // flex: 20,
  },
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
    alignSelf: "stretch",
    height: 15,
  },
  emptyDate: {
    flex: 1,
    paddingTop: 30,
  },
});
