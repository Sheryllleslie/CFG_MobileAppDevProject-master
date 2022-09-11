import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,ScrollView } from 'react-native';
import AddFoodButton from '../components/AddFoodButton.js';
//import getFoodFromApi from './api.js';


export default function FoodLog(navigation) {
  return (
    <View style={styles.container}>
    <ScrollView style={styles.scrollView}>
      <Text style={styles.baseText}>Breakfast</Text>
      <AddFoodButton ButtonText ="Add Food Here!"/>
      <Text/>
      <Text/>
      <Text/>
      <Text style={styles.baseText}>Lunch</Text>
      <Text/>
      <Text/>
      <Text/>
      <Text style={styles.baseText}>Dinner</Text>
      <Text/>
      <Text/>
      <Text/>
      <Text style={styles.baseText}>Snacks</Text>

      <StatusBar style="auto" />
    </ScrollView>
    </View>
  );
}

const request = () => {
  return (
    <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="You can type in me"
      />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4361EE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontWeight: 'bold',
    fontSize: 50 ,
    color: '#F72585'
  },
});