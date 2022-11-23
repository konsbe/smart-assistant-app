import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { VictoryAxis, VictoryBar, VictoryChart, VictoryLabel } from "victory-native";

const VictoryBarChart = () => {
  return (
    <VictoryChart domainPadding={{ x: 40 }}>
      <VictoryBar
        data={shoppingData}
        x="experiment"
        y={(d) => (d.actual / d.expected) * 100}
        labelComponent={
            <VictoryLabel angle={90} verticalAnchor="middle" textAnchor="end"/>
          }
      />
      <VictoryAxis
        label="experiment"
        style={{
          axisLabel: { padding: 30 },
        }}
      />
      <VictoryAxis
        dependentAxis
        label="percent yield"
        style={{
          axisLabel: { padding: 40 },
        }}
      />
    </VictoryChart>
  );
};

const shoppingData = [
    { experiment: "electricity bills", expected: 3.75, actual: 3.21 },
    { experiment: "house bill", expected: 3.75, actual: 3.38 },
    { experiment: "super market", expected: 3.75, actual: 2.05 },
    { experiment: "water bill", expected: 3.75, actual: 3.71 },
    { experiment: "clothing", expected: 3.75, actual: 3.71 },
    { experiment: "night out", expected: 3.75, actual: 3.71 },
  ]

export default VictoryBarChart;

const styles = StyleSheet.create({});
