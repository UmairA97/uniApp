import React, { Component } from 'react';
import { Text, View, Alert, PermissionsAndroid, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

async function requestLocationPermission(){
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location Permission',
        message:
          'This app requires access to your location.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can access location');
      return true;
    } else {
      console.log('Location permission denied');
      return false;
    }
  } catch (err) {
    console.warn(err);
  }
}


class Map extends Component{

  constructor(props){
    super(props);

    this.state = {
      
      location: null,
      locationPermission: false,
      isLoading: true,
      latitude:0,
      longitude:0,
    }

  }

  findCoordinates(){
    console.log("state", this.state);
    if(!this.state.locationPermission){
      console.log("asking for permission...");
      this.state.locationPermission = requestLocationPermission();
    }

   this.setState({
      location: {
        longitude: -2.2400195173193125,
        latitude: 53.4719383716863
      },

      location2:{

        longitude: -2.2387110502947345,
        latitude: 53.47133012147006,

      },

      location3:{

        longitude: -2.2367019237434707,
        latitude: 53.469561559187085,

      },

      location4:{

        longitude: -2.246562088386395,
        latitude: 53.466789741635466,

      },

      isLoading: false
    })
  }
  
  

  componentDidMount(){
    this.findCoordinates();
  }

  render(){
    if(this.state.isLoading){
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      )
    }else{
      return (

        <View style={{flex:1}}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={{flex:1}}
            region={{
              latitude:this.state.location2.latitude,
              longitude: this.state.location2.longitude,
              latitude:this.state.location3.latitude,
              longitude: this.state.location3.longitude,
              latitude:this.state.location4.latitude,
              longitude: this.state.location4.longitude,
              latitude:this.state.location.latitude,
              longitude: this.state.location.longitude,
              latitudeDelta: 0.002,
              longitudeDelta: 0.002
            }}
          >
            <Marker
              coordinate={this.state.location2}
              title="Business School"
            />
            <Marker
              coordinate={this.state.location3}
              title="Geoffrey Manton"
            />
            <Marker
              coordinate={this.state.location4}
              title="Brooks Building"
            />
            <Marker
              coordinate={this.state.location}
              title="John Dalton"
            />

          </MapView>
        

          <View style = {styles.button}>
          <TouchableOpacity onPress = {() => Linking.openURL('https://www.google.com/maps/place/Faculty+of+Science+and+Engineering,+Manchester+Metropolitan+University/@53.4713298,-2.2427622,17z/data=!3m1!4b1!4m5!3m4!1s0x487bb1ec9ace4e6d:0x6bda818756f62e64!8m2!3d53.47183!4d-2.2410298')}> 
          
          <Text
          style={{
            fontWeight:'bold',
            fontFamily: "RobotoRegular",
            fontSize: 15,
            color: "#FFFF",
            textAlign: 'center',
          }}
        >
          Directions
        </Text>
        </TouchableOpacity>
        </View>
        </View>
      );
    }
  }

}

const styles = StyleSheet.create({
  
  button: {
    padding:10,
    fontSize:10,
    textAlign: 'center',
    backgroundColor:"#841584",
    fontWeight:'bold'
  },
});

export default Map;

/*
color="#841584"
*/