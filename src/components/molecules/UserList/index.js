import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

const UserList = props => {
  return (
    <ScrollView style={styles.sectionList}>
      <Text style={styles.textColor}>
        <Text style={styles.key}>Name:</Text> {props.value.name}
      </Text>
      <Text style={styles.textColor}>
        <Text style={styles.key}>Username:</Text> {props.value.username}
      </Text>
      <Text style={styles.textColor}>
        <Text style={styles.key}>Email:</Text> {props.value.email}
      </Text>
      <Text style={styles.textColor}>
        <Text style={styles.key}>Address:</Text> {props.value.address.street},{' '}
        {props.value.address.suite}, {props.value.address.city},{' '}
        {props.value.address.zipcode}
      </Text>
      <Text style={styles.textColor}>
        <Text style={styles.key}>Phone Number:</Text> {props.value.phone}
      </Text>
    </ScrollView>
  );
};

export default UserList;

const styles = StyleSheet.create({
  key: {
    fontWeight: 'bold',
  },

  textColor: {
    color: 'black',
  },

  sectionList: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 20,
  },
});
