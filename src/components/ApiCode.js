import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet, TextInput } from 'react-native';

export default ApiCode = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const [query, setquery] = useState('')

//  const query ='Tomato';

  const getFood = async () => {
     try {
      const response = await fetch('https://api.calorieninjas.com/v1/nutrition?query='+ setquery, {
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
    <TextInput
        value={query}
        style={{ fontSize: 42, color: 'steelblue' }}
        placeholder="Type here..."
        onChangeText={(query) => {
          setquery(query)
        }}
      />
      <Text style={{ fontSize: 24 }}>
        {'\n'}You entered: {query}
      </Text>
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
  }


const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});