/* eslint-disable prettier/prettier */




/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {View, Text,StyleSheet} from 'react-native';
const CurrentWeather = ():React.JSX.Element => {
  return (
    <View style = {styles.bg}>
      <View>
        <Icon
          color="black"
          name="sun"
          style={{alignSelf: 'center'}}
          size={100}
        />

        <Text style={styles.temprature}>5</Text>
        <Text style={styles.temprature}>feels like 7</Text>
        <Text style={styles.temprature}>low : 4 High : 5</Text>
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
});
export default CurrentWeather;
