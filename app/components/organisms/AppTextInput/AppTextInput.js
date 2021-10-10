import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import dimen from '../../../common/values/dimensions'
// import { MaterialCommunityIcons } from '@expo/vector-icons';
const TAG = 'AppTextInput';
export default function AppTextInput({ leftIcon, top,...otherProps }) {
    return (
        <View style={[styles.container,{marginTop:top}]}>
           
            <TextInput
                style={styles.input}
                placeholderTextColor="#6e6869"
                {...otherProps}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 5,
        flexDirection: 'row',
        padding: 15,
        marginVertical: 3,
        borderWidth: 3,
        borderColor: 'gray'
    },
    icon: {
        marginRight: 10
    },
    input: {
        width: '80%',
        fontSize: 18,
        color: '#101010'
    }
});