import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import color from '../../../common/values/colors';
import DefaultText from '../../atoms/texts/defaultText/DefaultText';
export default function AppButton({ title, onPress, top, back, fontFamily }) {
    let backs;
    if(back){
        backs = back;
    }else {
        backs = false;
    }
    
    return (
        <TouchableOpacity style={[styles.button, { 
            marginTop: top, 
            backgroundColor: backs ? color.white : color.gray600,
            borderWidth: backs ? 2 : 0,
            borderColor: color.gray600,
            }]} 
            onPress={onPress}>
            {/* <Text style={[styles.buttonText,{
                 color: backs ? color.gray600 : color.white,
                //  fontFamily: font
            }]}>{title}</Text> */}
            <DefaultText
                color={backs ? color.gray600 : color.white}
                weight={fontFamily}
                size={18}
                text={title}
                textTransform={'uppercase'}
            />
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button: {
        // top:100,
        marginVertical: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        height : 55,
        width: '80%',
        
    },
    // buttonText: {
       
    //     fontSize: 18,
    //     fontWeight: '600',
    //     textTransform: 'uppercase'
        
    // }
});