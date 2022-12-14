import { View, Text,StyleSheet,Image,Pressable } from 'react-native'
import React from 'react'
import Color from '../../../../Color/Color'
import { useNavigation } from '@react-navigation/native'

const Tournament_AddTeams = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      {/* <>
        <View style={{ marginTop: 20 }}>
          <Pressable
            onPress={() => navigation.navigate("Tournament_AddTeamsList")}
          >
            <View style={[styles.width100, styles.borderBox]}>
              <View style={styles.width20}>
                <Image
                  source={{
                    uri: "http://192.168.1.2/CricbuddyAdmin/Content/assets/tournament/icon_Search.png",
                  }}
                  style={styles.Image}
                />
              </View>
              <View style={styles.width70}>
                <View>
                  <Text style={styles.Texttitle}>My Teams</Text>
                  <Text style={styles.TextSubtitle}>
                    Quickly add teams from your network.
                  </Text>
                </View>
              </View>
            </View>
          </Pressable>
        </View>
      </> */}
      <>
        <View style={{ marginTop: 20 }}>
          <Pressable
            onPress={() => navigation.navigate("Tournament_AddTeamsList")}
          >
            <View style={[styles.width100, styles.borderBox,{alignItems:"center",paddingHorizontal:10}]}>
              <View
                style={[
                  styles.width20,
                ]}
              >
                <Image
                  source={{
                    uri: "http://192.168.1.2/CricbuddyAdmin/Content/assets/tournament/icon_Search.png",
                  }}
                  style={styles.Image}
                />
              </View>
              <View style={styles.width70}>
                <View >
                  <Text style={styles.Texttitle}>My Teams</Text>
                  <Text style={styles.TextSubtitle}>
                    Quickly add teams from your network.
                  </Text>
                </View>
              </View>
            </View>
          </Pressable>
        </View>
      </>
      <>
        <View style={{ marginTop: 20 }}>
          <Pressable
            onPress={() => navigation.navigate("Tournament_AddNewTeams")}
          >
            <View style={[styles.width100, styles.borderBox,{alignItems:"center",paddingHorizontal:10}]}>
              <View
                style={[
                  styles.width20,
                  
                ]}
              >
                <Image
                  source={{
                    uri: "http://192.168.1.2/CricbuddyAdmin/Content/assets/tournament/add_AddNewTeam.png",
                  }}
                  style={styles.Image}
                />
              </View>
              <View style={styles.width70}>
                <View >
                  <Text style={styles.Texttitle}>Add New Teams</Text>
                  <Text style={styles.TextSubtitle}>
                    Add one or more teams manually
                  </Text>
                </View>
              </View>
            </View>
          </Pressable>
        </View>
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    // backgroundColor: Color.WhiteBGColor,
    // borderColor: "#fff",
    // borderWidth: 5,
    margin:20
  },
  borderBox:{
    borderColor:Color.WhiteBGColor,
    borderWidth:2,
    // justifyContent:"space-between",
    flexDirection: "row",
  },
  width100:{
    width:"100%",
    height:70,
    backgroundColor: Color.WhiteBGColor,
    // borderColor: "white",
    // borderWidth: 5,
  },
  width20:{
    width:"20%"
    ,alignItems:"center",justifyContent:"center" 
  },
  width70:{
    width:"80%"
  },
  Image:{
    // marginTop: 7,
    // marginLeft:10,
    height: 50,
    width: 50,
    

  },
  Texttitle:{
    fontSize:18,
    fontWeight:'500'
  },
  TextSubtitle:{
    fontSize:14,
    color:Color.Texttitle
  }
})

export default Tournament_AddTeams;