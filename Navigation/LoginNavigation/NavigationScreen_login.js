//How to paramer pass in navigation 
// pass the data : initialParams={{ PageName: 'MyMatch' }}
// Get The Data : initialRouteName={route.params === undefined ? 'TournamentMatch' :route.params.PageName}

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import {TouchableOpacity,Image,View}  from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import CustomeDrawer from './CustomeDrawer';

import MainPage from '../Screen/MainPage';
import SecoundPage from '../Screen/SecoundPage';
import UserProfile from '../Screen/UserProfile';
import Color from '../../Color/Color';
import Login from './Login';
import OTP_Verify from './OTP_Verify';
import PinSet from './PinSet';

import UserProfileEdit from '../Screen/UserProfileEdit';
import Tournament from '../Screen/Tournament/Tournament';
import AddANewTournamentAndSeries from '../Screen/Tournament/AddANewTournamentAndSeries';
import ConfrimationTournament from '../Screen/Tournament/ConfrimationTournament';
import TournamentRegistration from '../Screen/Tournament/TournamentRegistration';
import TournamentAddCity from '../Screen/Tournament/DropDownAdd/TournamentAddCity';
import PayingRole from '../Screen/UserProfileDropDown/PayingRole';
import BattingStyle from '../Screen/UserProfileDropDown/BattingStyle';
import BowlingStyle from '../Screen/UserProfileDropDown/BowlingStyle';
import UserProfileCity from '../Screen/UserProfileDropDown/UserProfileCity';
import TouranamentGround from '../Screen/Tournament/DropDownAdd/TouranamentGround';
import TouranmentCategory from '../Screen/Tournament/DropDownAdd/TouranmentCategory';
import TouranmentBallType from '../Screen/Tournament/DropDownAdd/TouranmentBallType';
import TouranmentPitchType from '../Screen/Tournament/DropDownAdd/TouranmentPitchType';
import TouranmentMatchType from '../Screen/Tournament/DropDownAdd/TouranmentMatchType';
import TournamentRegistrationSucces from '../Screen/Tournament/TournamentRegistrationSucces';
import TournamenentMain from '../Screen/Tournament/TournamentMain/TournamenentMain';
import MyMatch from '../Screen/Match/MyMatch';
import MyTeam from '../Screen/MyTeams/MyTeam';
import MyTeamFollowing from '../Screen/MyTeams/MyTeamFollowing';
import MyTeamOpponents from '../Screen/MyTeams/MyTeamOpponents';

import TournamentAbout from '../Screen/Tournament/TournamentMain_Navigation/TournamentAbout';
import TournamentMatch from '../Screen/Tournament/TournamentMain_Navigation/TournamentMatch';
import TournamentPointsTable from '../Screen/Tournament/TournamentMain_Navigation/TournamentPointsTable';
import TournamentSponsors from '../Screen/Tournament/TournamentMain_Navigation/TournamentSponsors';
import TournamentTeams from '../Screen/Tournament/TournamentMain_Navigation/TournamentTeams';

import Tournament_AddTeams from '../Screen/Tournament/TournamentRightSide_Navigation/Tournament_AddTeams';
import Tournament_Rounds from '../Screen/Tournament/TournamentRightSide_Navigation/Tournament_Rounds';
import Tournament_Groups from '../Screen/Tournament/TournamentRightSide_Navigation/Tournament_Groups';
import Tournament_Start_a_Match from '../Screen/Tournament/TournamentRightSide_Navigation/Tournament_Start_a_Match';
import Tournament_Schedule_Match from '../Screen/Tournament/TournamentRightSide_Navigation/Tournament_Schedule_Match';
import Tournament_Delete_Schedule from '../Screen/Tournament/TournamentRightSide_Navigation/Tournament_Delete_Schedule';
import Tournament_Add_Remove from '../Screen/Tournament/TournamentRightSide_Navigation/Tournament_Add_Remove';
import Tournament_Officials from '../Screen/Tournament/TournamentRightSide_Navigation/Tournament_Officials';
import Tournament_Setting from '../Screen/Tournament/TournamentRightSide_Navigation/Tournament_Setting';
import Tournament_Premium_Features from '../Screen/Tournament/TournamentRightSide_Navigation/Tournament_Premium_Features';
import Tournament_Find_Umpires from '../Screen/Tournament/TournamentRightSide_Navigation/Tournament_Find_Umpires';
import Tournament_Edit_Delete from '../Screen/Tournament/TournamentRightSide_Navigation/Tournament_Edit_Delete';
import Tournament_AddTeamsList from '../Screen/Tournament/TournamentRightSide_Navigation/Tournament_AddTeamsList';
import Tournament_AddNewTeams from '../Screen/Tournament/TournamentRightSide_Navigation/Tournament_AddNewTeams';
import AddCity_Common from '../../Component/CommonCity/AddCity_Common';
import Tournament_EditNewTeams from '../Screen/Tournament/TournamentRightSide_Navigation/Tournament_EditNewTeams';


