
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import dimen from '../../../common/values/dimensions';
import colors from '../../../common/values/colors';
import IconClose from '../../../assets/images/svg/iconClose'
import fonts from '../../../common/values/fonts';

import PropTypes from 'prop-types';


import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';

const propTypes = {

};

const defaultProps = {

};
const toastConfig = {
    /* 
      overwrite 'success' type, 
      modifying the existing `BaseToast` component
    */
    success: ({ text1, props, ...rest }) => (
        <BaseToast
            {...rest}
            style={{ borderLeftColor: 'pink' }}
            contentContainerStyle={{ paddingHorizontal: 15 }}
            text1Style={{
                fontSize: 15,
                fontWeight: '400'
            }}
            text1={text1}
            text2={props.uuid}
        />
    ),

    /*
      Reuse the default ErrorToast toast component
    */
    error: (props) => (
        <ErrorToast
            {...props}
            text1Style={{
                fontSize: 17
            }}
            text2Style={{
                fontSize: 15
            }}
        />
    ),
    /* 
      or create a completely new type - `my_custom_type`,
      building the layout from scratch
    */
    my_custom_type: ({ text1, props, ...rest }) => (
        <TouchableOpacity
            style={{
                height: dimen.HEIGHT / 10,
                width: dimen.WIDTH - 40,
                padding: 16,
                backgroundColor: colors.gray100,
                borderWidth: 2,
                borderColor: colors.gray800,
                borderRadius: 8 * dimen.ratioW,
                alignItems: 'center',
                justifyContent: 'flex-start',
                flexDirection: 'row'

            }}
            activeOpacity={1}
            onPress={() => Toast.hide()}>
            <TouchableOpacity
                style={{ width: 30, height: 30, alignItems: 'center', justifyContent: 'center' }}
                activeOpacity={1}
                onPress={() => Toast.hide()}
            >
                <IconClose />
            </TouchableOpacity>

            <Text style={{ fontSize: 12, fontFamily: fonts.spoqaMedium }}>{text1}</Text>
        </TouchableOpacity>
    )
};

const ToastDesign = () => {

    // console.log('carFullNumber',carFullNumber);
    return (
        <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
    )
};

ToastDesign.propTypes = propTypes;
ToastDesign.defaultProps = defaultProps;

export default ToastDesign;
