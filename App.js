import Home from './src/screens/home.js'
import FoodLog from './src/screens/FoodLog.js'
import AddFood from './src/screens/AddFood.js'
import Api from './src/screens/Api.js'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="FoodLog" component={FoodLog} />
        <Stack.Screen name="AddFood" component={AddFood} />
        <Stack.Screen name="Api" component={Api} />
    </Stack.Navigator>


    </NavigationContainer>

  );
}
