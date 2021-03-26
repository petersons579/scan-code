import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const Inputs = ({ placeholder, handleChange, value }) => {

    return (
        <TextInput style={styles.input}
            underlineColorAndroid="transparent"
            placeholder={placeholder}
            placeholderTextColor="#70B8FA"
            autoCapitalize="none"
            keyboardType="number-pad"
            onChangeText={text => handleChange(text)}
            value={value}
        />
    );
};

export default Inputs;

const styles = StyleSheet.create({
    input: {
        marginTop: 10,
        height: 40,
        borderColor: '#70B8FA',
        borderWidth: 3,
        width: '90%',
        height: 60,
        borderRadius: 10,
        padding: 6
    }
});