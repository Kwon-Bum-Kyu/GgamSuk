
import React from 'react';
import {
    Text,
    TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';

import colors from '../../../../common/values/colors';
import dimen from '../../../../common/values/dimensions';
import fonts from '../../../../common/values/fonts';

const propTypes = {
    screenMode: PropTypes.string,
    text: PropTypes.string,
    color: PropTypes.string,
    func: PropTypes.func,
    marginLeft: PropTypes.number,
};

const defaultProps = {
    screenMode: 'light',
    text: '',
    color: colors.highLight,
    func: () => { },
    marginLeft: 10 * dimen.ratioW
};

const SeeAllZoneButton = ({ screenMode, text, color, func, marginLeft }) => (
    <TouchableHighlight
        underlayColor={screenMode == 'light' ? 'rgba(0, 0, 0, 0.4)' : 'rgba(256, 256, 256, 0.4)'}
        style={{
            backgroundColor: screenMode == 'light' ? colors.gray200 : colors.gray800,
            borderRadius: 32,
            height: 24,
            paddingHorizontal: 12,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: marginLeft,
        }}
        onPress={() => func()}>
        <Text
            style={{
                fontSize: 10,
                // lineHeight: 10,
                fontFamily: fonts.spoqaBold,
                includeFontPadding: false,
                color: screenMode == 'light' ? colors.black : colors.white,
            }}>{text}</Text>
    </TouchableHighlight>
);

SeeAllZoneButton.propTypes = propTypes;
SeeAllZoneButton.defaultProps = defaultProps;

export default SeeAllZoneButton;
