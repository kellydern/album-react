// Import libraries for making a component 
import React from 'react';
import { Text } from 'react-native';

// Make component
const Header = () => {
  return <Text>Albums!</Text>;
};

const styles = {
  textStyle: {
    fontSize: 20
  }
};

// Make the component available to other parts of the app
export default Header;
