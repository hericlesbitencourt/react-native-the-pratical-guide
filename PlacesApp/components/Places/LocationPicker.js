import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from 'expo-location';
import { Colors } from '../../constants/colors';
import OutlinedButton from '../UI/OutlinedButton';
import { getAddress, getMapPreview } from '../../utils/location';
import {
  useNavigation,
  useRoute,
  useIsFocused,
} from '@react-navigation/native';

export default function LocationPicker({ onPickLocation }) {
  const [pickedLocation, setPickedLocation] = useState();
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const route = useRoute();
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();

  useEffect(() => {
    if (isFocused && route.params) {
      const mapPickedLocation = {
        latitude: route.params.pickedLatitude,
        longitude: route.params.pickedLongitude,
      };
      setPickedLocation(mapPickedLocation);
    }
  }, [route, isFocused]);

  useEffect(() => {
    async function handleLocation() {
      if (pickedLocation) {
        getAddress(pickedLocation.latitude, pickedLocation.longitude);
        onPickLocation({...pickedLocation, address: address});
      }
    }

    handleLocation();
  }, [pickedLocation, onPickLocation]);

  async function verifyPermissions() {
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permisionResponse = await requestPermission();

      return permisionResponse.granted;
    }

    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Insuficient Permissions!',
        'You need to grant location permissions to use this app.'
      );

      return false;
    }

    return true;
  }

  async function getLocationHandler() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }
    const location = await getCurrentPositionAsync();
    setPickedLocation({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  }

  function pickOnMapHandler() {
    navigation.navigate('Map');
  }

  let locationPreview = <Text>No location picker yet.</Text>;

  if (pickedLocation) {
    locationPreview = (
      <Image
        style={styles.image}
        source={{
          uri: getMapPreview(pickedLocation.latitude, pickedLocation.longitude),
        }}
      />
    );
  }

  return (
    <View>
      <View style={styles.mapPreview}>{locationPreview}</View>
      <View style={styles.actions}>
        <OutlinedButton icon='location' onPress={getLocationHandler}>
          Locate User
        </OutlinedButton>
        <OutlinedButton icon='map' onPress={pickOnMapHandler}>
          Pick on Map
        </OutlinedButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mapPreview: {
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 4,
  },
});
