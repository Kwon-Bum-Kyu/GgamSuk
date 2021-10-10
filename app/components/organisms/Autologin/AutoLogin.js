import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import colors from '../../../common/values/colors';
import dimen from '../../../common/values/dimensions'
import DefaultText from '../../atoms/texts/defaultText/DefaultText';
import IconAutologin from '../../../assets/images/svg/iconAutologin';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
const TAG = 'AutoLogin';
export default function AutoLogin({ onPress, Autologcheck }) {
    return (
        <View style={{ width: '80%', alignItems: 'center', flexDirection: 'row', marginTop: 18.5 }}>


        <TouchableOpacity activeOpacity={1} onPress={onPress}>
            <IconAutologin check={Autologcheck} />
        </TouchableOpacity>
        <DefaultText
            color={colors.gray600}
            marginLeft={5}
            size={15}
            text={'자동로그인'}
        />
        {/* <Text style={[styles.Text, { justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginLeft: 8 }]}>자동로그인</Text> */}

    </View>
    );
}