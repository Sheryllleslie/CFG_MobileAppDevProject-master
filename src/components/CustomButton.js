import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const CustomButton = ({ onPress, text, type = "primary" }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, styles[`container_${type}`]]}
    >
      <Text style={[styles.text, styles[`input_${type}`]]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    minWidth: '80%',
    width: 260,
    paddingHorizontal: 10,
    marginVertical: 10,
    alignItems: "center",
  },

  container_primary: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#7DE38D",
    marginTop: 20,
    marginBottom: 20,
  },

  container_TERTIARY: {
    marginTop: 5,
    marginBottom: 5,

  },

  container_secondary: {
    borderWidth: 2,

  },

  input_primary: {
    fontWeight: "bold",
  },

  input_TERTIARY: {
    color: "grey",
    fontWeight: "bold",
  },
});

export default CustomButton;
