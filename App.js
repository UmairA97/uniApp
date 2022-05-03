import 'react-native-gesture-handler';

import React, { Component } from 'react'
import {NavigationContainer, TabActions} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './Screens/home-screen';
import Contact from './Screens/contact';
import Planner from './Screens/planner';
import Map from './Screens/map';
import JD from './Screens/jd';
import Info from './Screens/info';



const Tab = createBottomTabNavigator();

class App extends Component{
  render(){
    return(
      <NavigationContainer>
        <Tab.Navigator

          screenOptions = {({route})=>({

            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              if(route.name === 'Home'){
                iconName = focused ? 'home' : 'home-outline';
              } else if(route.name ==='Contact'){
                iconName = focused ? 'person' : 'person-outline';
              } else if(route.name ==='Planner'){
                iconName = focused ? 'book' : 'book-outline';
              }
              else if(route.name ==='Map'){
                iconName = focused ? 'locate' : 'locate-outline';
              }
              else if(route.name ==='Staff'){
                iconName = focused ? 'body' : 'body-outline';
              }
              else if(route.name ==='Information'){
                iconName = focused ? 'information' : 'information-circle-outline';
              }

              return<Ionicons name = {iconName} size = {size} color = {color} />
            },
           })}

           tabBarOptions = {{
             activeTintColor : '#191970',
             inactiveTintColor: 'gray',
           }}
           >
          
          <Tab.Screen name = "Home" component = {HomeScreen} />
          <Tab.Screen name = "Planner" component = {Planner} />
          <Tab.Screen name = "Staff" component = {JD} />
          <Tab.Screen name = "Map" component = {Map} />
          <Tab.Screen name = "Contact" component = {Contact} />
          <Tab.Screen name = "Information" component = {Info} />
         
          
        </Tab.Navigator>

      </NavigationContainer>
    );
  }
}

export default App;

/*
              else if(route.name ==='Chat'){
                iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
              }
              <Tab.Screen name = "Chat" component = {Union} />
*/