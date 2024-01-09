import React, {useEffect} from 'react';
import {Image, PermissionsAndroid} from 'react-native';
import RootNavigator from './src/routes';
import {enableScreens} from 'react-native-screens';
import launch_splash from './src/assets/launch_screen.png';
import {
  requestBluetoothPermission,
  requestCameraPermission,
  requestLocationPermission,
} from './src/utils/permission';

enableScreens(false);

export default function App() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  // ongeo location
  // Geolocation.getCurrentPosition(
  //   position => {
  //     console.log('position', position);
  //   },
  //   error => {
  //     console.log('error', error);
  //   },
  //   {
  //     enableHighAccuracy: true,
  //     timeout: Infinity,
  //   },
  // );

  // if location is off then turn on location automatically in android device ?

  useEffect(() => {
    requestBluetoothPermission();
    // requestLocationPermission();
    // requestCameraPermission();
  }, []);

  // if blutooth is off then turn on bluetooth automatically in android device ?

  // if (Platform.OS === 'android') {
  //   const BleManager = require('react-native-ble-manager').default;
  //   BleManager.enableBluetooth()
  //     .then(() => {
  //       // Success code
  //       // console.log('The bluetooth is already enabled or the user confirm');
  //     })
  //     .catch(error => {
  //       // Failure code
  //       // console.log('The user refuse to enable bluetooth');
  //     });
  // }

  if (loading) {
    return (
      <Image
        source={launch_splash}
        style={{
          width: '100%',
          height: '100%',
          resizeMode: 'cover',
        }}
      />
    );
  }

  return <RootNavigator />;
}
