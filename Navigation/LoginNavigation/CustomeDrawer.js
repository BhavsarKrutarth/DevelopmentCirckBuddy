import React ,{useState} from "react";
import { View, Text, ImageBackground,Image,TouchableOpacity } from 'react-native';
import { DrawerContentScrollView,DrawerItemList } from "@react-navigation/drawer";
import Color from "../../Color/Color";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


let MobileNo = "";
const storeData = async () => {
  try {
    MobileNo = (await AsyncStorage.getItem('@MobileNo'));
  } catch (e) {
    // saving error
  }
}
const CustomeDrawer = (props) => {
    const navigation = useNavigation();
    storeData()
return (
    <>
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:Color.PrimaryColor}}>
            <ImageBackground 
            style={{padding:20,backgroundColor:Color.PrimaryColor}}
            
            source={{
            //uri: 'http://27.116.48.79/CricbuddyAdmin/Content/assets/1_prev_ui.png',
            }}
            >
            <TouchableOpacity onPress={() => 
            navigation.navigate('UserProfile', {
                MobileNo
              })
            }>   
                <Image 
                style={{height:80,width:80,borderRadius:40,marginBottom:5}}
                source={{
                uri: `${global.domainName}/CricbuddyAdmin/Content/assets/Cricket_logo_3.png`,
                }}
                 />
            </TouchableOpacity>
                 <Text style={{color:"#fff",fontSize:18}}>{MobileNo}</Text>
            </ImageBackground>
            <View style={{flex:1,backgroundColor:'#fff'}}>
                <DrawerItemList {...props} />
            </View>
            </DrawerContentScrollView>
        </View>
        <View>
            <Text></Text>
        </View>
    </>
)
}

export default CustomeDrawer;