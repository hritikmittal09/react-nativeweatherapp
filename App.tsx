/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { SafeAreaView, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CurrentWeather from './components/currentWeather';
import UpcommingWeather from './components/UpcommingWeather';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();
function App(): any {

  return (

      <NavigationContainer>
        <Tab.Navigator >
        <Tab.Screen name="current weather" component={CurrentWeather} options={{
        tabBarIcon : ()=><Ionicons name= "cloud"/>,
        }}/>
        <Tab.Screen name="UpComing weather" component={UpcommingWeather} options={{
           tabBarIcon : ()=><Ionicons name= "cloud"/>,
        }}/>

      </Tab.Navigator>
      </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'orange',
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
