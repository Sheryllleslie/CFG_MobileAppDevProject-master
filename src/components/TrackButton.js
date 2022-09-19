import { StyleSheet, Text, View, Pressable } from "react-native";
import { CommonActions, useNavigation } from "@react-navigation/native";

export default function TrackButton(props) {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate("Check Meal")}
      style={styles.buttonStyle}
    >
      <Text style={styles.textStyle}> {props.ButtonText} </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#7DE38D",
  },
  textStyle: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 1,
    color: "#00242B",
  },
});
