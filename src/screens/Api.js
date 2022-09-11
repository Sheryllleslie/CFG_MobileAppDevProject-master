import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import ApiCode from '../components/ApiCode.js'

export default Api = () => {

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <ApiCode Query = '10oz onion and a tomato'/>
    </View>
  );
};