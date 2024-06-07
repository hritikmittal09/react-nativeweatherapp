/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { View, Text, StyleSheet } from 'react-native';

interface Iprops{
    weather : string,
    max : Number,
    min : Number
}

const ListItem : React.FC<Iprops> = ({min ,max, weather}) => {
  return (
    <View style = {style.item}>
        <Icon
          color="black"
          name="sun"
          style={{alignSelf: 'center'}}
          size={40}
        />
        <Text style = {{color : 'black'}}> min {String(min)}</Text>
        <Text style = {{color : 'black'}}>max {String(max)}</Text>
        <Text style = {{color : 'black'}}>Weather {weather}</Text>
    </View>
  );
};
const style = StyleSheet.create({
    item : {
        backgroundColor  : 'white',
        fontSize :30,
        padding : 30,
        margin : 10,
        paddingHorizontal : 50,


    },
});
export default ListItem;
