import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';

class Union extends Component{

  render(){

    let name = "student-union";

    return (
        <View>
          <Text>Hello {name}</Text>
        </View>
    );
  }
}
export default Union;


