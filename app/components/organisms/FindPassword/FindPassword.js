import React from 'react';
import dimen from '../../../common/values/dimensions'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import color from '../../../common/values/colors'
import DefaultText from '../../atoms/texts/defaultText/DefaultText';
export default function AppButton({ title, onPress, top, frompage }) {
    let frompages
    if(frompage == "CarList"){
        frompages = 'flex-end'
    }else {
        frompages = 'center'
    }
    return (
        <TouchableOpacity style={[styles.button, { marginTop: top,
            alignItems: frompages }]} onPress={onPress}>
            {/* <Text style={styles.buttonText}>{title}</Text> */}
            <DefaultText
                color={color.gray600}
                size={14}
                textDecorationLine={'underline'}
                textTransform={'uppercase'}
                text={title}
            />
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button: {
       
        // marginVertical: 10,
        justifyContent: 'center',
        width: 150,
        height: 30,
    },
    // buttonText: {
    //     color: '#7F8A94',
    //     fontSize: 14,
    //     fontWeight: '600',
    //     textTransform: 'uppercase',
    //     textDecorationLine: 'underline'
        
    // }
});