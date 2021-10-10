import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import dimen from '../../../common/values/dimensions';
import color from '../../../common/values/colors';

export default function AppTextInput({ title }) {
    return (
        <View style={styles.container}>
            
            <Text
                style={styles.input}
                // placeholderTextColor="#6e6869"
            >{title}</Text>
        </View>
    );
} 
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 8 * dimen.ratioW,
        flexDirection: 'row',
        marginTop:15,
        // marginVertical: 3,
        borderWidth: 3,
        borderColor: 'gray',
        width: dimen.WIDTH / 1.5,
        
    },
    icon: {
        marginRight: 10
    },
    input: {
        padding:5,
        textAlign:'center',
        width: '100%',
        fontWeight:'400',
        fontSize: 36,
        color: color.gray700
    }
});