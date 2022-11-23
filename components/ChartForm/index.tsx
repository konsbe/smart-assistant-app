import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import DropdownComponent from "../DropDownList";
import { InputField } from "../FormComponents/InputField";
import CustomButton from "../FormComponents/Buttons/button"
import { styles } from "./styles";

interface IProps {
  type: string;
  month: number;
  amount: number;
}
const ChartForm = ({
  charge,
  setCharge,
  handleSubmit,
}: {
  charge: IProps;
  setCharge: any;
  handleSubmit:() =>void;
}) => {
  return (
    <View
      style={{
        width: "100%",
        marginBottom: 50,
        alignItems: "center",
        backgroundColor: "white",
      }}>
      <DropdownComponent
        dropDownData={shoppingData}
        title={"Select Charging Type"}
        value={charge.type}
        setValue={(val: string) => setCharge({ ...charge, type: val })}
      />
      <DropdownComponent
        dropDownData={monthsData}
        title={"Select Month"}
        value={charge.month}
        setValue={(val: string) => setCharge({ ...charge, month: val })}
      />
      <View style={{ width: "100%", padding: 16, alignItems: "center" }}>
        <InputField
          styles={styles.inputField}
          placeholder={"Amount spent in $"}
          placeholderTextColor={"green"}
          secureText={false}
          keyboardType="numeric"
          value={charge.amount}
          setValue={(val: number) => setCharge({ ...charge, amount: val })}
        />
        <CustomButton
          handlePress={handleSubmit}
          textButton="Submit"
          styles={styles.btnSubmit}
          textStyles={styles.btnText}
        />
        </View>
    </View>
  );
};

export default ChartForm;

const shoppingData = [
  { label: "electricity bills", value: "electricity bills" },
  { label: "house bill", value: "house bill" },
  { label: "super market", value: "super market" },
  { label: "water bill", value: "water bill" },
  { label: "clothing", value: "clothing" },
  { label: "night out", value: "night out" },
];

const monthsData = [
  { label: "January", value: "1" },
  { label: "February", value: "2" },
  { label: "March", value: "3" },
  { label: "April", value: "4" },
  { label: "May", value: "5" },
  { label: "June", value: "6" },
  { label: "July", value: "7" },
  { label: "August", value: "8" },
  { label: "September", value: "9" },
  { label: "October", value: "10" },
  { label: "November", value: "11" },
  { label: "December", value: "12" },
];
