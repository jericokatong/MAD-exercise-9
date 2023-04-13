import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import Axios from 'axios';

import UserList from '../../components/molecules/UserList';

const UserLists = () => {
  const [data, setData] = useState();

  useEffect(() => {
    ambilData();
  }, []);

  const ambilData = async () => {
    try {
      const response = await Axios.get(
        'https://jsonplaceholder.typicode.com/users',
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView>
      <Text style={styles.title}>Users List</Text>
      {data &&
        data.map((value, index) => <UserList key={index} value={value} />)}
    </ScrollView>
  );
};

export default UserLists;

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
    marginTop: 30,
    marginLeft: 10,
    marginRight: 30,
  },
});
