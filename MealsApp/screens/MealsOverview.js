import { View, Text, StyleSheet } from "react-native";

export const MealsOverview = ({ route }) => {
  const categoryId = route.params.categoryId;
  return (
    <View style={styles.container}>
      <Text>MealsOverview - {categoryId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
