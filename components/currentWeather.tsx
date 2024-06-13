/* eslint-disable prettier/prettier */
/* eslint-disable dot-notation */
/* eslint-disable prettier/prettier */




/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
//import Icon from 'react-native-vector-icons/Feather';
import {View, Text,StyleSheet,  ActivityIndicator} from 'react-native';
import { useWeatherData } from './getweather';
import Icon  from 'react-native-vector-icons/Feather';
import getWeatherIcon from './icon';
const CurrentWeather = (): any => {


  const {weather,loading} = useWeatherData();
 // const icon = ( weather != null ? weather['weather'][0]['icon'] : '');

  //const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
if (loading) {
  return (
    <View>
      <ActivityIndicator size={50} />
    </View>
  );
}
if (weather == null) {
  return(
    <View>
      <Text style = {{fontSize : 30 }}> something went wrong</Text>
    </View>
  );
}




  return (
    <View style = {styles.bg}>
      <View>

      <Icon name= {getWeatherIcon( weather['weather'][0]["id"])} style = {styles.icon} color={'white'} size={50}/>
      <Text style = {styles.date}>{ weather != null ? new Date( weather['dt'] * 1000).toLocaleString() : ''}</Text>
      <Text style = {styles.dis}>{ weather != null ? weather['weather'][0]['description'] : ''}</Text>
        <Text style={styles.temprature}>{weather != null ? weather['main']['temp'] + ' °C' : ''}</Text>
        <Text style={styles.dis}>feels like {weather != null ? weather['main']['feels_like']  + ' °C' : ''}</Text>
        <Text style={styles.dis}>low :{ weather != null ? weather['main']['temp_min'] + ' °C' : ''}  High : { weather != null ? weather['main']['temp_max'] + ' °C' : ''}</Text>

      </View>
    </View>
  );
};
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
    color : 'white',
    fontSize: 25,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  date: {
    color : 'white',
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  dis: {
    color : 'white',
    fontSize: 15,
    padding :10,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  icon: {
    width: 100,
    height: 100,
    alignSelf :'center',
    marginLeft :5,
    marginTop : 20,
    marginBottom : 0,
  },
});
export default CurrentWeather;
