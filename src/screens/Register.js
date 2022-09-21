import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  useEffect(() => {}, [username, email, password]);

  const changeHandler = (e) => {
    setUsername({
      ...username,
      username: e.target.value,
    }),
      setEmail({
        ...email,
        email: e.target.value,
      }),
      setPassword({
        ...password,
        password: e.target.value,
      });
  };
console.log(username, email, password, passwordRepeat)
  const onRegisterPressed = () => {
    console.warn("Success");

    console.log(username, email, password, passwordRepeat);
    navigation.navigate("Main");
  };

  const onSignInPressed = () => {
    navigation.navigate("Login");
  };

  const onTermsUsePrivacy = () => {
    console.warn("Read it before creating an account");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <StatusBar style="auto" />
        <Text style={styles.title}>Create an account</Text>

        <CustomInput
          placeholder="Username"
          type="text"
          autoCapitalize="none"
          name="username"
          // value={username}
          setValue={setUsername}
          onChangeText={changeHandler}
        />
        <CustomInput
          placeholder="Email"
          type="email"
          autoCapitalize="none"
          // value={email}
          setValue={setEmail}
          onChangeText={changeHandler}
        />
        <CustomInput
          placeholder="Password"
          type="password"
          autoCapitalize="none"
          // value={password}
          setValue={setPassword}
          secureTextEntry={true}
          onChangeText={changeHandler}
        />
        <CustomInput
          placeholder="Password Repeat"
          type="password"
          autoCapitalize="none"
          // value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry={true}
          onChangeText={changeHandler}
        />

        <CustomButton text="Register" onPress={onRegisterPressed} />

        <Text style={styles.text}>
          By registering confirm that you accept our{" "}
          <Text style={styles.link} onPress={onTermsUsePrivacy}>
            Terms of Use and Privacy Policy
          </Text>
        </Text>
        <CustomButton
          text="Have an account? Sign in"
          onPress={onSignInPressed}
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
    padding: 30,
    background: "white",
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

export default Register;