import CustomSidebarMenu from './CustomSidebarMenu';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const RightDrawer = createDrawerNavigator();
const Tab = createMaterialTopTabNavigator();


const MyTheme = {
  // ...DefaultTheme,
  // colors: {
  //   ...DefaultTheme.colors,
  //   primary: Color.PrimaryColor,
  // },
  dark: false,
  colors: {
    primary: Color.PrimaryColor,
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

const RightDrawerNavigator_TournamenentMain = ({route}) => {
  
  return (
    
    <RightDrawer.Navigator
      //defaultStatus="closed"
      defaultStatus={
        route.params === undefined
          ? "closed"
          : route.params.PageName === "RightDrawerNavigator_TournamenentMain"
          ? "open"
          : "closed"
      }
      screenOptions={{ drawerPosition: "right", headerShown: false }}
      // drawerContentOptions={{
      //   activeTintColor: '#e91e63',
      //   itemStyle: { marginVertical: 5 },
      // }}
      drawerContent={(props) => <CustomSidebarMenu {...props} />}>
      <RightDrawer.Screen
        name="TopTournamenentMain_Tournament"
        component={TopTournamenentMain_Tournament}
        initialParams={{
          PageName:
            route.params === undefined
              ? "TournamentMatch"
              : route.params.PageName === "RightDrawerNavigator_TournamenentMain" ? "TournamentTeams" : "TournamentMatch",
        }}
        options={{
          title: "Tournament",
          headerRight: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
        }}
      />
      {/* <RightDrawer.Screen
        name="Tournament_Rounds"
        component={Tournament_Rounds}
        options={{
          title: "Rounds",
        }}
      />
      <RightDrawer.Screen
        name="Tournament_Groups"
        component={Tournament_Groups}
        options={{
          title: "Groups",
        }}
      />
      <RightDrawer.Screen
        name="Tournament_Start_a_Match"
        component={Tournament_Start_a_Match}
        options={{
          title: "Start A Match",
        }}
      />
      <RightDrawer.Screen
        name="Tournament_Schedule_Match"
        component={Tournament_Schedule_Match}
        options={{
          title: "Schedule Match",
        }}
      />
      <RightDrawer.Screen
        name="Tournament_Delete_Schedule"
        component={Tournament_Delete_Schedule}
        options={{
          title: "Delete Schedule",
        }}
      />
      <RightDrawer.Screen
        name="Tournament_Add_Remove"
        component={Tournament_Add_Remove}
        options={{
          title: "Add / Remove Scores",
        }}
      />
      <RightDrawer.Screen
        name="Tournament_Officials"
        component={Tournament_Officials}
        options={{
          title: "Officials",
        }}
      />
      <RightDrawer.Screen
        name="Tournament_Setting"
        component={Tournament_Setting}
        options={{
          title: "Setting",
        }}
      />
      <RightDrawer.Screen
        name="Tournament_Premium_Features"
        component={Tournament_Premium_Features}
        options={{
          title: "Premium/Features",
        }}
      />
      <RightDrawer.Screen
        name="Tournament_Find_Umpires"
        component={Tournament_Find_Umpires}
        options={{
          title: "Find/Umpires",
        }}
      />
      <RightDrawer.Screen
        name="Tournament_Edit_Delete"
        component={Tournament_Edit_Delete}
        options={{
          title: "Edit/Delete",
        }}
      /> */}
    </RightDrawer.Navigator>
  );
};


function TopTournamenentMain_Tournament({route}) {
  return (
    <Tab.Navigator
      initialRouteName={route.params === undefined ? 'TournamentMatch' :route.params.PageName}
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarIndicatorStyle: {
          backgroundColor: Color.NavigationColor,
          height: 5,
        },
        tabBarActiveTintColor: Color.WhiteBGColor,
        tabBarInactiveTintColor: Color.WhiteBGColor,
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: Color.NavigationColor,
          borderTopColor: Color.WhiteBGColor,
          borderTopWidth: 3,
        },
        tabBarIndicatorStyle: {
          borderBottomColor: Color.NavigationBorderColor,
          borderBottomWidth: 5,
        },
        tabBarLabelStyle:{
          fontSize: 14
        }
      }}
    >
      <Tab.Screen
        name="TournamentMatch"
        component={TournamentMatch}
        options={{
          title: "Match",
        }}
      />
      <Tab.Screen
        name="TournamentSponsors"
        component={TournamentSponsors}
        options={{
          title: "Sponsors",
        }}
      />
      <Tab.Screen
        name="TournamentTeams"
        component={TournamentTeams}
        options={{
          title: "Teams",
        }}
      />
      <Tab.Screen
        name="TournamentPointsTable"
        component={TournamentPointsTable}
        options={{
          title: "Points Table",
        }}
      />
      <Tab.Screen
        name="TournamentAbout"
        component={TournamentAbout}
        options={{
          title: "About",
        }}
      />
    </Tab.Navigator>
  );
}


