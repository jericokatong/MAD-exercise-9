import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const List = () => {
  return (
    <View style={styles.layoutButton}>
      <Text>Name: Leanne Graham</Text>
      <Text>Username: Bret</Text>
      <Text>Email: Sincere@april.biz</Text>
      <Text>Address: Kulas Light, Apt. 556, Gwenborough, 92998-3874</Text>
      <Text>Phone: 1-770-736-8031 x56442</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#c238ce',
    padding: 10,
    width: 355,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textButton: {
    color: 'white',
    fontWeight: 'bold',
  },
  layoutButton: {
    marginTop: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
