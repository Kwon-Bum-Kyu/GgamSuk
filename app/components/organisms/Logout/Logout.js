import React from 'react';
import dimen from '../../../common/values/dimensions'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import color from '../../../common/values/colors'
export default function AppButton({ title, onPress, top }) {
    return (
        <TouchableOpacity style={[styles.button, { marginTop: top }]} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button: {
       
        // marginVertical: 10,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        backgroundColor: 'white',
        borderWidth: 1.5,
        width:80,
        borderColor: color.gray500
    },
    buttonText: {
        color: color.gray500,
        fontSize: 12,
        fontWeight: '600',
        textTransform: 'uppercase'

    }
});