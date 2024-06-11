/* eslint-disable dot-notation */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {  PermissionsAndroid, StyleSheet} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CurrentWeather from './components/currentWeather';
import UpcommingWeather from './components/UpcommingWeather';
import Icon from 'react-native-vector-icons/Feather';

import { api_key} from "@env";
let logi :number | null = null;
let lat: number | null = null;
const Tab = createBottomTabNavigator();


const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Cool Photo App Camera Permission',
        message:
          'Cool Photo App needs access to your camera ' +
          'so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the location');
    } else {
      console.log('location permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};





function App(): any {

  const getWeaterData = async  ()=>{
    let res = null; 
    Geolocation.getCurrentPosition(
      //"latitude": 37.4220936, "longitude":
     async (position) => {
       logi = position['coords']["longitude"];
        lat = position['coords']["latitude"];
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${logi}&appid=${api_key}`;
        let reponse = await fetch(url);
       let result = await reponse.json();
       setweather(result);
  
      
      });
  };

  



  useEffect( ()=>{
    requestCameraPermission();
    getWeaterData();
   
  
     
    
    
  },[]);
  const [loding,setloading] = useState(false);
  const [weather,setweather] = useState([]);
  if (loding) {
    return(
      <View style = {{flex : 1, backgroundColor : "lightblue", justifyContent :"center"}}>
        <ActivityIndicator size={"large"} color={"black"}/>
      </View>
    );
  }
console.log(weather);

  return (

      <NavigationContainer>
        <Tab.Navigator screenOptions={{
          tabBarStyle :{
            backgroundColor : "white",
          },
        headerStyle :{
          backgroundColor : "white",
        },
        headerTitleStyle :{
          color : "black",
        },
        }} >
        <Tab.Screen name="current weather" component={CurrentWeather} initialParams={{weather}} options={{
        tabBarIcon : ()=><Icon name= "cloud" size={20} color={"black"}/>,
        }}/>
        <Tab.Screen name="UpComing weather" component={UpcommingWeather} options={{
           tabBarIcon : ()=><Icon name= "clock"size={20} color={'black'}/>,
        }}/>

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
