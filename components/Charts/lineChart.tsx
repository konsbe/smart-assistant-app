import React, { useLayoutEffect, useRef, useState } from "react";
import { Dimensions, View } from "react-native";
import { G } from "react-native-svg";
import {
  VictoryAxis,
  VictoryChart,
  VictoryGroup,
  VictoryLabel,
  VictoryLine,
  VictoryPie,
  VictoryScatter,
  VictoryTheme,
  VictoryTooltip,
  VictoryVoronoiContainer,
} from "victory-native";

export const CustomPie = (props: any): JSX.Element => {
  const { datum, x, y } = props;
  const pieWidth = 120;
  // console.log("props: ", props.height);

  return (
    <G transform={`translate(${x - pieWidth / 2}, ${y - pieWidth / 2})`}>
      <VictoryPie
        standalone={false}
        height={pieWidth}
        width={pieWidth}
        data={datum.pie}
        style={{ labels: { fontSize: 0 } }}
        colorScale={["#f77", "#55e", "#8af"]}
        labels={() => "These labels just go on, and on, and on..."}
        labelComponent={
          <VictoryTooltip
            cornerRadius={({ datum }) => (datum.x > 6 ? 0 : 10)}
            pointerLength={({ datum }) => (datum.y > 0 ? 5 : 10)}
            text={({ datum }) => `${datum.y} \n ${datum.label}`}
            data={datum.pie}
            renderInPortal={false}
            style={{
              fill: "tomato",
              width: 20,
              position: "absolute",
              zIndex: 1000,
            }}
            flyoutStyle={{ fill: "#CAFFF3" }}
            center={{ x: 50, y: props.height - 380 }}
            pointerOrientation="top"
            flyoutWidth={150}
            flyoutHeight={50}
            pointerWidth={15}
          />
        }
      />
    </G>
  );
};

export const CustomDataComponent = ({
  pieData,
}: {
  pieData: any;
}): JSX.Element => {
  const [mochData, setMochData] = useState(pieData);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  return (
    <View
      onLayout={(event) => {
        setWidth(event.nativeEvent.layout.width);
        setHeight(event.nativeEvent.layout.height);
      }}>
      <VictoryChart
        height={500}
        padding={{ right: 20, left: 50, top: 120, bottom: 120 }}
        domain={{ x: [0, 12] }}
        theme={VictoryTheme.material}
        //   containerComponent={<VictoryVoronoiContainer />}
      >
        <VictoryAxis />
        <VictoryAxis tickFormat={(x) => `$${x / 1000}k`} dependentAxis />
        {/* <VictoryAxis dependentAxis /> */}

        <VictoryGroup data={mochData}>
          <VictoryLine
            animate={{
              onLoad: { duration: 1000 },
              duration: 1000,
              easing: "linear",
            }}
            //   labelComponent={<VictoryLabel style={{ zIndex: 0 }} />}
            //   labelComponent={<VictoryTooltip renderInPortal={false} />}
          />
          <VictoryScatter dataComponent={<CustomPie height={height} />} />
        </VictoryGroup>
      </VictoryChart>
    </View>
  );
};
export default CustomDataComponent;
