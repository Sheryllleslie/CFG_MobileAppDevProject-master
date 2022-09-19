import React, { useState } from "react";
import {
  FlatList,
  Text,
  View,
  Button,
  TextInput,
  StyleSheet,
} from "react-native";

export default FoodList = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

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
      const jsValue = json.items;
      if (jsValue.length == 0) {
        setErrorMsg(`No result for ${query}`);
      }
      const tempData = [...jsValue, ...data];
      setData(tempData);
      setQuery("");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.customInput}
        clearButtonMode="always"
        placeholder="Add food"
        leftIcon={{ type: "font-awesome", name: "search" }}
        value={query}
        onChangeText={(queryText) => setQuery(queryText)}
      />
      <Button title="Add Food" onPress={getFood} />

      {!errorMsg.length == 0 ? (
        <View
          style={{
            flex: 1,
            padding: 30,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 18, color: "#337253" }}>{errorMsg}</Text>
        </View>
      ) : null}

      <FlatList
        data={data}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>
              {item.name} {item.calories}
            </Text>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "#101010",
    marginTop: 60,
    fontWeight: "700",
  },
  listItem: {
    marginTop: 10,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#fff",
    width: "100%",
  },
  listItemText: {
    fontSize: 18,
  },
  customInput: {
    borderColor: "gray",
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
});
