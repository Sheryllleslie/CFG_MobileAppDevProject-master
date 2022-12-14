import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text, ScrollView, TextInput } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import Logo from "../components/Logo";

const Login = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [checkValidUsername, setCheckValidUsername] = useState("");
  const [checkValidPassword, setCheckValidPassword] = useState("");

  const onSignInPressed = () => {
    console.warn("Login");

    const checkUsername = checkUsernameValidity(username);
    const checkPassword = checkPasswordValidity(password);
    if (checkPassword && checkUsername) {
      navigation.navigate("Main");
    } else {
      navigation.navigate("Login");
    }
  };

  const onForgotPasswordPressed = () => {
    console.warn("forgot password");

    navigation.navigate("Reset Password"); // here you will pass a name from navigation container
  };

  const onSignUpPressed = () => {
    console.warn("create an account");

    navigation.navigate("Register");
  };

  const handleCheckUsername = (text) => {
    if (setUsername(text) > 3) {
      setCheckValidUsername(false);
    } else {
      setCheckValidUsername(true);
    }
  };

  const handleCheckPassword = (text) => {
    if (setPassword(text) > 3) {
      setCheckValidPassword(false);
    } else {
      setCheckValidPassword(true);
    }
  };

  const checkUsernameValidity = (value) => {
    if (value) {
      const isNonWhiteSpace = /^\S*$/;
      if (!isNonWhiteSpace.test(value)) {
        return "Username must not contain Whitespaces.";
      }

      const isValidLength = /^.{2,16}$/;
      if (!isValidLength.test(value)) {
        return "Username must be at least 2 characters Long.";
      }
    }
    if (value !== "Jane") {
      return <Text style={styles.errormsg}>Username is invalid.</Text>;
    } else {
      return <Text style={styles.errormsg}></Text>;
    }
  };

  const checkPasswordValidity = (value) => {
    if (value) {
      const isNonWhiteSpace = /^\S*$/;
      if (!isNonWhiteSpace.test(value)) {
        return "Password must not contain Whitespaces.";
      }

      const isContainsUppercase = /^(?=.*[A-Z]).*$/;
      if (!isContainsUppercase.test(value)) {
        return "Password must have at least one UpperCase character.";
      }
      const isContainsNumber = /^(?=.*[0-9]).*$/;
      if (!isContainsNumber.test(value)) {
        return "Password must contain at least one Digit.";
      }

      const isValidLength = /^.{8,16}$/;
      if (!isValidLength.test(value)) {
        return "Password must be 8-16 characters Long.";
      }
    }
    if (value !== "JaneJane12") {
      return <Text style={styles.errormsg}>Password is invalid.</Text>;
    } else {
      return <Text style={styles.errormsg}></Text>;
    }
  };
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "white",
        marginTop: 100,
      }}
    >
      <View style={styles.root}>
        <StatusBar style="auto" />
        <Logo
          style={{
            flex: 1,
          }}
        />
        <Text style={styles.text}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          autocapitalize="none"
          onChangeText={(text) => handleCheckUsername(text)}
        />
        {checkUsernameValidity(username) ? (
          <Text style={styles.errormsg}>{checkUsernameValidity(username)}</Text>
        ) : null}

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          autocapitalize="none"
          secureTextEntry={true}
          onChangeText={(text) => handleCheckPassword(text)}
        />

        {checkPasswordValidity(password) ? (
          <Text style={styles.errormsg}>{checkPasswordValidity(password)}</Text>
        ) : null}

        <CustomButton text="Log In" onPress={onSignInPressed} />

        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

        <CustomButton
          text="Don't you have an account? Create it"
          onPress={onSignUpPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    minHeight: 600,
    alignItems: "center",
    backgroundColor: "white",
  },
  text: {
    fontWeight: "bold",
    fontSize: 40,
    color: "#F72585",
    paddingTop: 50,
    paddingBottom: 30,
  },
  errormsg: {
    color: "red",
    fontSize: 16,
    paddingTop: 5,
  },

  input: {
    backgroundColor: "white",
    width: 260,
    minWidth: "80%",
    borderColor: "grey",
    borderTopWidth: 1,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderLeftWidth: 1,
    elevation: 8,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "#7DE38D",
    shadowOpacity: 1,
    padding: 10,
    marginTop: 20,
  },
});

export default Login;
