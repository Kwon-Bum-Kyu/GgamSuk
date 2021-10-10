import React from 'react';
import dimen from '../../../common/values/dimensions'
import { StyleSheet, Text ,View} from 'react-native';
import color from '../../../common/values/colors';
import DefaultText from '../../atoms/texts/defaultText/DefaultText';
export default function AppButton({ title, top, fontFamily }) {
    return (
        <View style={[styles.view,{marginTop:top}]}>
            <DefaultText
                color={color.gray600}
                size={12}
                weight={fontFamily}
                text={title}
            />
            {/* <Text style={styles.text}>{title}</Text> */}
        </View>
            
       
    );
}
const styles = StyleSheet.create({
    // text: {  
    //     color: color.gray600,
    //     fontSize: 12
    // },
    view: {
        width:'80%'
    }
});