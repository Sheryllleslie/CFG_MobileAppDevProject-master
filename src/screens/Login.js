import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Alert,
  Button,
  TextInput,
} from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import Logo from "../components/Logo";

const Login = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkValidUsername, setCheckValidUsername] = useState('');
  const [checkValidPassword, setCheckValidPassword] = useState('');

  const onSignInPressed = () => {
    console.warn("Login");

    if (checkUsernameValidity(username)) {
      console.log("this is from function", username);
    }
    const checkUsername = checkUsernameValidity(username)
    const checkPassword = checkPasswordValidity(password);
    if (checkPassword && checkUsername) {
      navigation.navigate('Main');
   } else {
      null;
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
  

  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <StatusBar style="auto" />
        <Logo />
        <Text style={styles.text}>Login</Text>

        <TextInput
          placeholder="Username"
          value={username}
          autocapitalize="none"
          //   setValue={setUsername}
          //   onChangeText={(text)=>setUsername(text)}
          onChangeText={(text) => handleCheckUsername(text)}
        />

        <TextInput
          placeholder="Password"
          value={password}
          autocapitalize="none"
          //   secureTextEntry={true}
          //   setValue={setUsername}
          //   onChangeText={(text)=>setUsername(text)}
          onChangeText={(text) => handleCheckPassword(text)}
        />

        {/* <Button
          onPress={() => {
            console.log("from button", checkPasswordValidity(password));
          }}
          //   onPress={() => {console.log('from button', checkUsernameValidity(username))}}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        /> */}

        {checkUsernameValidity(username) ? (
          <Text style={styles.errormsg}>{checkUsernameValidity(username)}</Text>
        ) : (
          <Text style={styles.errormsg}></Text>
        )}

        {checkPasswordValidity(password) ? (
          <Text style={styles.errormsg}>{checkPasswordValidity(password)}</Text>
        ) : (
          <Text style={styles.errormsg}></Text>
        )}

        {/* <CustomInput style={{width: '80%'}}
        name='password'
          placeholder="Password"
          value={password}
          autocapitalize="none"
          secureTextEntry={true}
          onChangeText={(text)=>handleCheckPassword(text)}
        /> */}

       

        <CustomButton text="Log In" onPress={onSignInPressed} />
       {/*  <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />
        <CustomButton
          text="Don't you have an account? Create it"
          onPress={onSignUpPressed}
          type="TERTIARY"
        /> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    minHeight: 500,
    alignItems: "center",
    backgroundColor: "white",
  },
  text: {
    fontWeight: "bold",
    fontSize: 40,
    color: "#F72585",
    paddingTop: 50,
  },
  errormsg: {
    color: "red",
    fontSize: 10,
  },
});

export default Login;
