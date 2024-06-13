/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
//import Icon from 'react-native-vector-icons/Feather';
import { View, Text, StyleSheet } from 'react-native';

interface Iprops{
    weather : string,
    min : any
}

const ListItem : React.FC<Iprops> = ({ min, weather}) => {
  return (
    <View style = {style.item}>


<Text style = {{color : 'black', fontSize : 20, alignSelf : "center"} }> {weather} : {min}</Text>


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
