import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, Button, Dimensions, TouchableWithoutFeedback} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Facebook from '../icons/facebook';
import Twitter from '../icons/twitter';
import Instagram from '../icons/instagram';
import LinkedIn from '../icons/linkedin';
import GPlus from '../icons/g+';





var {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({

  container: {
    backgroundColor: 'black',
    height: height * 0.4,
    width:"100%",
    justifyContent:'center',
    alignItems: 'center',

  },
});

class Footer extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Text style={{color:'white',fontWeight:'bold'}}> FOLLOW US </Text>

        <View style={{width:"100%",justifyContent:'center',flexDirection:'row',marginTop: 10, marginBottom: 10}}>
          <Facebook style={{width:68*0.85, height: 27 }} fill='white'></Facebook>
          <Twitter style={{width:68*0.85, height: 27 }} fill='white'></Twitter>
          <Instagram style={{width:68*0.85, height: 27 }} fill='white'></Instagram>
          <GPlus style={{width:68*0.85, height: 27 }} fill='white'></GPlus>
          <LinkedIn style={{width:68*0.85, height: 27 }} fill='white'></LinkedIn>


        </View>
        <Text style={{color:'white',fontSize:10}}> 2017 all rights reserved, Prototype Interactive, LLC </Text>
      </View>
    )
  }

}
export default Footer
