import { StyleSheet, Text, View } from 'react-native';

export function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitleContainer: {
    margin: 4,
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e2b497',
    textAlign: 'center',
  },
});
