import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {View, Text, StyleSheet, ImageBackground, Image, Linking} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';

const image = {uri: "https://theyorkie.co.uk/wp-content/uploads/2019/05/MentalHealth_Flickr.jpg"};

class Info extends Component{

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
       We understand that starting university and adjusting can be difficult. {"\n"} 
       Along with the universities dedicated counselling staff, {"\n"} 
       Here are a few external charities/organisations that can help: {"\n"}
       {"\n"}
       Click the headings to be redirected to their page
      </Text>
      </View>

      <View style = {styles.mains}>
      <Text style = {styles.title} onPress = {() => Linking.openURL('https://www.studentminds.org.uk')}> 

      Student Minds
      </Text>
      </View>

      <View>
      <Image source={{uri: 'https://pbs.twimg.com/profile_images/1366806814130655232/Nv6hru6p_400x400.png'}} 
      style={{width: 200, height: 170, top: 25, left:8}}
      />
      </View>

      <View style = {styles.mains}>
      <Text style = {styles.title}  onPress = {() => Linking.openURL('https://www.mind.org.uk/information-support/tips-for-everyday-living/student-life/about-student-mental-health/')}> 

       Mind
      </Text>
      </View>

      <View>
      <Image source={{uri: 'https://yt3.ggpht.com/ytc/AAUvwngxhIz3a4f4CmouAfn7bTDJyCrHJbAoB-l-9lc-=s900-c-k-c0x00ffffff-no-rj'}} 
      style={{width: 200, height: 170, top: 25, left:8}}
      />
      </View>

      <View style = {styles.mains}>
      <Text style = {styles.title}  onPress = {() => Linking.openURL('https://www.nhs.uk/mental-health/nhs-voluntary-charity-services/charity-and-voluntary-services/get-help-from-mental-health-helplines/')}> 

      NHS
      </Text>
      </View>

      <View>
      <Image source={{uri: 'https://www.hee.nhs.uk/sites/default/files/styles/image_658_witdh/public/screen%20image%20jpg.jpg?itok=Yw9fzNwg'}} 
      style={{width: 200, height: 170, top: 25, left:8}}
      />
      </View>

      <View style = {styles.mains}>
      <Text style = {styles.title}  onPress = {() => Linking.openURL('https://www.rethink.org')}> 

      Rethink
      </Text>
      </View>

      <View>
      <Image source={{uri: 'https://www.westgateuk.co.uk/wp-content/uploads/2019/09/HSP_RMI_logo-image.jpg'}} 
      style={{width: 200, height: 170, top: 25, left:8}}
      />
      </View>

      <View >
      <Text> 
        {"\n"}
      </Text>
      </View>

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

title: {
  fontSize:20,
  textDecorationLine: 'underline',
  color:'black', 
  fontWeight:'bold',
  
},

});

export default Info;


