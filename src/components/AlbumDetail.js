// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

const AlbumDetail = (props) => {
  return (
    <View>
      <Text>{props.album.title}</Text>
    </View>
  );
};

// Make the component available to other parts of the app
export default AlbumDetail;