import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export function UserScreen({ navigation }) {
  function openDrawerHandler() {
    navigation.toggleDrawer();
  }

  return (
    <View>
      <Text>User Screen</Text>
      <Button title="Open Drawer" onPress={openDrawerHandler} />
    </View>
  );
}

const styles = StyleSheet.create({});
