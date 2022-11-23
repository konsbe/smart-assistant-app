import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryTooltip,
} from "victory-native";

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
];

export const VictoryChartBar = ({
  victoryMonthlyData,
}: {
  victoryMonthlyData: any[];
}) => {
  const [myData, setMyData] = useState(victoryMonthlyData);
  useEffect(() => {
    setMyData(victoryMonthlyData);
  }, [victoryMonthlyData]);

  return (
    <View style={styles.container}>
      <VictoryChart
        // domain={{ x: [0, 12], y: [0, 1000] }}
        domainPadding={20}
        theme={VictoryTheme.material}
        animate={{
          onLoad: { duration: 1000 },
          duration: 1000,
          easing: "bounce",
        }}>
        <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
          tickFormat={[
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "June",
            "July",
            "Aug",
            "Sept",
            "Oct",
            "Nov",
            "Dec",
          ]}
        />
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
          tickFormat={(x) => `$${x / 1000}k`}
        />
        <VictoryBar
          labelComponent={<VictoryTooltip renderInPortal={false} />}
          data={victoryMonthlyData}
          style={{
            data: { fill: "tomato", width: 20 },
          }}
        />
      </VictoryChart>
    </View>
  );
};
export default VictoryChartBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff",
  },
});
