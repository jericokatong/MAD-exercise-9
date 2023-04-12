// Name: Jerico Imanuel Katong

import React, {useState} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

import Button from '../../components/atoms/Button';
import TextInput from '../../components/molecules/TextInput';

const Register = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const inputName = data => {
    setName(data);
  };

  const inputUsername = data => {
    setUsername(data);
  };

  const inputEmail = data => {
    setEmail(data);
  };

  const inputAddress = data => {
    setAddress(data);
  };

  const inputPhoneNumber = data => {
    setPhoneNumber(data);
  };

  const clickButton = () => {
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
        onInputName={inputName}
      />

      {/* TEXT INPUT USERNAME */}
      <TextInput
        label="Username"
        placeholder="Masukan username anda"
        onInputUsername={inputUsername}
      />

      {/* TEXT INPUT Email */}
      <TextInput
        label="Email"
        placeholder="Masukan email anda"
        onInputEmail={inputEmail}
      />

      {/* TEXT INPUT Address */}
      <TextInput
        label="Address"
        placeholder="Masukan alamat anda"
        onInputAddress={inputAddress}
      />

      {/* TEXT INPUT Phone number */}
      <TextInput
        label="Phone Number"
        placeholder="Masukan Nomor telepon anda"
        onInputPhoneNumber={inputPhoneNumber}
      />

      {/* BUTTON */}
      <Button label="Register" onPress={clickButton} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    fontWeight: 800,
    color: 'black',
    textAlign: 'left',
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
  },
});

export default Register;
