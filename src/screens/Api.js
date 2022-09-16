import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  Button,
  TextInput,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { Input, Icon } from "@rneui/themed";

export default Api = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const [query, setQuery] = useState("");

  const getFood = async () => {
    try {
      const response = await fetch(
        "https://api.calorieninjas.com/v1/nutrition?query=" + query,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-Api-Key": "WyLfBylzlZh6YSJZVnmOwA==tnJx5aOYk5VTBx6X",
          },
        }
      );
      const json = await response.json();
      setData(json.items);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFood();
  }, []);

  const addFood = async () => {
    try {
      let newFood = query;
      let arr = data;

      arr.push(newFood);
      setData(arr);
      // getFood();
      setQuery("");
      console.log(arr);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Input
        placeholder="Add item"
        leftIcon={{ type: "font-awesome", name: "search" }}
        onChangeText={(value) => setQuery(value)}
      />
      <Button title="Add Food" onPress={addFood} />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ item }) => item}
          renderItem={({ item }) => (
            <Text>
              {item.name}, {item.calories}
            </Text>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
  },
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
  },
});
