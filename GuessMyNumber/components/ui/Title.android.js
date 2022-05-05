import { StyleSheet, Text, Platform } from "react-native";
import { Colors } from "../../constants/colors";

export function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    color: Colors.white,
    textAlign: "center",
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    borderWidth: 2,
    borderColor: Colors.white,
    padding: 12,
    maxWidth: "80%",
    minWidth: 300,
  },
});
