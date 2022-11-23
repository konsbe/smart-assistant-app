import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Svg, { G, Line, Circle, Rect, Text as SvgText } from "react-native-svg";
import { styles } from "./styles";
const window_width = Dimensions.get("window").width;
const barChartData = [
  { month: "Jan", money: 350 },
  { month: "Feb", money: 200 },
  { month: "Mar", money: 100 },
  { month: "Apr", money: 189 },
  { month: "May", money: 123 },
  { month: "June", money: 321 },
  { month: "July", money: 222 },
  { month: "Aug", money: 265 },
  { month: "Sept", money: 176 },
  { month: "Oct", money: 175 },
  { month: "Nov", money: 185 },
  { month: "Dec", money: 88 },
];

export const BarChart = () => {
    // const [yAxisData, setYAxisData] = useState([]);
  const containerHeight = 400;
  const backgroundColor = "#000000";
  const axisColor = "#9cc";
  const circleRadius = 4;
  const axisWidth = 2;
  const axisFontSize = 12;
  const barWidth = 20;

  const marginLeft_for_y_axis = 50;
  const marginBottom_for_x_axis = 50;
  const padding_from_screen = 20;

  const x_axis_x1_point = marginLeft_for_y_axis;
  const x_axis_y1_point = containerHeight - marginBottom_for_x_axis;
  const x_axis_x2_point = window_width - padding_from_screen;
  const x_axis_y2_point = x_axis_y1_point;

  const y_axis_x1_point = marginLeft_for_y_axis;
  const y_axis_y1_point = padding_from_screen;
  const y_axis_x2_point = marginLeft_for_y_axis;
  const y_axis_y2_point = containerHeight - marginBottom_for_x_axis;

  // const yAxisData = barChartData?.map((item) => item.money);
  const yAxisData = [0, 30, 60, 100, 130, 160, 200, 230, 260, 300, 330, 350];

  const x_axis_width =
    window_width - padding_from_screen - marginLeft_for_y_axis;
  const gap_between_x_axis_ticks = x_axis_width / (barChartData.length + 1);

  const y_axis_height =
    containerHeight - padding_from_screen - marginBottom_for_x_axis;
  const gap_between_y_axis_ticks = y_axis_height / (yAxisData?.length - 1);

  const minValue = 0;
  const maxValue = Math.max.apply(
    Math,
    barChartData?.map((item) => item.money)
  );
  const gapBetweenYaxisValues = (maxValue - minValue) / 2;
    // useEffect(() => {
    //   const newLabels: any = Array.from(barChartData).map(
    //     (val, index) => val.money
    //   );
    //   // const newArr = barChartData?.map((item) => item.money)
    //   newLabels.push(0)
    //   setYAxisData(newLabels);
    // }, []);

  const render_x_axis = (
    <G>
      <Circle
        cx={x_axis_x1_point}
        cy={x_axis_y1_point}
        fill={axisColor}
        r={circleRadius}
      />
      <Circle
        cx={x_axis_x2_point}
        cy={x_axis_y2_point}
        fill={axisColor}
        r={circleRadius}
      />
      <Line
        x1={x_axis_x1_point}
        y1={x_axis_y1_point}
        x2={x_axis_x2_point}
        y2={x_axis_y2_point}
        strokeWidth={axisWidth}
        stroke={axisColor}
      />
    </G>
  );
  const render_y_axis = () => (
    <G key="y-axis">
      <Circle
        cx={y_axis_x1_point}
        cy={y_axis_y1_point}
        fill={axisColor}
        r={circleRadius}
      />
      <Line
        x1={y_axis_x1_point}
        y1={y_axis_y1_point}
        x2={y_axis_x2_point}
        y2={y_axis_y2_point}
        strokeWidth={axisWidth}
        stroke={axisColor}
      />
    </G>
  );
  const render_x_axis_ticks_renders = () => {
    return barChartData.map((dataItem, index) => {
      const x_point_x_axis_tick =
        gap_between_x_axis_ticks +
        x_axis_x1_point +
        gap_between_x_axis_ticks * index;

      return (
        <G key={`x-axis ticks and labels ${index}`}>
          <Line
            x1={x_point_x_axis_tick}
            y1={x_axis_y1_point}
            x2={x_point_x_axis_tick}
            y2={x_axis_y1_point + 10}
            strokeWidth={axisWidth}
            stroke={axisColor}
          />
          <SvgText
            x={x_point_x_axis_tick}
            y={x_axis_y1_point + 10 + axisFontSize}
            fill="#fff"
            textAnchor="middle"
            fontSize={axisFontSize}>
            {dataItem.month}
          </SvgText>
        </G>
      );
    });
  };
  const render_y_axis_ticks_labels = () => {
    return yAxisData?.map((item, index) => {
      const y_point_y_axis_tick =
        y_axis_y2_point - gap_between_y_axis_ticks * index;

      return (
        <G key={`y-axis ticks and labels ${index}`}>
          <Line
            x1={y_axis_x2_point}
            y1={y_point_y_axis_tick}
            x2={y_axis_x2_point - 10}
            y2={y_point_y_axis_tick}
            strokeWidth={axisWidth}
            stroke={axisColor}
          />
          <SvgText
            x={y_axis_x2_point - 10 - 5}
            y={y_point_y_axis_tick}
            fill="#fff"
            textAnchor="end"
            fontSize={axisFontSize}>
            {item}
          </SvgText>
        </G>
      );
    });
  };
  const render_barchart = () => {
    const gap_between_y_axis_ticks = y_axis_height / (yAxisData?.length - 1);
    return barChartData.map((dataItem, index) => {
      let x_point_x_axis_tick =
        gap_between_x_axis_ticks +
        x_axis_x1_point +
        gap_between_x_axis_ticks * index;
      let height =
        dataItem.money -
        (containerHeight * gap_between_y_axis_ticks) /
          (maxValue - minValue) /
          2;

      return (
        <G key={`bar chart ${index}`}>
          <Rect
            x={x_point_x_axis_tick - barWidth / 2}
            y={x_axis_y1_point}
            height={-height}
            width={20}
            fill={"#daa400"}
          />
        </G>
      );
    });
  };
  return (
    <View style={[styles.container, { height: containerHeight }]}>
      <Svg
        height="100%"
        width="100%"
        style={{ backgroundColor: backgroundColor }}>
        {render_x_axis}
        {render_x_axis_ticks_renders()}
        {render_y_axis()}
        {render_y_axis_ticks_labels()}
        {yAxisData?.length > 0 && render_barchart()}
      </Svg>
    </View>
  );
};

export default BarChart;
