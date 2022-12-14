

import React,{useState,useEffect} from "react";
import {View,Image,StyleSheet,Text,FlatList,SafeAreaView, Pressable,Modal,Button} from "react-native"

import Custombutton from "../../../../Component/PressableButton/Custombutton";
import LineButton from "../../../../Component/LineButton/LineButton";
import { useNavigation } from '@react-navigation/native';
import Color from "../../../../Color/Color";
import { useRoute } from '@react-navigation/native';



const TournamentTeams = (props) => {
  const [listItems, setListItems] = useState([]);
  const [DisplayList,setDisplayList] = useState("false");
  const [isVisible,setisVisible] = useState(false);
  const [TOURNAMENT_MYTEAMID,setTOURNAMENT_MYTEAMID] = useState(null); 
  const route = useRoute();
  React.useEffect(() => {
    if(route.params?.LoadRef == "True")
    {
      console.log(route.params?.LoadRef)
    }
    TournamentMyTeam();
    
  }
  ,[(route.params)])
  const navigation = useNavigation();
  
  const TournamentMyTeam = async () => {
    try {
      const resposneJSON = await fetch(
        `${global.domainName}/cricbuddyAPI/api/TournamentMyTeam/` + global.Tournamentid,
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
          if (BindData.SERVICERESPONSE.TOTALRECORDS != "0") {
            List = BindData.SERVICERESPONSE.DETAILSLIST.DETAILS;
            var setarray = [];
            if(List.length > 1 )
            {
              if (List) {
                List.forEach((List) => {
                  setarray.push({
                    id: List.TOURNAMENT_MYTEAMID,
                    TOURNAMENTID: List.TOURNAMENTID,
                    TOURNAMENTNAME:List.TOURNAMENTNAME,
                    MOBILENO:List.MOBILENO,
                    MYTEAM_GUID:List.MYTEAM_GUID,
                    IMAGENAME:List.IMAGENAME,
                    IMGTITLE:List.IMGTITLE,
                    TITLE:List.TITLE,
                    CITYID:List.CITYID,
                    CITYNAME:List.CITYNAME
                  });
                });
              }
            }
            else if(List.length == 1)
            {
               setarray.push(
                {
                  id : List.TOURNAMENT_MYTEAMID,
                  TOURNAMENTID: List.TOURNAMENTID,
                  TOURNAMENTNAME:List.TOURNAMENTNAME,
                  MOBILENO:List.MOBILENO,
                  MYTEAM_GUID:List.MYTEAM_GUID,
                  IMAGENAME:List.IMAGENAME,
                  IMGTITLE:List.IMGTITLE,
                  TITLE:List.TITLE,
                  CITYID:List.CITYID,
                  CITYNAME:List.CITYNAME
                }
              )
            }
             setListItems(setarray);
             setDisplayList("true");
            // setMyTeamData(true)
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
  const DeleteMyTeamList = () => 
  {
    alert(TOURNAMENT_MYTEAMID)
  }
  const renderItem = ({ item }) => (
    <View style={[styles.body95, styles.item]}>
      <View
        style={[
          styles.body25,
          styles.img,
          { backgroundColor: Color.PrimaryColor },
        ]}
      >
        {item.IMAGENAME != null ? (
          <Image
            source={{
              uri: `${global.domainName}/cricbuddyAPI/UploadFiles/UserProfile/${item.IMAGENAME}`,
            }}
            style={styles.img}
          />
        ) : (
          <Text style={{ color: "white" }}>{item.IMGTITLE}</Text>
        )}
      </View>
      <View
        style={[
          styles.body70,
          {
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
          },
        ]}
      >
        <Text style={[styles.title, { marginLeft: 10 }]}>{item.TITLE}</Text>
      </View>
      <View
        style={[
          styles.body10,
          {
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
          },
        ]}
      >
        <Pressable onPress={() => {
          setTOURNAMENT_MYTEAMID(item.id)
          setisVisible(true)
         }}>
          <Image
            source={{
              uri: `${global.domainName}/CricbuddyAdmin/Content/assets/tournament/remove.png`,
            }}
            style={{ height: 25, width: 25 }}
          />
        </Pressable>
      </View>
    </View>
  );
    return (
      <View style={styles.Container}>
        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setisVisible(!isVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={styles.body100}>
                  <Image
                    source={{
                      uri: `${global.domainName}/CricbuddyAdmin/Content/assets/tournament/remove.png`,
                    }}
                    style={{ height: 100, width: 100 }}
                  />
                </View>
                <Text style={styles.modalText}>Remove - {TOURNAMENT_MYTEAMID}</Text>
                <Text style={styles.modalText}>
                  Are you sure uou want to remove this team from the tournament?
                </Text>
                <Pressable
                  style={[styles.button,{backgroundColor:"#8B0000"}]}
                  onPress={() => DeleteMyTeamList()}
                >
                  <Text style={[styles.textStyle,{paddingHorizontal:20}]}>YES,REMOVE</Text>
                </Pressable>
                <Pressable
                  style={[{backgroundColor:"white", borderRadius: 20,
                  elevation: 2,
                  margin:10,
                  padding: 12,
                  alignItems: "center",
                  color: "green",}]}
                  onPress={() => setisVisible(!isVisible)}
                >
                  <Text style={{paddingHorizontal:20}}>CANCEL</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>

        {DisplayList == "false" ? (
          <View>
            <View style={[styles.body100, { alignItems: "center" }]}>
              <Image
                source={{
                  uri: `${global.domainName}/CricbuddyAdmin/Content/assets/tournament/tournament_Background.png`,
                }}
                style={styles.Image}
              />
            </View>
            <View style={styles.body}>
              <View style={[styles.body20]}></View>
              <View style={[styles.body60]}>
                <Custombutton
                  title={"Add TEAMS"}
                  onPress={
                    () => navigation.navigate("Tournament_AddTeams")
                    //alert("Start a match")
                  }
                />
              </View>
            </View>
          </View>
        ) : (
          <SafeAreaView style={styles.Container}>
            <FlatList
              data={listItems}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </SafeAreaView>
        )}
      </View>
    );
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#fff",
    borderColor: "#fff",
    borderWidth: 5,
  },
  Image: {
    marginTop: 10,
    height: 250,
    width: 250,
  },
  body: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 25,
    alignItems: "center",
  },
  body100: {
    width: "100%",
  },
  body95: {
    width: "95%",
  },
  body70: {
    width: "70%",
  },
  body40: {
    width: "40%",
  },
  body10: {
    width: "10%",
  },
  body20:{
    width:"20%"
  },
  body60: {
    width: "60%",
  },
  title: {
    color: Color.Texttitle,
    fontWeight: "bold",
    fontSize: 18,
    margin: 5,
  },
  button: {
    borderRadius: 20,
    elevation: 2,
    padding: 12,
    alignItems: "center",
    color: "green",
  },
  buttonSave: {
    backgroundColor: Color.PrimaryColor,
  },
  item: {
    backgroundColor: "#F8F9F9",
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderColor: Color.PrimaryColor,
    borderWidth: 3,
    flexDirection: "row",
    alignContent: "center",
  },
  title: {
    fontSize: 16,
  },
  img: {
    borderColor: "black",
    borderRadius: 100,
    borderWidth: 2,
    height: 65,
    width: 65,
    alignItems: "center",
    justifyContent: "center",
  },
 
  
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    
  },
  modalView: {
    // height:500,
    // width:"90%",
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
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 5,
    textAlign: "center"
  }
});

export default TournamentTeams;