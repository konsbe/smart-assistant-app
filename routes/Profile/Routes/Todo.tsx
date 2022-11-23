import { StackActions } from "@react-navigation/native";
import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import CardDivider from "../../../components/Card";
import { EnumProfileTypes, RootTabScreenProps } from "../../../types";
import Modal from "../../../components/Modal";
import { useState } from "react";
import ModalPoup from "../../../components/Modal";
export default function TodoScreen({
  navigation,
}: RootTabScreenProps<EnumProfileTypes.Todo>) {
  const [visible, setVisible] = useState(false);
  const toggleModal = () => {
    setVisible(!visible);
  };
  const toggleCloseModal = () => {
    if (visible) setVisible(!visible);
  };

  return (
    <>
      <CardDivider
        toggleModal={toggleModal}
        onPress={() => toggleCloseModal()}
      />
      <ModalPoup
        toggleCloseModal={toggleCloseModal}
        toggleClose={toggleCloseModal}
        visible={visible}
      />
    </>
  );
}

const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  header: {
    width: "100%",
    height: 40,
    alignItems: "flex-end",
    justifyContent: "center",
  },
});
