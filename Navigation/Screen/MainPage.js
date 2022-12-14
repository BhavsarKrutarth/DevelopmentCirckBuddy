import React from "react";
import {View,Text,StyleSheet} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';


// const storeData = async () => {
//   try {
//     // debugger
//     //  alert(await AsyncStorage.getItem('@login') + ' AND ' + await AsyncStorage.getItem('@MobileNo'))
//     alert(await AsyncStorage.getItem('@MobileNo')+" AND "+await AsyncStorage.getItem('@login'));
    
//    // console.log(await AsyncStorage.getItem('@mykey'))
//   } catch (e) {
//     // saving error
//   }
// }
const MainPage = props => {
  // storeData();
  return(
    <View style={styles.container}>
        <Text>Main Page SCreen.</Text>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default MainPage;