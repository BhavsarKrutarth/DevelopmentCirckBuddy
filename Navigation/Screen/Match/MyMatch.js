import React,{useState,useEffect} from "react";
import {View,Image,StyleSheet,Text,Pressable,Ionicons} from "react-native"

import Custombutton from "../../../Component/PressableButton/Custombutton";
import LineButton from "../../../Component/LineButton/LineButton";
import { useNavigation } from '@react-navigation/native';

import Color from "../../../Color/Color";
import CustomFlatList from "../../../Component/FlatList/CustomFlatList";

const MyMatch = props => {
  const navigation = useNavigation();
    return (
      <View style={styles.Container}>
        <View style={styles.BannerBox}>
          <Pressable
            onPress={() => //navigation.navigate("AddANewTournamentAndSeries")
            alert("Start a match")
          }
          >
            <View style={styles.BannerSpaceBetween}>
              <Text style={styles.BannerTitle}>Want to start a match?</Text>
              <Text style={styles.BannerTitle}>START A MATCH</Text>
            </View>
          </Pressable>
        </View>
        <View>
            <View style={styles.body100}>
              <Image
                source={{
                  uri: "http://192.168.1.2/CricbuddyAdmin/Content/assets/tournament/tournament_Background.png",
                }}
                style={styles.Image}
              />
            </View>
            <View style={styles.body}>
              <View
                style={[
                  styles.body60,
                  {
                    borderColor: Color.PrimaryColor,
                    borderWidth: 2,
                    borderRadius: 30,
                    alignItems: "center",
                  },
                ]}
              >
                <LineButton
                  title={"LOOKING FOR"}
                  onPress={() => alert("click")}
                />
              </View>
              <View style={[styles.body40, { paddingLeft: 20 }]}>
                <Custombutton
                  title={"START MATCH"}
                  onPress={() =>
                    // navigation.navigate("AddANewTournamentAndSeries")
                    alert("Start a match")
                  }
                />
              </View>
            </View>
          </View>
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
    height: 400,
    width: "auto",
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
  body50: {
    width: "50%",
  },
  body40: {
    width: "40%",
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
  BannerBox: {
    marginLeft: 10,
    marginTop: 10,
    padding: 10,
    borderColor: "black",
    borderWidth: 2,
    width: "95%",
    backgroundColor: Color.NavigationColor,
  },
  BannerSpaceBetween: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  BannerTitle: {
    color: "white",
    fontSize: 15,
  },
});

export default MyMatch;