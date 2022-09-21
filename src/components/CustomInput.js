import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const CustomInput = ({ placeholder }) => {
    return (
        <View>
            <TextInput
                autoCapitalize='none'
                placeholder={placeholder}
                style={styles.input}
                />
        </View>
    )
};

const styles = StyleSheet.create ({

    input: {
        backgroundColor: "white",
        width: 260,
        minWidth: '80%',
        // height: 40,
        borderColor: "grey",
        borderTopWidth: 1,
        borderRightWidth: 3,
        borderBottomWidth: 3,
        borderLeftWidth: 1,
        elevation: 8,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "#7DE38D",
        shadowOpacity: 1,
        padding: 10,
        marginTop: 20,
    },
});


export default CustomInput;