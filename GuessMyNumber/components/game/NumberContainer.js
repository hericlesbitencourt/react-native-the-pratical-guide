import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { Colors } from "../../constants/colors";

export function NumberContainer({children}) {
  const {width, } = useWindowDimensions();

  const containerStyleResponsive = {
    padding: width < 380 ? 12 : 24,
    margin: width < 380 ? 12 : 24,
  }

  const numberTextStyleResponsive = {fontSize: width < 380 ? 28 : 36}
  
  return (
    <View style={[styles.container, containerStyleResponsive]}>
        <Text style={[styles.numberText, numberTextStyleResponsive]}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center"
    },
    numberText: {
        color: Colors.accent500,
        fontFamily: 'open-sans-bold',
        fontSize: 36,
    }
})