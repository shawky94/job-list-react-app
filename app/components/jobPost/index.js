import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, Button, Dimensions, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: "10%",
    marginRight: "10%",
    marginBottom: 30,
  }
})

class JobPost extends Component {
constructor(props) {
  super(props)
}


render() {

  return (
    <View style={styles.containerStyle}>
      <View style={{backgroundColor:"white", width: "100%", height: 140}}>
        <TouchableOpacity
          style={{flex: 1, alignItems: "center", justifyContent: "center"}}
          onPress={null}
          >
          <View>
            <Text>{this.props.jobPostData.jobTitle}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

}

export default JobPost;
