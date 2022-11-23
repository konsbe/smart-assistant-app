import {StyleSheet} from "react-native"

export const styling = StyleSheet.create({
    footer: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
    },
    btnsGroups: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
    },
    btnWrapper: {
      display: "flex",
      flexDirection: "row",
      width: "95%",
      alignItems: "center",
      justifyContent: "space-between",
    },
    btnSubmit: {
      borderRadius: 5,
      width: 100,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "green",
    },
    btnText: {
      color: "white",
    },
    btnCancel: {
      borderRadius: 5,
      width: 100,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "red",
    },
    inputField: {
      fontSize: 12,
      width: "95%",
      marginBottom: 20,
      borderBottomWidth: 1,
    },
    inputFieldMultiline: {
      justifyContent: "flex-start",
      width: "95%",
      fontSize: 12,
      marginBottom: 20,
      paddingTop: 0,
      borderWidth: 1,
    },
    goingByCards: { height:35, width:35, display:"flex", alignItems:"center", borderWidth:1, margin:4 },
    goingByContainer: { display:"flex", flexDirection:"row", alignItems:"center", justifyContent: "center"},
  });