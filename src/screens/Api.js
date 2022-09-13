import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, Button } from 'react-native';
import { Input, Icon } from '@rneui/themed';


export default Api = () => {
    const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const [query, setQuery] = useState('')

  const getFood = async () => {
     try {
      const response = await fetch('https://api.calorieninjas.com/v1/nutrition?query='+ query, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  'X-Api-Key': 'WyLfBylzlZh6YSJZVnmOwA==tnJx5aOYk5VTBx6X'},
  });;
      const json = await response.json();
      setData(json.items);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getFood();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Input
      placeholder="Add item"
      leftIcon={{ type: 'font-awesome', name: 'list' }}
      onChangeText={(value) => setQuery(value)}
      />
      <Button title='submit' onPress={getFood}/>
        {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.name}, {item.calories}</Text>
          )}
        />
      )}
    </View>
  );
};
