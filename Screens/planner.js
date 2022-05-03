import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, FlatList, SafeAreaView, Linking} from 'react-native';


//import { ScrollView } from 'react-native-gesture-handler';

const image = {uri: "https://d1plawd8huk6hh.cloudfront.net/inspire/MANCFR-Largeimagepageheader_1567438638.jpg"};

class Planner extends Component{


  constructor(props){
    super(props);
  
  this.state = {
    isLoading: true,
    activityData:[],
   };
  }

  getAllActivites = async () => {
    return fetch("http://10.0.2.2:2000/api/1.0.0/activity", {
      method: 'get'    
    })
    .then((response) => {
       
        return response.json();
      
    })
    .then(async (responseJson) => {
        
       this.setState({"activityData": responseJson})
       console.log("abc")
    })
    .catch((error) => {
      console.log(error);
    })
  }

  componentDidMount(){
      this.getAllActivites(); 
    }




  render(){
    const navigation = this.props.navigation;
    return(

     <View>

          <View>
          <ImageBackground
          source={image}
          style={{width: '100%', height: 270}}
          imageStyle={{borderBottomRightRadius:65}}
          >
          </ImageBackground>

      <View>
      <Text style ={styles.subText}>Click the picture for extra information</Text>
    
      </View>



      <TouchableOpacity onPress = {() => Linking.openURL('https://www.skiddle.com/cities/Manchester/freshersweek.html')}>

      <View>
        <Image source={{uri: 'https://d31fr2pwly4c4s.cloudfront.net/e/c/9/1313254_1_manchester-freshers-week-2021-free-pre-sale-registration_1024.jpg'}}  
       style={{width: 150, height: 100, bottom:20, left:10}} 
          />  
        </View>
        </TouchableOpacity>
      

        </View>


     
       
   <FlatList style = {{height: '60%', padding: 10, paddingTop:10}}
  data = {this.state.activityData}
  renderItem = {
    ({item}) =>(

  <View>

  <Text style = {styles.headings}>
     Activity: {" "}
     <Text style = {styles.Texts}>
      {item.activity_name}
     </Text>
  </Text>

  <Text style = {styles.headings}>
     Location: {" "}
     <Text style = {styles.Texts}>
      {item.activity_location}
     </Text>
  </Text>

  <Text style = {styles.headings}>
     Date: {" "}
     <Text style = {styles.Texts}>
      {item.activity_date}
     </Text>
  </Text>


  <Text style = {styles.headings}>
      Postcode: {" "}
     <Text style = {styles.Texts}>
      {item.activity_postcode}
     </Text>
  </Text>

  <Text style = {styles.headings}>
     Time: {" "}
     <Text style = {styles.Texts}>
      {item.activity_time}
     </Text>
  </Text>

  <Text style = {styles.headings}>
     Price: {" "}
     <Text style = {styles.Texts}>
      {item.activity_price}
     </Text>
  </Text>

  <Text>

  </Text>

  

  

  </View>

  
  )}
    
    keyExtractor = {(item)=> item.activity_id.toString()}
    />






    
    </View>

  );
}
}

const styles = StyleSheet.create({
  container: {
    paddingTop:60,
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
    fontSize:20,
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

  main: {
  fontWeight:'bold',
  paddingTop:30, 
  fontSize:25
},

mains: {
  fontWeight:'bold',
  paddingTop:40, 
},

sub:{
  fontSize:17,
  textAlign: 'center',
  color:'black', 
  fontWeight:'bold',
},

Texts: {
  fontSize:15,
  color:'#191970',
  fontWeight:'bold'
},

subText: {
  paddingTop:10,
  fontSize:20,
  textAlign: 'center',
  fontWeight:'bold',
  color:'#f08080', //#40e0d0
  padding:40
},

headings: {
  fontWeight:'bold',
  color: '#87cefa',
  fontSize:15,

  

},



});
export default Planner;


/*
    <View>
  

    <Image source={{uri: 'https://www.jbmmusic.com/wp-content/uploads/2020/12/Reggae_Fest_Timeline-Banner-2.jpg'}}  
    style={{width: 290, height: 200, top:50, left:10}} 
    />  

    */
