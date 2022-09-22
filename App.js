import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./src/screens/StackNavigation";
// import Pedometer from "./src/screens/Pedometer";

export default function App() {
  return (
    <NavigationContainer style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <StackNavigation />
    </NavigationContainer>
  );
}
