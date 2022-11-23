import React, { useCallback, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import ChartForm from "../../../components/ChartForm";
import VictoryChartBar from "../../../components/Charts/victoryBarChart";
import CustomDataComponent from "../../../components/Charts/lineChart";
import {
  EnumHomeTypes,
  EnumProfileTypes,
  EnumScreenTypes,
  RootTabScreenProps,
} from "../../../types";
import {
  INITIAL_CHARGE_STATE,
  INITIAL_MONTHLY_DATA,
  INITIAL_PIE_CHART_DATA,
} from "../mock";
import { styles } from "../styles";
export default function DetailsScreen({
  navigation,
}: RootTabScreenProps<EnumProfileTypes.Details>) {
  const [victoryMonthlyData, setVictoryMonthlyData] =
    useState(INITIAL_MONTHLY_DATA);
  const [charge, setCharge] = useState(INITIAL_CHARGE_STATE);
  const [pieData, setPieData] = useState(INITIAL_PIE_CHART_DATA);

  const handleSubmit = () => {
    let cmonth = charge.month;

    setPieData(
      pieData?.map((datum: any, index) => {
        let fmonth = datum.x;
        if (cmonth.toString() === fmonth.toString()) {
          datum.y = parseFloat(datum.y) + parseFloat(charge.amount);
          datum.pie.map((val, idx) => {
            if (val.label === charge.type) {
              val.y = parseFloat(charge.amount) + parseFloat(val.y);
            }
          });
        }
        datum = { ...datum, label: datum.label.split(" ")[0] };
        // delete datum.label;
        return datum;
      })
    );

    setVictoryMonthlyData(
      victoryMonthlyData.map((item, index) => {
        let fmonth = item.x;
        if (cmonth.toString() === fmonth.toString()) {
          victoryMonthlyData[index].y =
            parseFloat(item.y) + parseFloat(charge.amount);
          victoryMonthlyData[index].label = `${item.label?.split(" ")[0]} ${
            victoryMonthlyData[index].y
          } $`;
        }
        return item;
      })
    );
  };

  const VictorBarChart = useCallback(
    ({ victoryMonthlyData }: { victoryMonthlyData: any[] }) => {
      return <VictoryChartBar victoryMonthlyData={victoryMonthlyData} />;
      return <></>;
    },
    [victoryMonthlyData]
  );
  const VictorLineChart = useCallback(
    ({ pieData }: { pieData: any[] }) => {
      return (
      // <></>
          <CustomDataComponent pieData={pieData} />
      );
    },
    [pieData]
  );
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.basicContainer}>
          {/* <BarChart /> */}
          {/* <VictoryChartBar/> */}
          {/* <GraphChart/> */}
          <VictorBarChart victoryMonthlyData={victoryMonthlyData} />
          <ChartForm
            charge={charge}
            setCharge={setCharge}
            handleSubmit={handleSubmit}
          />
          <VictorLineChart
            // victoryMonthlyData={victoryMonthlyData}
            pieData={pieData}
          />
        </View>
      </ScrollView>
    </View>
  );
}
