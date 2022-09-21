import React, { useState } from "react";
import {
  FlatList,
  Text,
  View,
  Button,
  TextInput,
  Image,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import Logo from "../components/Logo";
import CustomInput from "../components/CustomInput";

export default FoodList = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [total, setTotal] = useState(0);

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
      setTotal(total + json.items[0].calories);
      setData(tempData);
      setQuery("");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Logo />
        <Text style={styles.baseText}>Calories Counter</Text>
        <TextInput
          style={styles.customInput}
          clearButtonMode="always"
          placeholder="Search food..."
          leftIcon={{ type: "font-awesome", name: "search" }}
          value={query}
          onChangeText={(queryText) => setQuery(queryText)}
        />
        {/* <Button title="Add Food" onPress={getFood} style={styles.buttonStyle} /> */}
        <Pressable onPress={getFood} style={styles.buttonStyle}>
          <Text style={styles.textStyle}> Add Food </Text>
        </Pressable>

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
        <Text> Total: {total} </Text>
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
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
    backgroundColor: "white",
    width: "80%",
    borderColor: "grey",
    borderTopWidth: 1,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderLeftWidth: 1,
    borderRadius: 3,
    elevation: 8,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "#7DE38D",
    shadowOpacity: 1,
    shadowRadius: 3,
    padding: 10,
    marginTop: 50,
    marginBottom: 50,
  },
  img: {
    width: 420,
    height: 130,
  },
  baseText: {
    fontWeight: "bold",
    fontSize: 40,
    color: "#F72585",
    paddingTop: 50,
  },
  buttonStyle: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#7DE38D",
    width: "80%",
    marginTop: 20,
    marginBottom: 20,
  },
  textStyle: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 1,
    color: "#00242B",
  },
});
