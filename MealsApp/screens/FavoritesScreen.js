import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { MEALS } from '../data/dummy-data';
import { MealsList } from '../components/MealsList/MealsList';
import { useSelector } from 'react-redux';
// import { FavoritesContext } from '../store/context/favorites-context'

export function FavoritesScreen() {
  // const favoritesMealsCtx = useContext(FavoritesContext)
  const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorites meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
