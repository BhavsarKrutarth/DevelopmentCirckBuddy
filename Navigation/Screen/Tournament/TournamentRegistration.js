import React ,{useState,useEffect,useRef} from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  StyleSheet,
  Image,
  Pressable,
  Platform,
  KeyboardAvoidingView,
  Text,
  ToastAndroid,
  Textarea
} from "react-native";
import Checkbox from 'expo-checkbox';
import Color from "../../../Color/Color";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import LineTextInput from "../../../Component/LineTextInput/LineTextInput";
import { TextInput } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from '@react-native-community/datetimepicker';


const TournamentRegistration = props => {
    function showToast(Text) {
      ToastAndroid.show(
        Text,
        ToastAndroid.SHORT
      );
    }
    
    const navigation = useNavigation();
    const route = useRoute();
    //let Tournament = route.params.Tournament  || null;
    // let dropdownid = route.params.dropdownid  || null;
    const [image, setImage] = useState(null);
    const [MainBanner, setMainBanner] = useState(true);
    const [MainBannerUI, setMainBannerUI] = useState(false);
    const [SendBannerImage, setSendBannerImage] = useState(null);

    const [userprofileimage, setuserprofileimage] = useState(null);
    const [UserProfile, setUserProfile] = useState(true);
    const [UserProfileUI, setUserProfileUI] = useState(false);
    const [sendUserProfileImage, setsendUserProfileImage] = useState(null);

    const [cityid, setcityid] = useState(null);
    const [citytitle, setcitytitle] = useState(null);

    const [Groundid, setGroundid] = useState(null);
    const [Groundtitle, setGroundtitle] = useState(null);

    const [isChecked, setChecked] = useState(false);

    const [startDateshow,setstartDateshow] = useState(false);
    const [date,setdate] = useState(new Date());
    const[DateText,setDateText] = useState("Start Date *")
    const[SendDateText,setSendDateText] = useState(null)
    const[MinStartDate,setMinStartDate] = useState(new Date())
    const[MaxStartDate,setMaxStartDate] = useState(null)
    const[startcmpDate,setstartcmpDate] = useState(null)
    
    const [EndDateshow,setEndDateshow] = useState(false);
    const [enddate,setenddate] = useState(new Date());
    const[EndDateText,setEndDateText] = useState("End Date *")
    const[SendEndDateText,setSendEndDateText] = useState(null)
    const[MinEndDate,setMinEndDate] = useState(new Date())
    const[MaxEndDate,setMaxEndDate] = useState(null)
    const[EndcmpDate,setEndcmpDate] = useState(null)

    const onChangeStart = (event,selectedDate) => {
      setstartDateshow(false)
      const currentDate = selectedDate || date;
      setdate(currentDate);
      
      let tempDate = new Date(currentDate);
      let startday = tempDate.getDate().toString()
      let startMonth = (tempDate.getMonth() + 1).toString()
      let startdaylength = startday.length;
      let startMonthlength = startMonth.length;
      if(startdaylength == 1)
      {
        startday = "0" + startday
      }
      if(startMonthlength == 1)
      {
        startMonth = "0" + startMonth
      }

      let fdate = startday + '/' + startMonth + '/' + tempDate.getFullYear()
      let sdate = tempDate.getFullYear()+''+startMonth +""+ startday
      //let fTime = 'Hours : ' + tempDate.getHours() + ' / Minutes : ' + tempDate.getMinutes();
      var g1 = tempDate.getFullYear()+'-'+startMonth+'-'+startday;
      var g2 = EndcmpDate;

      if(g1 < g2)
      {
        setEndcmpDate(null)
        setSendEndDateText(null)
        setEndDateText(null);
      }
      else 
      {
        setstartcmpDate(g1)
      }
      
      setMinEndDate(new Date(tempDate.getFullYear(),startMonth,startday))
      setSendDateText(sdate);
      setDateText(fdate);
    }
    const onChangeEnd = (event,selectedDate) => {
      setEndDateshow(false)
      const currentDate = selectedDate || date;
      setenddate(currentDate);
      
      let tempDate = new Date(currentDate);
      let endtday = tempDate.getDate().toString()
      let endMonth = (tempDate.getMonth() + 1).toString()
      let endtdaylength = endtday.length;
      let endMonthlength = endMonth.length;
      if(endtdaylength == 1)
      {
        endtday = "0" + endtday
      }
      if(endMonthlength == 1)
      {
        endMonth = "0" + endMonth
      }
      let fdate = endtday + '/' + endMonth + '/' + tempDate.getFullYear()
      let sdate = tempDate.getFullYear()+""+endMonth +""+ endtday
      //let fTime = 'Hours : ' + tempDate.getHours() + ' / Minutes : ' + tempDate.getMinutes();
      setEndcmpDate(tempDate.getFullYear()+'-'+endMonth+'-'+endtday)
      setSendEndDateText(sdate)
      setEndDateText(fdate);
    }

    const [Categoryid, setCategoryid] = useState(null);
    const [Categorytitle, setCategorytitle] = useState(null);

    const [BallTypeid, setBallTypeid] = useState(null);
    const [BallTypetitle, setBallTypetitle] = useState(null);

    const [PitchTypeid, setPitchTypeid] = useState(null);
    const [PitchTypetitle, setPitchTypetitle] = useState(null);

    const [MatchTypeid, setMatchTypeid] = useState(null);
    const [MatchTypetitle, setMatchTypetitle] = useState(null);

    const [Remark, setRemark] = useState(null);

    const txtTournamentName = useRef(null);
    const [txtTournamentname, settxtTournamentname] = useState(null);
    const [txtTournamentname_Error, settxtTournamentname_Error] = useState(false);
    const [txtTournamentname_ErrorStyle, settxtTournamentname_ErrorStyle] = useState(Color.Texttitle);

    const OrganiserName = useRef(null);
    const [txtOrganiserName, settxtOrganiserName] = useState(null);
    const [txtOrganiserName_Error, settxtOrganiserName_Error] = useState(false);
    const [txtOrganiserName_ErrorStyle, settxtOrganiserName_ErrorStyle] = useState(Color.Texttitle);

    const OrganiserNumber = useRef(null);
    const [txtOrganiserNumber, settxtOrganiserNumber] = useState(null);
    const [txtOrganiserNumber_Error, settxtOrganiserNumber_Error] = useState(false);
    const [txtOrganiserNumber_ErrorStyle, settxtOrganiserNumber_ErrorStyle] = useState(Color.Texttitle);

    const [OPER,setOPER] = useState("add");
    const [TOURNAMENTID,setTOURNAMENTID] = useState(null);
    

    React.useEffect(() => {
       storeData();
      if(route.params?.title)
        setcitytitle(route.params?.title)

      if(route.params?.id)
        setcityid(route.params?.id)

      if(route.params?.Groundid)
        setGroundid(route.params?.Groundid)

      if(route.params?.Groundtitle)
        setGroundtitle(route.params?.Groundtitle)

      if(route.params?.Categoryid)
        setCategoryid(route.params?.Categoryid)

      if(route.params?.Categorytitle)
        setCategorytitle(route.params?.Categorytitle);

      if(route.params?.BallTypeid)
        setBallTypeid(route.params?.BallTypeid)

      if(route.params?.BallTypetitle)
        setBallTypetitle(route.params?.BallTypetitle);

      if(route.params?.PitchTypeid)
        setPitchTypeid(route.params?.PitchTypeid)

      if(route.params?.PitchTypetitle)
        setPitchTypetitle(route.params?.PitchTypetitle);

      if(route.params?.MatchTypeid)
        setMatchTypeid(route.params?.MatchTypeid)

      if(route.params?.MatchTypetitle)
        setMatchTypetitle(route.params?.MatchTypetitle);
        // console.log(MobileNo || "NOT DATA")
      // Tournament_GET()
    }, [(route.params)]);

    const [MobileNo,setMobileNo] = useState("");
    const storeData = async () => {
        try {
          setMobileNo(await AsyncStorage.getItem('@MobileNo'))
        } catch (e) {
        }
      }
    
    const Tournament_GET = async () => {
      try {
         
        const resposneJSON = await fetch(
          `${global.domainName}/cricbuddyAPI/api/TournamentRegistration/` + global.MobileNo,
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
                setOPER('Edit');
                setTOURNAMENTID(List.TOURNAMENTID);
                setMobileNo(List.MOBILENO)
                settxtTournamentname(List.TOURNAMENTNAME)
                if(List.BANNERIMAGE)
                {
                  setMainBannerUI(true);
                  setMainBanner(false)
                  setImage(`${global.domainName}/cricbuddyAPI/UploadFiles/temp/${List.BANNERIMAGE}`)
                  setSendBannerImage(List.BANNERIMAGE)
                }
                else 
                {
                  setMainBannerUI(false);
                  setMainBanner(true)
                  setImage(null)
                  setSendBannerImage(null)
                }

                if(List.USERPROFILEIMAGE)
                {
                  setUserProfileUI(true);
                  setUserProfile(false)
                  setuserprofileimage(`${global.domainName}/cricbuddyAPI/UploadFiles/temp/${List.USERPROFILEIMAGE}`)
                  setsendUserProfileImage(List.USERPROFILEIMAGE)
                }
                else 
                {
                  setUserProfileUI(false);
                  setUserProfile(true)
                  setuserprofileimage(null)
                  setsendUserProfileImage(null)
                }

                setcityid(List.CITYID);
                setcitytitle(List.CITYTITLE);
                
                setGroundid(List.GROUNDID);
                setGroundtitle(List.GROUNDTITLE);

                settxtOrganiserName(List.ORGANISERNAME);
                settxtOrganiserNumber(List.ORGANISERNO);

                setSendDateText(List.STARTDATETEXT);
                setDateText(List.STARTDATE);

                setSendEndDateText(List.ENDDATETEXT);
                setEndDateText(List.ENDDATE);

                setCategoryid(List.CATEGORYID);
                setCategorytitle(List.CATEGORYTITLE);

                setBallTypeid(List.BALLTYPEID);
                setBallTypetitle(List.BALLTYPETITLE);

                setPitchTypeid(List.PITCHTYPEID);
                setPitchTypetitle(List.PITCHTYPETITLE);

                setMatchTypeid(List.MATCHTYPEID);
                setMatchTypetitle(List.MATCHTYPETITLE);

                if(List.TEAMREGISTRATION == 1)
                {
                  setChecked(true)
                }
                else
                {
                  setChecked(false)
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
    const btnSave = async () => {
      
      try {
        if(txtTournamentname == null || txtTournamentname == "")
        {
          settxtTournamentname_ErrorStyle(Color.ErrorColor)
          settxtTournamentname_Error(true)
          txtTournamentName.current.focus();
          return
        }
        else 
        {
          settxtTournamentname_ErrorStyle(Color.Texttitle)
          settxtTournamentname_Error(false)
        }
        if(cityid == null)
        {
          showToast("Please Select City.")
          return
        }
        if(Groundid == null)
        {
          showToast("Please Select Ground.")
          return
        }
        
        
        if(txtOrganiserName == null || txtOrganiserName == "")
        {
          settxtOrganiserName_ErrorStyle(Color.ErrorColor)
          settxtOrganiserName_Error(true)
          OrganiserName.current.focus();
          return
        }
        else 
        {
          settxtOrganiserName_ErrorStyle(Color.Texttitle)
          settxtOrganiserName_Error(false)
        }

        if(txtOrganiserNumber == null || txtOrganiserNumber == "")
        {
          settxtOrganiserNumber_ErrorStyle(Color.ErrorColor)
          settxtOrganiserNumber_Error(true)
          OrganiserNumber.current.focus();
          return
        }
        else 
        {
          settxtOrganiserNumber_ErrorStyle(Color.Texttitle)
          settxtOrganiserNumber_Error(false)
        }
        if(SendDateText == null)
        {
          showToast("Please Select Start Date.")
          return
        }
        if(SendEndDateText == null)
        {
          showToast("Please Select End Date.")
          return
        }
        
        if(isChecked == false)
        {
          showToast("Please Select Team Registration.")
          return
        }
        
        const resposneJSON = await fetch(
            `${global.domainName}/cricbuddyAPI/api/TournamentRegistration`,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "FF7B5E5C-A468-4CE0-B812-98008627C8KT",
            },
            body: JSON.stringify({
              Oper:OPER,
              TournamentId:TOURNAMENTID,
              MobileNo: MobileNo,
              BannerImage:SendBannerImage,
              Userprofileimage:sendUserProfileImage,
              Tournamentname:txtTournamentname,
              Cityid:cityid || 0,
              Citytitle:citytitle,
              Groundid:Groundid || 0,
              Groundtitle:Groundtitle,
              Organisername:txtOrganiserName,
              Organiserno:txtOrganiserNumber,
              Startdate:SendDateText,
              Enddate:SendEndDateText,
              Categoryid:Categoryid || 0,
              Categorytitle:Categorytitle,
              Balltypeid:BallTypeid || 0,
              Balltypetitle:BallTypetitle,
              Pitchtypeid:PitchTypeid || 0,
              Pitchtypetitle:PitchTypetitle,
              Matchtypeid:MatchTypeid || 0,
              Matchtypetitle:MatchTypetitle,
              Remark:Remark,
              TeamRegistration:isChecked
            }),
          }
        )
          .then((response) => response.json())
          .then((json) => {
            /*-------------------- Page Call -----------------------*/
            var BindData = JSON.parse(json);
            var TOURNAMENTNAME = "";
            var TOURNAMENTID = "";
            
            if (BindData.SERVICERESPONSE.RESPONSECODE == "0") {
              global.TournamentName = BindData.SERVICERESPONSE.TOURNAMENTNAME || ''
              global.Tournamentid = BindData.SERVICERESPONSE.TOURNAMENTID || ''
            }
            // const Images = [{"Image" : "e7b7cef2-d762-400a-808d-87c0a33c58f9.jpeg"},{"Image" : "fe35f09d-b71c-4413-8e69-69db7ce59bcd.jpeg"}] 
             TransferImage([{"Image":SendBannerImage}])
             navigation.navigate('TournamentRegistrationSucces', {
              MobileNo,
              })
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

      // navigation.navigate('TournamentRegistrationSucces', {
      //   MobileNo,
      //   })

    };


    const ProfileImagepickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        fileName:true,
        base64: true,
        aspect: [4, 3],
        quality: 1,
        canceled:false,
        cancelled:false
      });
      if (!result.canceled) {
        UserProfileImageUpload(result.assets[0].base64,result.assets[0].uri)
        setuserprofileimage(result.assets[0].uri);
        setUserProfile(false);
        setUserProfileUI(true);
      }
    };

    const MainBannerUIpickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      fileName:true,
      base64: true,
      aspect: [4, 3],
      quality: 1,
      canceled:false,
      cancelled:false
    });
    if (!result.canceled) {
      BannerImageUpload(result.assets[0].base64,result.assets[0].uri)
      setImage(result.assets[0].uri);
      setMainBanner(false);
      setMainBannerUI(true);

    }
  };
   
    const BannerImageUpload = async (Base64,IMAGEUPLOAD) => {
      try {
        const resposneJSON = await fetch(`${global.domainName}/cricbuddyAPI/api/ImageUpload/`, {
          method: 'POST',
          headers: {
            "Accept": 'application/json',
            'Content-Type': 'application/json',
            "Authorization":"FF7B5E5C-A468-4CE0-B812-98008627C8KT",
          },
          body: JSON.stringify({
            BASE64: Base64,
            IMAGEUPLOAD:IMAGEUPLOAD,
            FOLDERNAME:"temp",
          })
        }).then((response) => response.json())
        .then((json) => {
      /*-------------------- Page Call -----------------------*/
      var BindData = JSON.parse(json);
            var List;
            
            if (BindData.SERVICERESPONSE.RESPONSECODE == "0") {
              if(BindData.SERVICERESPONSE.FILENAME)
              {
                setSendBannerImage(BindData.SERVICERESPONSE.FILENAME)
              }
            }
          return json;
          
        })
        .catch((error) => {
          console.error(error);
        });
      } catch (error) {
        alert(error)
        return
  
      } finally {
        
      }
    }
    
    const TransferImage = async (Image) => {
      try {
        const resposneJSON = await fetch(`${global.domainName}/cricbuddyAPI/api/ImageTransfer/`, {
          method: 'POST',
          headers: {
            "Accept": 'application/json',
            'Content-Type': 'application/json',
            "Authorization":"FF7B5E5C-A468-4CE0-B812-98008627C8KT",
          },
          body: JSON.stringify({
            ImageDeatile:{Image},
            OldFloderName:"temp",
            NewFloderName:"UserProfile",
          })
        }).then((response) => response.json())
        .then((json) => {
      /*-------------------- Page Call -----------------------*/
      var BindData = JSON.parse(json);
            var List;
            
            if (BindData.SERVICERESPONSE.RESPONSECODE == "0") {
              if(BindData.SERVICERESPONSE.FILENAME)
              {
                setSendBannerImage(BindData.SERVICERESPONSE.FILENAME)
              }
            }
          return json;
          
        })
        .catch((error) => {
          console.error(error);
        });
      } catch (error) {
        alert(error)
        return
  
      } finally {
        
      }
    }
    const UserProfileImageUpload = async (Base64,IMAGEUPLOAD) => {
      try {
        const resposneJSON = await fetch(`${global.domainName}/cricbuddyAPI/api/ImageUpload/`, {
          method: 'POST',
          headers: {
            "Accept": 'application/json',
            'Content-Type': 'application/json',
            "Authorization":"FF7B5E5C-A468-4CE0-B812-98008627C8KT",
          },
          body: JSON.stringify({
            BASE64: Base64,
            IMAGEUPLOAD:IMAGEUPLOAD,
            FOLDERNAME:"temp",

          })
        }).then((response) => response.json())
        .then((json) => {
      /*-------------------- Page Call -----------------------*/
      var BindData = JSON.parse(json);
            var List;
            
            if (BindData.SERVICERESPONSE.RESPONSECODE == "0") {
              if(BindData.SERVICERESPONSE.FILENAME)
              {
                setsendUserProfileImage(BindData.SERVICERESPONSE.FILENAME)
              }
            }
          return json;
          
        })
        .catch((error) => {
          console.error(error);
        });
      } catch (error) {
        alert(error)
        return
  
      } finally {
        
      }
    }
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle={"light-content"} />
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          enabled
        >
          <ScrollView
            nestedScrollEnabled
            keyboardDismissMode="on-drag"
            keyboardShouldPersistTaps="handled"
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={{ paddingBottom: 200 }}
            style={styles.scrollContainer}
          >
            <View style={styles.Container}>
              <View style={[styles.header, { position: "relative" }]}>
                {MainBannerUI ? (
                  <View style={[styles.Banner]}>
                    {image && (
                      <Image
                        source={{ uri: image }}
                        style={{ width: "100%", height: 200 }}
                      />
                    )}
                  </View>
                ) : null}

                {MainBanner ? (
                  <Pressable onPress={MainBannerUIpickImage}>
                    <View style={[styles.Banner]}>
                      <Image
                        style={styles.imageBanner}
                        source={{
                          uri: "http://192.168.1.2/CricbuddyAdmin/Content/assets/tournament/icon_add_Banner.png",
                        }}
                      />
                    </View>
                  </Pressable>
                ) : null}
                {/* <View
                  style={[
                    styles.profileimage,
                    { position: "absolute", top: "72%", left: 20 },
                  ]}
                >
                  {UserProfile ? (
                    <Pressable onPress={ProfileImagepickImage}>
                      <Image
                        style={[styles.imageBanner]}
                        source={{
                          uri: "http://192.168.1.2/CricbuddyAdmin/Content/assets/tournament/icon_profile.png",
                        }}
                      />
                    </Pressable>
                  ) : null}
                  {UserProfileUI ? (
                    <Pressable onPress={ProfileImagepickImage}>
                      <Image
                        style={[styles.imagelogo]}
                        source={{ uri: userprofileimage }}
                      />
                    </Pressable>
                  ) : null}
                </View> */}
              </View>

              <View style={styles.body}>
                <View style={styles.width100}>
                  <TextInput
                    ref={txtTournamentName}
                    autoFocus
                    placeholder={"Tournament / Series Name *"}
                    onChangeText={(text) => {
                      settxtTournamentname(text);
                      settxtTournamentname_ErrorStyle(Color.Texttitle);
                      settxtTournamentname_Error(false);
                    }}
                    value={txtTournamentname}
                    style={[
                      {
                        borderBottomColor: txtTournamentname_ErrorStyle,
                        borderBottomWidth: 2,
                      },
                    ]}
                  />
                  {txtTournamentname_Error ? (
                    <Text style={{ color: "red" }}>
                      Please Enter Tournamen / Series Name
                    </Text>
                  ) : null}
                </View>
                <View style={[styles.width100, { marginTop: 20 }]}>
                  <Text style={styles.paragraph}>
                    City <Text style={{ color: "red" }}>*</Text>
                  </Text>
                  <TextInput
                    KeyboardAvoidingView={true}
                    placeholder="Search City"
                    onFocus={() => navigation.navigate("TournamentAddCity")}
                    style={{
                      borderBottomColor: Color.Texttitle,
                      borderBottomWidth: 2,
                    }}
                    value={citytitle}
                  />
                </View>
                <View style={[styles.width100, { marginTop: 20 }]}>
                  <Text style={styles.paragraph}>
                    Ground <Text style={{ color: "red" }}>*</Text>
                  </Text>
                  <TextInput
                    KeyboardAvoidingView={true}
                    placeholder="Search Ground"
                    onFocus={() => navigation.navigate("TouranamentGround")}
                    style={{
                      borderBottomColor: Color.Texttitle,
                      borderBottomWidth: 2,
                    }}
                    value={Groundtitle}
                  />
                </View>
                <View style={[styles.width100, { marginTop: 20 }]}>
                  <Text style={styles.paragraph}>
                    Organiser Name <Text style={{ color: "red" }}>*</Text>
                  </Text>
                  {/* <LineTextInput placeholder="Enter Organiser Name" /> */}
                  <TextInput
                    ref={OrganiserName}
                    placeholder={"Enter Organiser Name"}
                    onChangeText={(text) => {
                      settxtOrganiserName(text);
                      settxtOrganiserName_ErrorStyle(Color.Texttitle);
                      settxtOrganiserName_Error(false);
                    }}
                    value={txtOrganiserName}
                    style={[
                      {
                        borderBottomColor: txtOrganiserName_ErrorStyle,
                        borderBottomWidth: 2,
                      },
                    ]}
                  />
                  {txtOrganiserName_Error ? (
                    <Text style={{ color: "red" }}>
                      Please Enter Organiser Name
                    </Text>
                  ) : null}
                </View>
                <View style={[styles.width100, { marginTop: 20 }]}>
                  <Text style={styles.paragraph}>
                    Organiser Number <Text style={{ color: "red" }}>*</Text>
                  </Text>
                  {/* <LineTextInput placeholder="Enter Organiser Number" /> */}
                  <TextInput
                    keyboardType="numeric"
                    ref={OrganiserNumber}
                    maxLength={10}
                    placeholder={"Enter Organiser Number"}
                    onChangeText={(text) => {
                      settxtOrganiserNumber(text);
                      settxtOrganiserNumber_ErrorStyle(Color.Texttitle);
                      settxtOrganiserNumber_Error(false);
                    }}
                    value={txtOrganiserNumber}
                    style={[
                      {
                        borderBottomColor: txtOrganiserNumber_ErrorStyle,
                        borderBottomWidth: 2,
                      },
                    ]}
                  />
                  {txtOrganiserNumber_Error ? (
                    <Text style={{ color: "red" }}>
                      Please Enter Organiser Number
                    </Text>
                  ) : null}
                </View>

                <View style={[styles.width100]}>
                  <View style={[styles.width100, { marginTop: 20 }]}>
                    <Text style={{ fontSize: 18 }}>Tournament Date</Text>
                  </View>
                  <View style={styles.section}>
                    <View style={{ width: "45%", marginTop: 20 }}>
                      <Pressable onPress={() => setstartDateshow(true)}>
                        <View
                          style={[
                            styles.section,
                            {
                              borderBottomColor: Color.sliverColor,
                              borderBottomWidth: 2,
                            },
                          ]}
                        >
                          <Text>{DateText}</Text>
                          <Image
                            style={styles.image}
                            source={{
                              uri: "http://192.168.1.2/CricbuddyAdmin/Content/assets/datepick.png",
                            }}
                          />
                        </View>
                      </Pressable>
                    </View>

                    <View style={{ width: "45%", marginTop: 20 }}>
                      <Pressable onPress={() => setEndDateshow(true)}>
                        <View
                          style={[
                            styles.section,
                            {
                              borderBottomColor: Color.sliverColor,
                              borderBottomWidth: 2,
                            },
                          ]}
                        >
                          <Text>{EndDateText}</Text>
                          <Image
                            style={styles.image}
                            source={{
                              uri: "http://192.168.1.2/CricbuddyAdmin/Content/assets/datepick.png",
                            }}
                          />
                        </View>
                      </Pressable>
                    </View>
                  </View>
                </View>
                <View style={[styles.width100, { marginTop: 20 }]}>
                  <Text style={styles.paragraph}>Tournament Category</Text>
                  <TextInput
                    KeyboardAvoidingView={true}
                    placeholder="Search Category"
                    onFocus={() => navigation.navigate("TouranmentCategory")}
                    style={{
                      borderBottomColor: Color.Texttitle,
                      borderBottomWidth: 2,
                    }}
                    value={Categorytitle}
                  />
                </View>
                <View style={[styles.width100, { marginTop: 20 }]}>
                  <Text style={styles.paragraph}>Select Ball Type</Text>
                  <TextInput
                    KeyboardAvoidingView={true}
                    placeholder="Select Ball Type"
                    onFocus={() => navigation.navigate("TouranmentBallType")}
                    style={{
                      borderBottomColor: Color.Texttitle,
                      borderBottomWidth: 2,
                    }}
                    value={BallTypetitle}
                  />
                </View>
                <View style={[styles.width100, { marginTop: 20 }]}>
                  <Text style={styles.paragraph}>Pitch Type</Text>
                  <TextInput
                    KeyboardAvoidingView={true}
                    placeholder="Select Pitch Type"
                    onFocus={() => navigation.navigate("TouranmentPitchType")}
                    style={{
                      borderBottomColor: Color.Texttitle,
                      borderBottomWidth: 2,
                    }}
                    value={PitchTypetitle}
                  />
                </View>

                <View style={[styles.width100, { marginTop: 20 }]}>
                  <Text style={styles.paragraph}>Match Type</Text>
                  <TextInput
                    KeyboardAvoidingView={true}
                    placeholder="Select Match Type"
                    onFocus={() => navigation.navigate("TouranmentMatchType")}
                    style={{
                      borderBottomColor: Color.Texttitle,
                      borderBottomWidth: 2,
                    }}
                    value={MatchTypetitle}
                  />
                </View>
                <View style={[styles.width100, { marginTop: 20 }]}>
                  <View style={styles.section}>
                    <Checkbox
                      style={styles.checkbox}
                      value={isChecked}
                      onValueChange={setChecked}
                      color={isChecked ? Color.PrimaryColor : undefined}
                      tintColors={"#368098"}
                    />
                    <Text style={styles.paragraph}>
                      Allow Players to message on Cric
                      <Text style={{ color: Color.PrimaryColor }}>
                        Buddy
                      </Text>{" "}
                      Dm for Team Registration.
                    </Text>
                  </View>
                </View>

                <View style={[styles.width100, { marginTop: 20 }]}>
                  <Pressable
                    style={[styles.button, styles.buttonSave]}
                    onPress={() => btnSave()}
                  >
                    <Text style={{ color: "white" }}>
                      {" "}
                      <Ionicons
                        name="checkmark-circle-outline"
                        size={Color.ButtonSize}
                      />{" "}
                      Save
                    </Text>
                  </Pressable>
                </View>
              </View>
              {startDateshow && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={"date"}
                  is24Hour={true}
                  display="default"
                  onChange={onChangeStart}
                  minimumDate={MinStartDate}
                  // maximumDate={new Date(2022,12,10)}
                  maximumDate={MaxStartDate}
                />
              )}
              {EndDateshow && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={enddate}
                  mode={"date"}
                  is24Hour={true}
                  display="default"
                  onChange={onChangeEnd}
                  minimumDate={MinEndDate}
                  maximumDate={MaxEndDate}
                />
              )}
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Color.WhiteBGColor,
  },
  header: {
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
  },
  body: {
    flexDirection: "column",
    width: "90%",
    marginTop: 30,
    marginLeft: "5%",
  },
  body100: {
    width: "100%",
  },
  input: {
    borderBottomColor: Color.Texttitle,
    borderBottomWidth: 1,
  },
  Banner: {
    alignItems: "center",
    borderBottomColor: Color.Texttitle,
    borderBottomWidth: 5,
    height: 200,
    justifyContent: "center",
  },
  imageBanner: {
    height: 100,
    width: 100,
  },
  imagelogo: {
    height: 100,
    width: 100,
    borderRadius:50
  },
  inputtext:{
    borderBottomColor:"black",
    borderBottomWidth:5
  },
  button:{
    borderRadius: 20,
    elevation: 2,
    padding:12,
    alignItems:'center',
    color:"green"

  },
  buttonSave: {
    backgroundColor: Color.PrimaryColor,
    
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between'
  },
  paragraph: {
    fontSize: 12,
  },
  checkbox: {
    margin: 8,
  },

  image:{
    width: 20,
    height: 20,
   },
   
});

export default TournamentRegistration;
