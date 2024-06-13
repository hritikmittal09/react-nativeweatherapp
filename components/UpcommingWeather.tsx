/* eslint-disable prettier/prettier */
/* eslint-disable dot-notation */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Text,View ,StyleSheet,FlatList, ActivityIndicator} from 'react-native';
import ListItem from './ListItem';
import { useWeatherData } from './getweather';

function UpcommingWeather() {
  const{weather, loading} = useWeatherData()
  const data = [
    {weather :'humidity', min :weather ? weather['main']["humidity"] + '%' : 0},
    {weather :'pressure', min :weather ? weather['main']["pressure"]  + ' hPa ' : 0},
    {weather :'country', min :weather ? weather['sys']["country"] : ""},
    {weather :'latitude', min :weather ? weather['coord']["lat"] + ' Degree' : ""},
    {weather :'longitude', min :weather ? weather['coord']["lon"] + ' Degree' : ""},

  ]

  if (loading) {
    return(
      <View>
        <ActivityIndicator size={50}/>
      </View>
    )
  }
  return (
    <View style = {style.bg}>
        <Text style = {style.heading}>More info</Text>
        <FlatList data={data} renderItem={({item})=>
        <ListItem min = {item.min}  weather= {item.weather}/>
  }/>
    </View>
  );
}
const style = StyleSheet.create({
    heading : {
        alignSelf : 'center',
        fontSize : 30,
        margin : 20,
        color : 'white',
    },
    bg:{
      backgroundColor : 'black',
      flex :1,
    },
})
export default UpcommingWeather
