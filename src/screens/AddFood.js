import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import ApiButton from '../components/ApiButton.js'



export default function AddFood() {
  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>Lunch</Text>
      <ApiButton ButtonText ="Api"/>
      <StatusBar style="auto" />
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