import { StyleSheet } from 'react-native'

export function GoalItem() {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{itemData.item.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5E0ACC",
  },
  goalText: {
    color: "white",
  },
})