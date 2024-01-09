import React, {useRef, useState, useCallback, useEffect} from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  ScrollView,
  Text,
  Platform,
  PermissionsAndroid,
  ToastAndroid,
  Pressable,
} from 'react-native';

import ThermalPrinterModule from 'react-native-thermal-printer';

// if bluetooth is disabled, ask user to enable it

const ActivityIndicatorElement = () => {
  return (
    <View style={styles.activityIndicatorStyle}>
      <ActivityIndicator color="#1939B7" size="large" />
    </View>
  );
};

// print data
const text =
  'Municipal Rental Receipt\n \n' +
  '*********************************************** \n' +
  'Name: Test Name' +
  '\n' +
  'Market: ' +
  '\n' +
  '\n';

const BlueToothConnect = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
      {
        title: 'Bluetooth Permission',
        message: 'This app requires access to your bluetooth.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      await ThermalPrinterModule.getBluetoothDeviceList();
    }
  } catch (err) {
    ToastAndroid.show('Something went wrong', ToastAndroid.SHORT);
  }
};

export default function App() {
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    if (Platform.OS === 'android') {
      BlueToothConnect();
    }
  }, []);

  const print = async () => {
    setIsLoading(true);
    try {
      await ThermalPrinterModule.printBluetooth({
        payload: text,
        printerNbrCharactersPerLine: 32,
      });
    } catch (err) {
      ToastAndroid.show(err.message, ToastAndroid.SHORT);
    }
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
        }}>
        <Pressable
          style={{
            margin: 20,
            backgroundColor: 'blue',
            padding: 10,
            borderRadius: 10,
            alignItems: 'center',
          }}
          onPress={() => {
            print();
          }}>
          <Text style={{color: 'white'}}>PRINT</Text>
        </Pressable>
        {loading ? <ActivityIndicatorElement /> : null}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#FFFFFF',
    flex: 1,
  },
  activityIndicatorStyle: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  ScrollStyle: {
    backgroundColor: 'white',
    position: 'relative',
  },
});
