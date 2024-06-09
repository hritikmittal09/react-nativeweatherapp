/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Text,View ,StyleSheet,FlatList} from 'react-native';
import ListItem from './ListItem';
const data = [
  {weather :'weather1', min : 32, max : 90},
  {weather : 'weather2', min : 30 ,max : 80},
]
function UpcommingWeather() {
  return (
    <View style = {style.bg}>
        <Text style = {style.heading}>UpComing Weather</Text>
        <FlatList data={data} renderItem={({item})=>
        <ListItem min = {item.min} max={item.max} weather= {item.weather}/>
  }/>
    </View>
  );
}
const style = StyleSheet.create({
    heading : {
        alignSelf : 'center',
        fontSize : 30,
        margin : 20,
        color : 'black',
    },
    bg:{
      backgroundColor : 'orange',
      flex :1,
    },
})
export default UpcommingWeather
