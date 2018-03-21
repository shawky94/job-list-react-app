import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, Button, Dimensions, TouchableWithoutFeedback} from 'react-native';
import { Actions } from 'react-native-router-flux';

var {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  
  text: {
    textAlign: 'center',
    color: 'black'
  },
});

class JobCategory extends Component {
constructor(props) {
super(props)
this.state = {
  selectedItemIndex: 0
}
this._onPressButton = this._onPressButton.bind(this)

}

_onPressButton(){
  this.setState({
    selectedItemIndex: this.props.itemIndex
  })
  this.props.handleCategoryChange(this.props.itemIndex)
  this.forceUpdate()
}
render() {

  return (
    <View>
    <TouchableWithoutFeedback
     onPress={this._onPressButton}>
        <View style={{width: width * 0.6, justifyContent:'center', alignItems:'center', backgroundColor: 'white'}}>
          {this.props.itemIndex < 2 && <Text>  I AM LOOKING FOR
            <Text style={{fontWeight: 'bold',fontSize: 16}}> {this.props.itemValue}</Text>
          </Text>}
          {this.props.itemIndex == 2 && <Text> SEARCH {'\n'}
            <Text style={{fontWeight:'bold'}}>{this.props.itemValue}</Text>
          </Text>}
        </View>
    </TouchableWithoutFeedback>
    </View>
  )
}

}

export default JobCategory;
