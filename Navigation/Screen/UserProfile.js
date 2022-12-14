import React, { useState,useCallback,useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
} from "react-native";
import Color from "../../Color/Color";
import { useForm, Controller } from "react-hook-form";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from "@react-navigation/native";

const UserProfile = (props) => {
  const [Gender, setGender] = useState("female");
  const [DisplayProfileGender, setDisplayProfileGender] = useState("-");
  /*---------------------------- CRUD variable declare -----------------------*/
  const [USERMASTERID, setUSERMASTERID] = useState("");
  const [Name, setName] = useState("-");
  const [location, setlocation] = useState("");
  const [MobileNo, setMobileNo] = useState("");
  const [Email, setEmail] = useState("");
  const [pin, setpin] = useState("");

  const [PAYINGROLENAME, setPAYINGROLENAME] = useState("-");
  const [BATTINGSTYLENAME, setBATTINGSTYLENAME] = useState("-");
  const [BOWLINGSTYLENAME, setBOWLINGSTYLENAME] = useState("-");
  const [DISPLAYPASSWORD, setDISPLAYPASSWORD] = useState("-");
  const route = useRoute();
    
  /*---------------------------- CRUD variable declare -----------------------*/
  useEffect(() => {
    
    storeData();
  }, []);

  const storeData = async () => {
    try {
      

      UserProfile_GET(await AsyncStorage.getItem("@MobileNo"));
    } catch (e) {
      console.log(e);
    }
  };
  /* ------------------------- API CALL --------------------*/

  const UserProfile_GET = async (MobileNo) => {
    try {
      //alert(MobileNo)
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
            List = BindData.SERVICERESPONSE.DETAILSLIST.DETAILS;
            if (List) {
              setUSERMASTERID(List.USERMASTERID);
              setPAYINGROLENAME(List.PAYINGROLENAME);
              setBATTINGSTYLENAME(List.BATTINGSTYLENAME);
              setBOWLINGSTYLENAME(List.BOWLINGSTYLENAME);
              setDISPLAYPASSWORD(List.DISPLAYPASSWORD);
              setName(List.NAME);
              setlocation(List.LOCATION);
              setMobileNo(List.MOBILENO);
              setEmail(List.EMAIL);
              setpin(List.PASSWORD);
              if (List.GENDER == "male") {
                setDisplayProfileGender("male");
                setGender("male");
              } else if (List.GENDER == "female") {
                setGender("female");
                setDisplayProfileGender("female");
              } else {
                setGender("female");
                setDisplayProfileGender("-");
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

  /* ------------------------- API CALL --------------------*/

  const navigation = useNavigation();
  //var PayingRoleData = JSON.parse(json);
  return (
    <View style={styles.Container}>
      <View style={styles.header}>
        <Text
          style={{
            color: Color.PrimaryColor,
            fontSize: 26,
            fontWeight: "bold",
          }}
        >
          My Profile.
        </Text>
        <Text
          onPress={() =>
            navigation.navigate("UserProfileEdit", {
              MobileNo,
            })
          }
          style={{ color: "green", fontSize: 26, fontWeight: "bold" }}
        >
          Edit
        </Text>
      </View>
      <View style={[{ alignItems: "center" }]}>
        <Image
          style={styles.image}
          source={{
            uri: `${global.domainName}/CricbuddyAdmin/Content/assets/UserProfile.png`,
          }}
        />
      </View>
      <View style={styles.body}>
        <View style={styles.body100}>
          <Text style={styles.title}>MOBILE NO</Text>
          <Text style={styles.title1}>{MobileNo}</Text>
        </View>
        <View style={styles.body100}>
          <Text style={styles.title}>GENDER</Text>
          <Text style={styles.title1}>{DisplayProfileGender}</Text>
        </View>
        <View style={styles.body100}>
          <Text style={styles.title}>PLAYING ROLE</Text>
          <Text style={styles.title1}>{PAYINGROLENAME}</Text>
        </View>
        <View style={styles.body100}>
          <Text style={styles.title}>BATTING STYLE</Text>
          <Text style={styles.title1}>{BATTINGSTYLENAME}</Text>
        </View>
        <View style={styles.body100}>
          <Text style={styles.title}>BOWLING STYLE</Text>
          <Text style={styles.title1}>{BOWLINGSTYLENAME}</Text>
        </View>
        <View style={styles.body100}>
          <Text style={styles.title}>EMAIL</Text>
          <Text style={styles.title1}>{Email}</Text>
        </View>
        <View style={styles.body100}>
          <Text style={styles.title}>PIN</Text>
          <Text style={styles.title1}>{DISPLAYPASSWORD}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    Container:{
        //alignItems:'flex-end',
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
        borderColor:"#fff",
        borderWidth:5,
        margin:10        
     },
     header:{
        flexDirection: "row",
        justifyContent:'space-between'
     },
     image:{
      width: 70,
      height: 70,
      borderRadius:50
     },
     body:{
        flexDirection: "row",
        flexWrap:"wrap",
        marginTop:10,
        alignItems: 'center',
     },
     bodymodal:{
      flexDirection: "column",
      flexWrap:"wrap",
      margin:0
   },
     modalfooter:{
        marginVertical:20,
        flexDirection: "row",
        flexWrap:"wrap",
     },
     body50:
     {
        width:"50%",
     },
     width100:{
      width:"100%",
     },
     body100:{
      width:"100%",
      flexDirection: "row",
      flexWrap:"wrap",
      paddingVertical:5
     },
     title:{
        color:Color.Texttitle,
        Weight:"bold",
        fontSize:16,
        margin:5,
     },
     title1:{
        color:"black",
        Weight:"bold",
        fontSize:20,
        marginLeft:5,
    },

    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        paddingHorizontal:5,
        paddingVertical:2,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: Color.CloseBtn,
      },
      buttonSave: {
        backgroundColor: Color.SaveBtn,
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        padding:10,
        fontSize:18
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      modalcenteredView:{
        // flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        marginTop: 0
      },
      input: {
        height: 40,
        paddingLeft: 12,
        borderBottomWidth: 1,
        borderBottomColor: Color.PrimaryColor
      },
      dropdown:{
        borderTopWidth:0,
        borderLeftWidth:0,
        borderRightWidth:0,
        borderBottomWidth: 1,
        borderBottomColor: Color.PrimaryColor
      },
      placeholderStyles:{
        borderBottomColor: Color.PrimaryColor
      },
      rbtnborder:{
        width:25,
        height:25,
        borderWidth:1,
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center',
        borderColor:Color.PrimaryColor,
      },
      rbtninner:{
        width:12,
        height:12,
        backgroundColor:Color.PrimaryColor,
        borderRadius:10
      },
      rbtwrapper:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginTop:10
      },
      rbtmood:{
        marginHorizontal:15,
        alignItems:'center',
        flexDirection:"row"
      },
      rbtfeeling:{
        fontSize:14,
        textTransform:'capitalize',
        marginHorizontal:10
      }

});


export default UserProfile;

