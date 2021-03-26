import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

const CustomButton = ({ text, icon, color, onClick }) => {
    return (
        <TouchableOpacity
            style={{ ...styles.btn, backgroundColor: color ? color : 'red' }}
            onPress={() => onClick()}
        >
            <Text style={styles.text}>{icon ?? ''} {text}</Text>
        </TouchableOpacity>
    )
};

export default CustomButton;

const styles = StyleSheet.create({
    btn: {
        width: '90%',
        borderRadius: 10,
        marginTop: 10,
        alignItems: 'center'
    },
    text: {
        color: '#fff',
        padding: 20,
    }
});