import Home from "./src/screens/home.js";
import FoodLog from "./src/screens/FoodLog.js";
import AddFood from "./src/screens/AddFood.js";
import Api from "./src/screens/Api.js";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
<Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            }
            if (route.name === 'FoodLog') {
              iconName = focused ? 'fast-food' : 'fast-food-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={Home} options={{ title: "Welcome" }} />
        <Tab.Screen name="FoodLog" component={FoodLog} />
        <Tab.Screen name="AddFood" component={AddFood} />
        <Tab.Screen name="Api" component={Api} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
