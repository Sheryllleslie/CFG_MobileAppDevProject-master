import Home from "./src/screens/Home.js";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import FoodList from "./src/screens/FoodList.js";
import Contact from "./src/screens/Contact.js";
import Login from "./src/screens/Login.js";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
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
            if (route.name === "Login") {
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
        <Tab.Screen name="Login" component={Login} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
