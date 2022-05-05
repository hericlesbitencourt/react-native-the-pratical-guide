import { StyleSheet, useWindowDimensions, View } from "react-native";
import { Colors } from "../../constants/colors";

export function Card({children}) {
  const {width} = useWindowDimensions();

  const cardStyleResponsive = {
    marginTop: width < 380 ? 18 : 36,
  }
  
  return (
    <View style={[styles.card, cardStyleResponsive]}>
        {children}
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
      },
})