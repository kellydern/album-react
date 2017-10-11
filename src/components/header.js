// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make component
const Header = () => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
    <Text style={textStyle}>My Albums</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#9b59b6',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
  },
  textStyle: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600'
  }
};

// Make the component available to other parts of the app
export default Header;
