import { StyleSheet, Text, TextInput, View } from 'react-native';

export function Input({ label, textInputProps }) {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput {...textInputProps} />
    </View>
  );
}

const styles = StyleSheet.create({});
