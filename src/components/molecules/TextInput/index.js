import {View, StyleSheet, Text, TextInput as Input} from 'react-native';
import React, {useState} from 'react';

const TextInput = ({label, placeholder, onInput}) => {
  const [input, setInput] = useState('');

  onInput.inputName('input');
  if (label == 'Phone Number') {
    return (
      <View style={styles.layoutTextInput}>
        <Text style={styles.textInputTitle}>{label}</Text>
        <Input
          value={input}
          placeholder={placeholder}
          style={styles.textInput}
          keyboardType="numeric"
          onChangeText={text => setInput(text)}
        />
      </View>
    );
  } else {
    return (
      <View style={styles.layoutTextInput}>
        <Text style={styles.textInputTitle}>{label}</Text>
        <Input
          placeholder={placeholder}
          style={styles.textInput}
          onChangeText={text => setInput(text)}
        />
      </View>
    );
  }
};

export default TextInput;

const styles = StyleSheet.create({
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  textInputTitle: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  layoutTextInput: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 40,
  },
});
