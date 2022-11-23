import { StatusBar, StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: "pink",
    width:"100%"
  },
  text: {
    fontSize: 42,
  },
  basicContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: 10,
    paddingBottom: 60,
  },
});
