import { StyleSheet, Text, View } from "react-native";

export function GameScreen() {
  return (
    <View style={styles.screen}>
        <Text>Opponent's Guess</Text>
        <View>
            <Text>Higher or lower?</Text>
        </View>
        <View></View>
    </View>
  )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12
    }
})