import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Linking, ImageBackground} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const image = {uri: "https://www.tourismtribe.com/wp-content/uploads/image00-3-768x576.png"};

class JD extends Component{
  
  render(){

    return (
      
      <ScrollView>
        <View>

        <View>
          <ImageBackground
          source={image}
          style={{width: '100%', height: 270}}
          imageStyle={{borderBottomRightRadius:65}}
          >

          </ImageBackground>
        </View>

      <View> 
      <Text style ={styles.mainText}> 
      Meet the team at John Dalton! 
      {"\n"}
      </Text>
      <Text style ={styles.mainTexts}
      onPress={() => Linking.openURL('https://www.mmu.ac.uk/computing-and-maths/staff/')}>
      Click here for all the lecturers
      </Text>
      </View>

       </View>

<View style={{ paddingHorizontal: 40, marginTop: 25 }}>


<View
 style={{
   paddingTop:9
 }}
 >


</View>

<ScrollView
horizontal
showsHorizontalScrollIndicator={false}
style={{ marginHorizontal: -40, marginTop: 30, paddingBottom: 10}}
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
<View>
<Image
source={{uri: 'https://webcdn.mmu.ac.uk/profiles/img/profile-images/1Naomi-Adel-0432-crop-145x145-5836b061775f9.png'}}
style={{ width: 180, borderRadius: 10, height: 130 }}
/>
</View>
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
      fontSize: 10,
      color: "#a2a2db",
    }}
  >
    Name: Naoimi Adel{"\n"}
    Email: n.adel@mmu.ac.uk{"\n"}
    Office Location: John Dalton East, Manchester Campus

    
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
<View> 
<Image
source={{uri: 'https://webcdn.mmu.ac.uk/profiles/img/no-avatar.gif'}}
style={{ width: 180, borderRadius: 10, height: 130 }}
/>
</View>
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
      fontSize: 10,
      color: "#a2a2db",
    }}
  >
    Name: Dr Ismail Adeniran {"\n"}
    Email: i.adeniran@mmu.ac.uk{"\n"}
    Office Location: John Dalton East, Manchester Campus
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
<View> 
<Image
source={{uri: 'https://webcdn.mmu.ac.uk/profiles/img/profile-images/1Nicholas-Costen-0358-crop-145x145-58345df520cab.png'}}
style={{ width: 180, borderRadius: 10, height: 130 }}
/>
</View>
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
      fontSize: 10,
      color: "#a2a2db",
    }}
  >
    Name: Dr Nicholas Costen {"\n"}
    Email: n.costen@mmu.ac.uk{"\n"}
    Office Location: E149 John Dalton Building, Manchester Campus
  </Text>
</View>
</View>
</View>
  </ScrollView>
 </View>



 <ScrollView
horizontal
showsHorizontalScrollIndicator={false}
style={{ marginHorizontal: -40, marginTop: 30, paddingBottom: 10, paddingLeft:40,}}
>


 <View
style={{
backgroundColor: "#FEFEFE",
height: 200,
width: 190,
borderRadius: 15,
padding: 5,
paddingtop:10
}}
>
<View> 
<Image
source={{uri: 'https://webcdn.mmu.ac.uk/profiles/img/profile-images/Marie-Carroll-crop-145x145-577b758b6c418.jpg'}}
style={{ width: 180, borderRadius: 10, height: 130 }}
/>
</View>
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
      fontSize: 10,
      color: "#a2a2db",
    }}
  >
    Name: Marie Carroll {"\n"}
    Email: m.carroll@mmu.ac.uk{"\n"}
    Office Location: E141 John Dalton Building, Manchester Campus
  </Text>
</View>
</View>
</View>

<ScrollView
horizontal
showsHorizontalScrollIndicator={false}
style={{ marginHorizontal: 15}}
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
<View> 
<Image
source={{uri: 'https://webcdn.mmu.ac.uk/profiles/img/profile-images/David-McLean-crop-145x145-577b7453ea447.jpg'}}
style={{ width: 180, borderRadius: 10, height: 130 }}
/>
</View>
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
      fontSize: 10,
      color: "#a2a2db",
    }}
  >
    Name: Dr David McLean {"\n"}
    Email: d.mclean@mmu.ac.uk{"\n"}
    Office Location: E135 John Dalton Building, Manchester Campus
  </Text>
</View>
</View>
</View>


<ScrollView
horizontal
showsHorizontalScrollIndicator={false}
style={{ marginHorizontal: 15}}
>


<View
style={{
backgroundColor: "#FEFEFE",
height: 200,
width: 230,
borderRadius: 15,
padding: 5,

}}
>
<View> 
<Image
source={{uri: 'https://webcdn.mmu.ac.uk/profiles/img/profile-images/Yanlong-Zhang_MG_1333-crop-145x145-59d767700753c.png'}}
style={{ width: 180, borderRadius: 10, height: 130 }}
/>
</View>
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
      fontSize: 10,
      color: "#a2a2db",
    }}
  >
    Name: Dr Yanlong Zhang {"\n"}
    Email: y.zhang@mmu.ac.uk{"\n"}
    Office Location: E139 John Dalton Building, Manchester Campus
  </Text>
</View>
</View>
</View>

</ScrollView>




</ScrollView>
  </ScrollView>
  </ScrollView>


    );
  }
}

const styles = StyleSheet.create({
  
  text: {
    fontSize:30,
    textAlign: 'center',
    color:'white', 
    fontWeight:'bold'
  },

  Header: {
    fontWeight:'bold',
    backgroundColor:`#0000cd`, 
    padding:20, 
    fontSize:25
},

mainText: {
  paddingTop:50,
  fontSize:20,
  textAlign: 'center',
  fontWeight:'bold',
},

mainTexts: {
  fontSize:20,
  textAlign: 'center',
  fontWeight:'bold',
  textDecorationLine:'underline'
},

Box:{

  backgroundColor: "#FEFEFE",
  height: 180,
  width: 190,
  borderRadius: 15,
  padding: 5,
  marginHorizontal: 40,
},

text: {
  fontSize:30,
  textAlign: 'center',
  color:'white', 
  fontWeight:'bold'
},

});

export default JD;


