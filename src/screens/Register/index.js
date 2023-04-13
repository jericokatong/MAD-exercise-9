// Name: Jerico Imanuel Katong

import React, {useState} from 'react';
import {ScrollView, View, Text, StyleSheet, Alert} from 'react-native';

import Button from '../../components/atoms/Button';
import TextInput from '../../components/molecules/TextInput';

const Register = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const onName = text => {
    setName(text);
  };
  const onUsername = text => {
    setUsername(text);
  };
  const onEmail = text => {
    setEmail(text);
  };
  const onAddress = text => {
    setAddress(text);
  };
  const onPhoneNumber = text => {
    setPhoneNumber(text);
  };

  const onClick = () => {
    console.log(
      `Name: ${name}\nUsername: ${username}\nEmail: ${email}\nAddress: ${address}\nPhone Number: ${phoneNumber}`,
    );
  };

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      {/* TITLE */}
      <Text style={styles.title}>Registration</Text>

      {/* TEXT INPUT Name */}
      <TextInput
        label="Name"
        placeholder="Masukan nama lengkap anda"
        onChangeText={onName}
      />

      {/* TEXT INPUT USERNAME */}
      <TextInput
        label="Username"
        placeholder="Masukan username anda"
        onChangeText={onUsername}
      />

      {/* TEXT INPUT Email */}
      <TextInput
        label="Email"
        placeholder="Masukan email anda"
        onChangeText={onEmail}
      />

      {/* TEXT INPUT Address */}
      <TextInput
        label="Address"
        placeholder="Masukan alamat anda"
        onChangeText={onAddress}
      />

      {/* TEXT INPUT Phone number */}
      <TextInput
        label="Phone Number"
        placeholder="Masukan Nomor telepon anda"
        onChangeText={onPhoneNumber}
      />

      {/* BUTTON */}
      <Button label="Register" onClick={onClick} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    fontWeight: 800,
    color: 'black',
    textAlign: 'left',
    marginTop: 20,
    marginLeft: 24,
    marginRight: 20,
  },
});

export default Register;
