import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
} from "react-native";
import Logo from "../components/Logo";
import { Pedometer } from "expo-sensors";
import CircularProgress from "react-native-circular-progress-indicator";

export default function PedometerApp() {
  const [pedometerAvailability, setPedometerAvailability] = useState("");

  const [stepCount, setStepCount] = useState(0);

  let distance = stepCount / 1300;
  let distanceCovered = distance.toFixed(4);

  let calories = distanceCovered * 60;
  let caloriesBurnt = calories.toFixed(4);

  useEffect(() => {
    subscribe();
  }, []);

  const subscribe = () => {
    const subscription = Pedometer.watchStepCount((result) => {
      setStepCount(result.steps);
    });
    Pedometer.isAvailableAsync().then(
      (result) => {
        setPedometerAvailability(String(result));
      },
      (error) => {
        setPedometerAvailability(error);
      }
    );
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <Logo />
          <ImageBackground
            source={require("../../assets/running_cover.jpg")}
            resizeMode="cover"
            style={styles.image}
          >
            <View
              style={{
                flex: 1,

                alignItems: "center",
                marginTop: 40,
              }}
            >
              <Text style={styles.baseText}>Pedometer</Text>
              <Text style={styles.pedometerText}>
                Pedometer available: {pedometerAvailability}
              </Text>
              <View style={{ padding: 30, flex: 3 }}>
                <CircularProgress
                  value={stepCount}
                  maxValue={6500}
                  radius={130}
                  textColor={"#ECF0F1"}
                  activeStrokeColor={"#63BB79"}
                  inActiveStrokeColor={"#F72585"}
                  inActiveStrokeOpacity={0.7}
                  inActiveStrokeWidth={20}
                  activeStrokeWidth={20}
                  title={"Step Count"}
                  titleStyle={{ fontWeight: "bold" }}
                />
              </View>
              <View style={{ padding: 60, flex: 3 }}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.textDesign}>
                    Target: 6500 steps(5 km)
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.textDesign}>
                    Distance Covered: {distanceCovered} km
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.textDesign}>
                    Calories Burnt: {caloriesBurnt} kcal
                  </Text>
                </View>
              </View>
            </View>
            <StatusBar style="auto" />
          </ImageBackground>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  baseText: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#F72585",
    paddingBottom: 30,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    margin: "auto",
    backgroundColor: "white",
    opacity: 0.9,
    height: "100%",
  },
  pedometerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#7DE38D",
    padding: 10,
    backgroundColor: "white",
  },
  textDesign: {
    height: 50,
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    padding: 10,
    minWidth: 400,
    width: "100%",
    backgroundColor: "rgba(247, 89, 182, 0.6)",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    overflow: "hidden",
    paddingBottom: 20,
  },
});
