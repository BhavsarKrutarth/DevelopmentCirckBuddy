import React ,{useState} from "react";
import NavigationScreen from './Navigation/LoginNavigation/NavigationScreen';
import NavigationScreen_login from './Navigation/LoginNavigation/NavigationScreen_login';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import GlobalVariable from './GlobalVariable';

export default function App() {
global.login = ""
global.MobileNo = "";
global.domainName = "http://27.116.48.79";
global.Tournamentid = "";
global.TournamentName = "";
global.CityId = "";
global.CityName = "";
const [isLoggedIn, setisLoggedIn] = useState("false");

const storeData = async () => {
  try {
   //AsyncStorage.clear();
    setisLoggedIn(await AsyncStorage.getItem('@login') || 'false');
   // GlobalVariable.Glogin = await AsyncStorage.getItem('@login');
   global.login = await AsyncStorage.getItem('@login');
   global.MobileNo = await AsyncStorage.getItem('@MobileNo');
   CityName_GET(await AsyncStorage.getItem('@MobileNo'))
  } catch (e) {
    // saving errorr
  }
}
const CityName_GET = async (
  MobileNo
) => {
  try {
    const resposneJSON = await fetch(
      `${global.domainName}/cricbuddyAPI/api/UserMaster/` + MobileNo,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "FF7B5E5C-A468-4CE0-B812-98008627C8KT",
        },
      }
    )
      .then((response) => response.json())
      .then((json) => {
        var BindData = JSON.parse(json);
        var List;
        if (BindData.SERVICERESPONSE.RESPONSECODE == "0") {
          if (BindData.SERVICERESPONSE.DETAILSLIST) {
            List = BindData.SERVICERESPONSE.DETAILSLIST.DETAILS;
            if (List) {
              if (List.CITYID != null) {
                global.CityId = List.CITYID
              } 
              if (List.CITYNAME != null) {
                global.CityName = List.CITYNAME
              } 
            }
          }
        }
        return json;
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    alert(error);
    return;
  } finally {
  }
};
 function BindNavigation(props) {
  storeData();
  var CheckisLoggedIn = isLoggedIn
  if (CheckisLoggedIn == "true") {
    return (
      <NavigationScreen></NavigationScreen>
    );
  } else {
    return (
      <NavigationScreen_login></NavigationScreen_login>
    );
  }
  
}
  return (
    BindNavigation()
  );
}
