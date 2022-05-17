import { FlatList, StyleSheet } from 'react-native';

export default function PlacesList({ places }) {
  return (
    <FlatList data={places} keyExtractor={(item) => item.id} renderItem={} />
  );
}

const styles = StyleSheet.create({});
