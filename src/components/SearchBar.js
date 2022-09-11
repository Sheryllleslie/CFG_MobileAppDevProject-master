//import React, { useState } from 'react';
//import { StyleSheet, Text, View, Pressable, TextInput,Button } from 'react-native';
//import { CommonActions, useNavigation } from '@react-navigation/native'
//import { Searchbar } from 'react-native-paper';
//
//export default function SearchBar() {
//const [searchQuery, setSearchQuery] = React.useState('');
//
//const [message, setMessage] = useState('');
//  const navigation = useNavigation();
//const goToMessageScreen = () => {
//    navigation.navigate('Api', {
//      message,
//    });
//    };
//  const onChangeSearch = query => setSearchQuery(query);
//    console.log(searchQuery)
//    return (
//    <View>
//    <Searchbar
//      placeholder="Search"
//      onChangeText={onChangeSearch}
////        onChangeText={(text) => setMessage(text)}
//      value={message}
//    />
//    <Button title="Submit"
//        onPress={goToMessageScreen} color="green" />
//    </View>
//  );
//}
//
//
//const styles = StyleSheet.create({
//  buttonStyle: {
//    alignItems: 'center',
//    justifyContent: 'center',
//    paddingVertical: 12,
//    paddingHorizontal: 32,
//    borderRadius: 4,
//    elevation: 3,
//    backgroundColor: '#4CC9F0',
//  },
//  textStyle: {
//    fontSize: 16,
//    lineHeight: 21,
//    fontWeight: 'bold',
//    letterSpacing: 0.25,
//    color: '#7209B7',
//  },
//})
