import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { VictoryChart, VictoryScatter, VictoryZoomContainer } from 'victory-native';

const VictoryChartBubble = () => {
    return (
        <VictoryChart
          domain={{y: [0, 400]}}
          containerComponent={<VictoryZoomContainer zoomDomain={{x: [5, 35], y: [0, 400]}}/>}
        >
          <VictoryScatter
            data={data}
            style={{
              data: {
                opacity: ({ datum }) =>  datum.y % 5 === 0 ? 1 : 0.7,
                fill: ({ datum }) => datum.y % 5 === 0 ? "tomato" : "black"
              }
            }}
          />
        </VictoryChart>
      );
    }

export default VictoryChartBubble

const data = [
    { x: "Jan", y: 350,size: 35 },
    { x: "Feb", y: 200,size: 20 },
    { x: "Mar", y: 100,size: 10 },
    { x: "Apr", y: 189,size: 18 },
    { x: "May", y: 123,size: 12 },
    { x: "June",y: 321, size: 32 },
    { x: "July",y: 222, size: 22 },
    { x: "Aug", y: 265,size: 26 },
    { x: "Sept",y: 176, size: 17 },
    { x: "Oct", y: 175,size: 17 },
    { x: "Nov", y: 185,size: 18 },
    { x: "Dec", y: 88,size: 88},
  ];


const styles = StyleSheet.create({})