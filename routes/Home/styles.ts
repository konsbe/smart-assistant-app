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
  body: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#000',

  },
  text: {
      fontSize: 40,
      margin: 10,
  },
  input: {
      width: 300,
      borderWidth: 1,
      borderColor: '#555',
      borderRadius: 10,
      backgroundColor: '#ffffff',
      textAlign: 'center',
      fontSize: 20,
      marginTop: 130,
      marginBottom: 10,
  },
  item: {
      backgroundColor: '#ffffff',
      borderWidth: 2,
      borderColor: '#cccccc',
      borderRadius: 5,
      margin: 7,
      width: 350,
      justifyContent: 'center',
      alignItems: 'center',
  },
  title: {
      fontSize: 30,
      margin: 10,
  },
  subtitle: {
      fontSize: 20,
      margin: 10,
      color: '#999999',
  }
})
