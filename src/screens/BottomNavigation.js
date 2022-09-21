import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import FoodList from "../screens/FoodList";
import Contact from "../screens/Contact";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
    const navigation = useNavigation();

    const Signout = () => {
        navigation.navigate('Login');
    }
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "Home") {
          iconName = focused ? "ios-home" : "ios-home-outline";
        }
        if (route.name === "Check Meal") {
          iconName = focused ? "fast-food" : "fast-food-outline";
        }

        if (route.name === "Contact") {
          iconName = focused ? "ios-list" : "ios-list-outline";
        }
        if (route.name === "Logout") {
          iconName = focused ? "person" : "ios-person-outline";
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: "#337253",
      tabBarInactiveTintColor: "gray",
    })}
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Check Meal" component={FoodList} />
    <Tab.Screen name="Contact" component={Contact} />
    <Tab.Screen name="Logout" component={Signout} />
  </Tab.Navigator>
  );
}
