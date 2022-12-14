// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from 'react-native';

import TournamentTeams from '../Screen/Tournament/TournamentMain_Navigation/TournamentTeams';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

const CustomSidebarMenu = (props) => {
  const BASE_PATH =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
  const proileImage = 'react_logo.png';
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Add Teams"
          onPress={() => navigation.navigate("Tournament_AddTeams")}
        />
        <DrawerItem
          label="Groups"
          onPress={() => navigation.navigate("Tournament_Groups")}
        />
        <DrawerItem
          label="Start A Match"
          onPress={() => navigation.navigate("Tournament_Start_a_Match")}
        />
        <DrawerItem
          label="Schedule Match"
          onPress={() => navigation.navigate("Tournament_Schedule_Match")}
        />
        <DrawerItem
          label="Delete Schedule"
          onPress={() => navigation.navigate("Tournament_Delete_Schedule")}
        />
        <DrawerItem
          label="Add / Remove Scores"
          onPress={() => navigation.navigate("Tournament_Add_Remove")}
        />
        <DrawerItem
          label="Officials"
          onPress={() => navigation.navigate("Tournament_Officials")}
        />
        <DrawerItem
          label="Setting"
          onPress={() => navigation.navigate("Tournament_Setting")}
        />
        <DrawerItem
          label="Premium/Features"
          onPress={() => navigation.navigate("Tournament_Premium_Features")}
        />
        <DrawerItem
          label="Find/Umpires"
          onPress={() => navigation.navigate("Tournament_Find_Umpires")}
        />
        <DrawerItem
          label="Edit/Delete"
          onPress={() => navigation.navigate("Tournament_Edit_Delete")}
        />

        {/* <View style={styles.customItem}>
          <Text
            onPress={() => {
              Linking.openURL('https://aboutreact.com/');
            }}>
            Rate Us
          </Text>
          <Image
            source={{ uri: BASE_PATH + 'star_filled.png' }}
            style={styles.iconStyle}
          />
        </View> */}
      </DrawerContentScrollView>
      <Text
        style={{
          fontSize: 16,
          textAlign: "center",
          color: "grey",
          marginBottom: 10,
        }}
      >
        <Text
          onPress={() => {
            Linking.openURL("https://Actoscript.com/");
          }}
        >
          Actoscript.Com
        </Text>
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CustomSidebarMenu;
