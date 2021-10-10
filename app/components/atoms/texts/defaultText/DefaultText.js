
import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import colors from '../../../../common/values/colors';
import fonts from '../../../../common/values/fonts';

const propTypes = {
    text: PropTypes.string,
    size: PropTypes.number,
    color: PropTypes.string,
    weight: PropTypes.string,
    left: PropTypes.number,
    marginTop: PropTypes.number,
    marginBottom: PropTypes.number,
    marginLeft: PropTypes.number,
    marginRight: PropTypes.number,
    width: PropTypes.number,
    opacity: PropTypes.number,
    textTransform: PropTypes.string,
    textDecorationLine: PropTypes.string,
    textAlign: PropTypes.string,
};

const defaultProps = {
    text: '',
    size: 10,
    color: colors.white,
    weight: 'Regular',
    left: 0,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    // width: 0,
    opacity: 1,
    textTransform: 'none',
    textDecorationLine:'none',
    textAlign: 'auto'
};

const DefaultText = ({
    text,
    color,
    size,
    weight,
    left,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    width,
    opacity,
    textTransform,
    textDecorationLine,
    textAlign
}) => {
    let fontFamily
    switch (weight) {
        case 'Bold': {
            fontFamily = fonts.spoqaBold
            break;
        }
        case 'Light': {
            fontFamily = fonts.spoqaLight
            break;
        }
        case 'Medium': {
            fontFamily = fonts.spoqaMedium
            break;
        }
        case 'Regular': {
            fontFamily = fonts.spoqaRegular
            break;
        }
        case 'Thin': {
            fontFamily = fonts.spoqaThin
            break;
        }
    
        default:
            break;
    }
    return (
        <Text
            style={{
                fontSize: size,
                lineHeight: size * 1.3,
                fontFamily,
                includeFontPadding: false,
                color: color,
                left,
                marginTop,
                marginBottom,
                marginLeft,
                marginRight,
                width,
                opacity,
                textTransform,
                textDecorationLine,
                textAlign
            }}>{text}</Text>
    )
};

DefaultText.propTypes = propTypes;
DefaultText.defaultProps = defaultProps;

export default DefaultText;
