
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import colors from '../../../../common/values/colors';
import dimen from '../../../../common/values/dimensions';
import fonts from '../../../../common/values/fonts';

const propTypes = {
    screenMode: PropTypes.string,
    func: PropTypes.func,
    buttonContent: PropTypes.object,
};

const defaultProps = {
    screenMode: 'dark',
    func: () => { },
    buttonContent: <View/>
};

const CircleButton = ({ screenMode, func, buttonContent }) => (
    <TouchableOpacity
        style={{
            // backgroundColor:'red',
            height: 38,
            width: 38,
            borderRadius: 19,
            borderWidth: 1,
            borderColor: screenMode == 'dark'? colors.gray900 :  colors.gray200 ,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: screenMode == 'dark' ? colors.gray900 : colors.gray100 ,//screenMode == 'dark' ? colors.gray100 : colors.gray900
            position: 'absolute',
            top: 5,
            left: 16,
        }}
        onPress={() => func()}>
            {buttonContent}
    </TouchableOpacity>
);

CircleButton.propTypes = propTypes;
CircleButton.defaultProps = defaultProps;

export default CircleButton;
