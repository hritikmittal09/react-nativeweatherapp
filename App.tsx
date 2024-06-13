/* eslint-disable prettier/prettier */
/* eslint-disable dot-notation */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { PermissionsAndroid, StyleSheet, BackHandler, Alert } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CurrentWeather from './components/currentWeather';
import UpcommingWeather from './components/UpcommingWeather';
import Icon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location Permission',
        message: 'This app needs access to your location to show weather data.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  } catch (err) {
    console.warn(err);
    return false;
  }
};

function App(): any {
  const [loading, setLoading] = useState(true);
  const [permissionGranted, setPermissionGranted] = useState(false);

  useEffect(() => {
    const requestPermission = async () => {
      const granted = await requestLocationPermission();
      setPermissionGranted(granted);
      setLoading(false);
      if (!granted) {
        Alert.alert(
          'Permission Denied',
          'Location permission is required to use this app. The app will now close.',
          [{ text: 'OK', onPress: () => BackHandler.exitApp() }]
        );
      }
    };

    requestPermission();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, backgroundColor: 'lightblue', justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  if (!permissionGranted) {
    return null; // Do not render anything if permission is denied
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: 'white',
          },
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTitleStyle: {
            color: 'black',
          },
        }}
      >
        <Tab.Screen
          name="Current Weather"
          component={CurrentWeather}
          options={{
            tabBarIcon: () => <Icon name="cloud" size={20} color="black" />,
          }}
        />
        <Tab.Screen
          name="More Info"
          component={UpcommingWeather}
          options={{
            tabBarIcon: () => <Icon name="info" size={20} color="black" />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'black',
    display: 'flex',
    alignItems: 'center',
    flex: 1,
  },
  heading: {
    fontSize: 30,
    justifyContent: 'center',
    color: 'black',
    margin: 20,
  },
  temprature: {
    fontSize: 25,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});

export default App;
