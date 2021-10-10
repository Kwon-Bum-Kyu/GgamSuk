import React from 'react';
import { View, StyleSheet, TextInput,Keyboard } from 'react-native';
import colors from '../../../common/values/colors';
import dimen from '../../../common/values/dimensions'
// import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function AppTextInput({ leftIcon,carNum, ...otherProps }) {
    return (
        <View style={styles.container}>
            
            <TextInput
                style={styles.input}
                placeholderTextColor={colors.gray300}
                
                {...otherProps}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 8 * dimen.ratioW,
        flexDirection: 'row',
        // marginVertical: 3, 
        borderWidth: 3 , 
        borderColor: 'gray',
        width: dimen.WIDTH/1.5,
    },
    icon: {
        marginRight: 10
    },
    input: {
        width: '100%',
        fontSize: 36,
        padding:10,
        color: colors.gray700,
        textAlign:'center'

    }
});