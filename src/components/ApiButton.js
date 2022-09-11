import { StyleSheet, Text, View, Pressable } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native'

export default function ApiButton(props) {
const navigation = useNavigation()
    return (
    <Pressable onPress={() => navigation.navigate('Api')} style={styles.buttonStyle}>
        <Text style={styles.textStyle}> {props.ButtonText} </Text>
      </Pressable>
  );
}


const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#4CC9F0',
  },
  textStyle: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#7209B7',
  },
})