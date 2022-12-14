import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'
import Color from '../../../Color/Color'


const MyTeam = () => {
  return (
    <View style={styles.Container}>
       <View style={styles.BannerBox}>
          <Pressable
            onPress={() => navigation.navigate("AddANewTournamentAndSeries")}
          >
            <View style={styles.BannerSpaceBetween}>
              <Text style={styles.BannerTitle}>Want to create a new team ?</Text>
              <Text style={styles.BannerTitle}>CREATE</Text>
            </View>
          </Pressable>
        </View>
        <View>
          
        </View>
    </View>
  )
}

export default MyTeam

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#fff",
    borderColor: "#fff",
    borderWidth: 5,
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
})