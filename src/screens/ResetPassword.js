import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import Logo from "../components/Logo";

const ResetPassword = () => {
  const [username, setUsername] = useState("");
  const navigation = useNavigation();

  const onResetPasswordPressed = () => {
    console.warn("resent!");
    navigation.navigate("New Password");
  };

  const onReturnPressed = () => {
    console.warn("return");
    navigation.navigate("Login");
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View style={styles.root}>
        <StatusBar style="auto" />
        <Logo />
        <Text style={styles.title}>Reset your password</Text>

        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />

        <CustomButton text="Reset Password" onPress={onResetPasswordPressed} />
        <CustomButton
          text="Back to Sign in"
          onPress={onReturnPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    fontWeight: "bold",
    fontSize: 40,
    color: "#F72585",
    paddingTop: 50,
  },
  text: {
    color: "grey",
    marginVertical: 10,
  },
  link: {
    color: "red",
  },
});

export default ResetPassword;
