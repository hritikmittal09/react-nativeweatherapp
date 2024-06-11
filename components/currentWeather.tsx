/* eslint-disable prettier/prettier */
/* eslint-disable dot-notation */
/* eslint-disable prettier/prettier */




/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
//import Icon from 'react-native-vector-icons/Feather';
import {View, Text,StyleSheet, Image} from 'react-native';
import { useWeatherData } from './getweather';
const CurrentWeather = (): any => {
  const {weather} = useWeatherData();
  const icon = ( weather != null ? weather['weather'][0]['icon'] : '');
  const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;





  return (
    <View style = {styles.bg}>
      <View>

      <Image source={{ uri: iconUrl }} style = {styles.icon}  />
        <Text style={styles.temprature}>{weather != null ? weather['main']['temp'] + ' °C' : ''}</Text>
        <Text style={styles.temprature}>feels like {weather != null ? weather['main']['feels_like']  + ' °C' : ''}</Text>
        <Text style={styles.temprature}>low :{ weather != null ? weather['main']['temp_min'] + ' °C' : ''}  High : { weather != null ? weather['main']['temp_max'] + ' °C' : ''}</Text>
        <Text style = {styles.temprature}>description   : { weather != null ? weather['weather'][0]['description'] : ''}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'lightblue',
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
  icon: {
    width: 100,
    height: 100,
    alignSelf :"center"
  },
});
export default CurrentWeather;
