import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {View, Text, StyleSheet, ImageBackground, Image, Linking, TouchableOpacity} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
const image = {uri: "https://www.mmu.ac.uk/sites/default/files/styles/open_graph_image/public/2020-03/Contact-us_Header_Student-hubs.jpg?h=947807ae&itok=O_5U--2d"};

class Contact extends Component{

  render() {
  
   const navigation = this.props.navigation;

    return ( 

      <ScrollView>

          <View>
          <ImageBackground
          source={image}
          style={{width: '100%', height: 270}}
          imageStyle={{borderBottomRightRadius:65}}
          >

          </ImageBackground>
        </View>

      <View style = {styles.mains}>
      <Text style = {styles.mini}> 
      Manchester Metropolitan University, {"\n"} 
      All Saints Building,
      {"\n"}Manchester,
      {"\n"}M15 6BH
      </Text>
      </View>

      <View style = {styles.mains}>
      <Text style = {styles.mini}> 
      John Dalton Central (IT labs), East and Tower Buildings: {"\n"} 
      Monday-Friday
      {"\n"}8am – 7.30pm
      {"\n"}0161 247 1358
      </Text>
      </View>

      <View style = {styles.mains}>
      <Text style = {styles.mini}> 
      All Saints reception is open 8:00am - 7:00pm Monday to Friday, and closed on weekends {"\n"}
      Our campus security team are available to contact 24/7 on 0161 247 2222</Text>
      </View>


  <ScrollView
  horizontal
  showsHorizontalScrollIndicator={false}
  style={{  marginTop: 30 }}
>
  <View
    style={{
      backgroundColor: "#FEFEFE",
      height: 190,
      width: 190,
      borderRadius: 15,
      padding: 5,
      marginHorizontal:10
    }}
  >
    <TouchableOpacity onPress = {() => Linking.openURL('https://www.mmu.ac.uk/student-life/wellbeing/counselling-and-mental-health/')}> 
    <Image
      source={{uri: 'https://pbs.twimg.com/profile_images/1041978464637734912/_HgytZx-_400x400.jpg'}}
      style={{ width: 180, borderRadius: 10, height: 130 }}
    />
    </TouchableOpacity>
    <View
      style={{
        flexDirection: "row",
        width: 150,
        alignItems: "center",
      }}
    >
      <View
        style={{
          paddingHorizontal: 5,
          paddingVertical: 5,
        }}
      >
        <Text
          style={{
            fontWeight:'bold',
            fontFamily: "RobotoRegular",
            fontSize: 15,
            color: "#a2a2db",
          }}
        >
          Student Wellbeing
        </Text>
      </View>
    </View>
  </View>

  <View
    style={{
      backgroundColor: "#FEFEFE",
      height: 190,
      width: 190,
      borderRadius: 15,
      padding: 5,
      marginHorizontal:10
    }}
  >
    <TouchableOpacity onPress = {() => Linking.openURL('https://www.mmu.ac.uk/contact-us')}> 
    <Image
      source={{uri: 'https://studenthut.com/img/site/the-manchester-metropolitan-university-10004180-universities-reviews-rank-study-uk.jpg?height=675&width=1200'}}
      style={{ width: 180, borderRadius: 10, height: 130 }}
    />
    </TouchableOpacity>
    <View
      style={{
        flexDirection: "row",
        width: 150,
        alignItems: "center",
      }}
    >
      <View
        style={{
          paddingHorizontal: 5,
          paddingVertical: 5,
        }}
      >
        <Text
          style={{
            fontWeight:'bold',
            fontFamily: "RobotoRegular",
            fontSize: 15,
            color: "#a2a2db",
          }}
        >
          Get In Touch
        </Text>
      </View>
    </View>
  </View>


  </ScrollView>

      </ScrollView>
    );
  }
}

//#6b8e23

const styles = StyleSheet.create({
  container: {
    paddingTop:30,
    paddingRight:270,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize:30,
    textAlign: 'center',
    color:'white', 
    fontWeight:'bold'
  },

  texts:{
    fontSize:30,
    textAlign: 'center',
    color:'black', 
    fontWeight:'bold',
  },

  Header: {

    fontWeight:'bold',
    backgroundColor:`#0000cd`, 
    padding:20, 
    fontSize:25
},

  bottom: {
  paddingTop:35,
  paddingBottom: 10,
  paddingRight:285,
  alignItems: 'center',
  justifyContent: 'center'
},

  main: {
  fontWeight:'bold',
  paddingTop:280, 
  fontSize:25
},

  mini: {
  fontSize:15,
  //textAlign: 'center',
  color:'black', 
  fontWeight:'bold',
  
},

  mains: { 
  fontWeight:'bold',
  paddingTop:50, 
  fontSize:25,
  paddingLeft:10
  
},

});

export default Contact;