function SubTopTabNavigation_Tournament() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="MyTeam"
        component={MyTeam}
        options={{
          title: "Team",
        }}
      />
      <Tab.Screen
        name="MyTeamOpponents"
        component={MyTeamOpponents}
        options={{
          title: "Opponents",
        }}
      />
      <Tab.Screen
        name="MyTeamFollowing"
        component={MyTeamFollowing}
        options={{
          title: "Following",
        }}
      />
    </Tab.Navigator>
  );
}


function TopTabNavigation_Tournament({route}) {
  return (
    <Tab.Navigator
      initialRouteName={
        route.params === undefined
                  ? "MyMatch"
                  : route.params.PageName != "" ? (route.params.PageName) : "MyMatch"
      }
      screenOptions={{
        tabBarActiveTintColor: Color.WhiteBGColor,
        tabBarInactiveTintColor: Color.WhiteBGColor,
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: Color.PrimaryColor,
        },
        tabBarIndicatorStyle: {
          borderBottomColor: Color.WhiteBGColor,
          borderBottomWidth: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tab.Screen name="MyMatch" component={MyMatch} />
      <Tab.Screen
        name="Tournament"
        component={Tournament}
        options={{
          title: "Tournament",
        }}
      />
      <Tab.Screen
        name="SubTopTabNavigation_Tournament"
        component={SubTopTabNavigation_Tournament}
        options={{
          title: "My Teams",
        }}
      />
    </Tab.Navigator>
  );
}


function DrawerNavigator() {
  // storeData();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomeDrawer {...props} />}
      screenOptions={
        {
          // headerStyle: { backgroundColor: '#351401' },
          // headerTintColor: 'white',
          // sceneContainerStyle: { backgroundColor: '#3f2f25' },
          // drawerContentStyle: { backgroundColor: '#351401' },
          // drawerInactiveTintColor: 'white',
          // drawerActiveTintColor: '#351401',
          // drawerActiveBackgroundColor: '#e4baa1',
        }
      }
    >
      <Drawer.Screen
        name="MainPage"
        component={MainPage}
        options={{
          title: "MainPage",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="TopTabNavigation_Tournament"
        component={TopTabNavigation_Tournament}
        initialParams={{ PageName: 'Tournament' }}
        options={{
          title: 'Tournamanet',
          // headerTitle: () => (
          //   <Image
          //     source={{
          //       uri: "http://192.168.1.2/CricbuddyAdmin/Content/assets/tournament/Cricheroes_logo.png",
          //     }}
          //     style={{ width: 170, height: 30}}
          //   />
          // ),
          drawerIcon: () => (
            <Image
              source={{
                uri: "http://192.168.1.2/CricbuddyAdmin/Content/assets/tournament/tournament.png",
              }}
              style={{ width: 25, height: 25 }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="MainMatch"
        initialParams={{ PageName: 'MyMatch' }}
        component={TopTabNavigation_Tournament}
        options={{
          title: 'My Match',
          drawerIcon: () => (
            <Image
              source={{
                uri: "http://192.168.1.2/CricbuddyAdmin/Content/assets/tournament/Match_icon.png",
              }}
              style={{ width: 25, height: 25 }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="MainTeam"
        component={TopTabNavigation_Tournament}
        initialParams={{ PageName: 'SubTopTabNavigation_Tournament' }}
        options={{
          title: 'My Team',
          drawerIcon: () => (
            <Image
              source={{
                uri: "http://192.168.1.2/CricbuddyAdmin/Content/assets/tournament/team_icon.png",
              }}
              style={{ width: 25, height: 25 }}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

function TabNavigation_Tournament() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="MainPage" component={MainPage} />
      <Tab.Screen name="SecoundPage" component={SecoundPage} />
    </Tab.Navigator>
  );
}
const NavigationScreen_login = props => {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options ={{
        }}/>
        <Stack.Screen
          name="OTP_Verify"
          component={OTP_Verify}
          options={{
            title: 'OTP Verify',
          }}
        />
        <Stack.Screen name="PinSet" component={PinSet}  
          options={{
            title: 'Pin Set',
          }} />
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="UserProfile"
            component={UserProfile}
            options={{
              title: "User Profile",
              headerTitleAlign: "center",
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: Color.PrimaryColor,
                color: "white",
              },
            }}
          />
          <Stack.Screen
            name="UserProfileEdit"
            component={UserProfileEdit}
            options={{
              title: "User Profile",
              headerTitleAlign: "center",
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: Color.PrimaryColor,
                color: "white",
              },
            }}
          />
          <Stack.Screen
            name="AddANewTournamentAndSeries"
            component={AddANewTournamentAndSeries}
            options={{
              title: "Add A New Tournament / Series",
              headerTitleAlign: "center",
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: Color.PrimaryColor,
                color: "white",
              },
            }}
          />
          <Stack.Screen
            name="ConfrimationTournament"
            component={ConfrimationTournament}
            options={{
              title: "Add A New Tournament / Series",
              headerTitleAlign: "center",
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: Color.PrimaryColor,
                color: "white",
              },
            }}
          />
          <Stack.Screen
            name="TournamentRegistration"
            component={TournamentRegistration}
            options={{
              title: "Add A Tournament / Series",
              headerTitleAlign: "center",
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: Color.PrimaryColor,
                color: "white",
              },
            }}
          />
          <Stack.Screen
            name="TournamentAddCity"
            component={TournamentAddCity}
            options={{
              title: "Add City",
              headerTitleAlign: "center",
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: Color.PrimaryColor,
                color: "white",
              },
            }}
          />
          <Stack.Screen
            name="PayingRole"
            component={PayingRole}
            options={{
              title: "Select Paying Role",
              headerTitleAlign: "center",
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: Color.PrimaryColor,
                color: "white",
              },
            }}
          />
          <Stack.Screen
            name="BattingStyle"
            component={BattingStyle}
            options={{
              title: "Select Batting Style",
              headerTitleAlign: "center",
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: Color.PrimaryColor,
                color: "white",
              },
            }}
          />
          <Stack.Screen
            name="BowlingStyle"
            component={BowlingStyle}
            options={{
              title: "Select Bowling Style",
              headerTitleAlign: "center",
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: Color.PrimaryColor,
                color: "white",
              },
            }}
          />
          <Stack.Screen
            name="TouranamentGround"
            component={TouranamentGround}
            options={{
              title: "Add Ground",
              headerTitleAlign: "center",
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: Color.PrimaryColor,
                color: "white",
              },
            }}
          />
          <Stack.Screen
            name="TouranmentCategory"
            component={TouranmentCategory}
            options={{
              title: "Select Category",
              headerTitleAlign: "center",
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: Color.PrimaryColor,
                color: "white",
              },
            }}
          />
          <Stack.Screen
            name="TouranmentBallType"
            component={TouranmentBallType}
            options={{
              title: "Select Ball Type",
              headerTitleAlign: "center",
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: Color.PrimaryColor,
                color: "white",
              },
            }}
          />
          <Stack.Screen
            name="TouranmentPitchType"
            component={TouranmentPitchType}
            options={{
              title: "Select Pitch Type",
              headerTitleAlign: "center",
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: Color.PrimaryColor,
                color: "white",
              },
            }}
          />
          <Stack.Screen
            name="TouranmentMatchType"
            component={TouranmentMatchType}
            options={{
              title: "Select Match Type",
              headerTitleAlign: "center",
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: Color.PrimaryColor,
                color: "white",
              },
            }}
          />
          <Stack.Screen
            name="TournamentRegistrationSucces"
            component={TournamentRegistrationSucces}
            options={{
              title: "",
              headerTitleAlign: "center",
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: Color.PrimaryColor,
                color: "white",
              },
              headerBackVisible: false,
            }}
          />
          <Stack.Screen
            name="SubTopTabNavigation_Tournament"
            component={SubTopTabNavigation_Tournament}
            options={{
              title: "",
              headerTitleAlign: "center",
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: Color.PrimaryColor,
                color: "white",
              },
            }}
          />
          <Stack.Screen
            name="TabNavigation_Tournament"
            component={TabNavigation_Tournament}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TournamenentMain"
            component={RightDrawerNavigator_TournamenentMain}
            options={({ route }) => ({
              headerShown: true,
              title:
                route.params === undefined
                  ? "Tournament"
                  : route.params.TournamentName != ""
                  ? route.params.TournamentName
                  : "Tournament",
              headerTitleAlign: "center",
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: Color.PrimaryColor,
                color: "white",
              },
            })}
          />
          <Stack.Screen
            name="Tournament_AddTeams"
            component={Tournament_AddTeams}
            options={{
              title: "Add Teams",
              headerTitleAlign: "center",
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: Color.PrimaryColor,
                color: "white",
              },
            }}
          />
          <Stack.Screen
            name="Tournament_Groups"
            component={Tournament_Groups}
            options={{
              title: "Groups",
              headerTitleAlign: "center",
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: Color.PrimaryColor,
                color: "white",
              },
            }}
          />
          <Stack.Screen
            name="Tournament_Start_a_Match"
            component={Tournament_Start_a_Match}
            options={{
              title: "Start A Match",
              headerTitleAlign: "center",
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: Color.PrimaryColor,
                color: "white",
              },
            }}
          />
          <Stack.Screen
            name="Tournament_Schedule_Match"
            component={Tournament_Schedule_Match}
            options={{
              title: "Schedule Match",
              headerTitleAlign: "center",
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: Color.PrimaryColor,
                color: "white",
              },
            }}
          />
          <Stack.Screen
            name="Tournament_Delete_Schedule"
            component={Tournament_Delete_Schedule}
            options={{
              title: "Delete Schedule",
              headerTitleAlign: "center",
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: Color.PrimaryColor,
                color: "white",
              },
            }}
          />
          <Stack.Screen
            name="Tournament_Add_Remove"
            component={Tournament_Add_Remove}
            options={{
              title: "Add / Remove Scores",
              headerTitleAlign: "center",
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: Color.PrimaryColor,
                color: "white",
              },
            }}
          />
          <Stack.Screen
            name="Tournament_Officials"
            component={Tournament_Officials}
            options={{
              title: "Officials",
              headerTitleAlign: "center",
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: Color.PrimaryColor,
                color: "white",
              },
            }}
          />
          <Stack.Screen
            name="Tournament_Setting"
            component={Tournament_Setting}
            options={{
              title: "Setting",
              headerTitleAlign: "center",
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: Color.PrimaryColor,
                color: "white",
              },
            }}
          />
          <Stack.Screen
            name="Tournament_Premium_Features"
            component={Tournament_Premium_Features}
            options={{
              title: "Premium/Features",
              headerTitleAlign: "center",
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: Color.PrimaryColor,
                color: "white",
              },
            }}
          />
          <Stack.Screen
            name="Tournament_Find_Umpires"
            component={Tournament_Find_Umpires}
            options={{
              title: "Find/Umpires",
              headerTitleAlign: "center",
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: Color.PrimaryColor,
                color: "white",
              },
            }}
          />
          <Stack.Screen
            name="Tournament_Edit_Delete"
            component={Tournament_Edit_Delete}
            options={{
              title: "Edit/Delete",
              headerTitleAlign: "center",
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: Color.PrimaryColor,
                color: "white",
              },
            }}
          />
          <Stack.Screen
            name="Tournament_AddTeamsList"
            component={Tournament_AddTeamsList}
            options={{
              title: "My Teams",
              headerTitleAlign: "center",
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: Color.PrimaryColor,
                color: "white",
              },
            }}
          />
          <Stack.Screen
            name="Tournament_AddNewTeams"
            component={Tournament_AddNewTeams}
            options={{
              title: "Add one or more teams",
              headerTitleAlign: "center",
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: Color.PrimaryColor,
                color: "white",
              },
            }}
          />
          <Stack.Screen
            name="UserProfileCity"
            component={UserProfileCity}
            options={{
              title: "Select City",
              headerTitleAlign: "center",
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: Color.PrimaryColor,
                color: "white",
              },
            }}
          />
          <Stack.Screen
            name="AddCity_Common"
            component={AddCity_Common}
            options={{
              title: "Select City",
              headerTitleAlign: "center",
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: Color.PrimaryColor,
                color: "white",
              },
            }}
          />
          <Stack.Screen
            name="Tournament_EditNewTeams"
            component={Tournament_EditNewTeams}
            options={{
              title: "Edit Team",
              headerTitleAlign: "center",
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: Color.PrimaryColor,
                color: "white",
              },
            }}
          />


          
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default NavigationScreen_login
