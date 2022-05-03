import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {View, Text, StyleSheet, Button, Image, Linking, TouchableOpacity, ImageBackground} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';

const image = {uri: "https://img.jakpost.net/c/2020/06/27/2020_06_27_98873_1593258569._medium.jpg"};

class HomeScreen extends Component{


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
   
      <View> 
      <Text style ={styles.mainText}> Welcome!</Text>
      </View>

      <View>
      <Text style ={styles.subText}> Your one stop place for all your Univeristy Information</Text>
      </View>

      <View style={{ paddingHorizontal: 40, marginTop: 25 }}>


      <View
       style={{
         paddingBottom:-10
       }}
       >


</View>

<ScrollView
  horizontal
  showsHorizontalScrollIndicator={false}
  style={{ marginHorizontal: -40, marginTop: 30 }}
>
  <View
    style={{
      backgroundColor: "#FEFEFE",
      height: 200,
      width: 190,
      borderRadius: 15,
      padding: 5,
    }}
  >
    <TouchableOpacity onPress = {() => Linking.openURL('https://www.mmu.ac.uk/welcome/')}> 
    <Image
      source={{uri: 'https://img.jakpost.net/c/2020/06/27/2020_06_27_98873_1593258569._medium.jpg'}}
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
          Personalised Timetable
        </Text>
      </View>
    </View>
  </View>

  <View
    style={{
      backgroundColor: "#FEFEFE",
      height: 200,
      width: 190,
      borderRadius: 15,
      padding: 5,
      marginHorizontal: 20,
    }}
  >
    <TouchableOpacity onPress = {() => Linking.openURL('https://www.mmu.ac.uk/student-life/contact-us/')}> 
    <Image
      source={{uri: 'https://www.mmu.ac.uk/media/mmuacuk/style-assets/images/student-life/contact-us/business-school-int.jpg'}}
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
          Student Hub
        </Text>
      </View>
    </View>
  </View>

  <View
    style={{
      backgroundColor: "#FEFEFE",
      height: 200,
      width: 190,
      borderRadius: 15,
      padding: 5,
    }}
  >
    <TouchableOpacity onPress = {() => Linking.openURL('https://www.mmu.ac.uk/student-life/')}> 
    <Image
      source={{uri: 'https://www.mmu.ac.uk/media/mmuacuk/content/documents/information-systems/help-guides/04-New-My-MMU-desktop-resize.png'}}
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
          My MMU
        </Text>
      </View>
    </View>
  </View>
        </ScrollView>
       </View>

      </ScrollView>
    );
  }
}

//#6b8e23

const styles = StyleSheet.create({
  
  text: {
    fontSize:30,
    textAlign: 'center',
    color:'white', 
    fontWeight:'bold'
  },


  Box:{

  backgroundColor: "#FEFEFE",
  height: 180,
  width: 190,
  borderRadius: 15,
  padding: 5,
  marginHorizontal: 40,
},

mainText: {
  paddingTop:50,
  fontSize:25,
  textAlign: 'center',
  fontWeight:'bold',
},

subText: {
  paddingTop:10,
  fontSize:20,
  textAlign: 'center',
  fontWeight:'bold',
},


});

export default HomeScreen;


