import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({label, onClick}) => {
  return (
    <View style={styles.layoutButton}>
      <TouchableOpacity style={styles.button} onPress={onClick}>
        <Text style={styles.textButton}>{label}</Text>
      </TouchableOpacity>
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
