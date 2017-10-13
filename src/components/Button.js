// Import libraries for making a component
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = () => {
  const { textStyle, buttonStyle } = styles;
  return (
    <TouchableOpacity style={buttonStyle}>
      <Text style={textStyle}>
      Download</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#9b59b6',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    borderColor: '#9b59b6',
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderWidth: 2,
    marginLeft: 5,
    marginRight: 5,
  }
};

// Make the component available to other parts of the app
export default Button;
