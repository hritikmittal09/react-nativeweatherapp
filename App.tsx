/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { SafeAreaView, StyleSheet} from 'react-native';
import CurrentWeather from './components/currentWeather';
import UpcommingWeather from './components/UpcommingWeather';

function App(): any {
  return (
    <SafeAreaView style={styles.bg}>
      <UpcommingWeather/>


    </SafeAreaView>
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
