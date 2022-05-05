import { View, Text, StyleSheet } from 'react-native'


export const MealsOverview = () => {
  return (
    <View style={styles.container}>
      <Text>MealsOverview</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})