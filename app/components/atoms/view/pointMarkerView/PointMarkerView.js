
import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import colors from '../../../../common/values/colors';
import DefaultText from '../../../atoms/texts/defaultText';

const propTypes = {
    screenMode: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    left: PropTypes.number,
    top: PropTypes.number,
    borderWidth: PropTypes.number,
    image: PropTypes.object,
    fontSize: PropTypes.number,
    insideSpace: PropTypes.number,
    textContent: PropTypes.string,
};

const defaultProps = {
    screenMode: 'light',
    width: 0,
    height: 0,
    left: 0,
    top: 0,
    borderWidth: 0,
    image: null,
    fontSize: 0,
    insideSpace: 0,
    textContent: '',
};

const PointMarkerView = ({ screenMode, width, height, left, top, borderWidth, image, fontSize, insideSpace, textContent }) => {

    return (
        <View
            style={{
                flexDirection: 'row',
                width: width,
                height: height,
                position: 'absolute',
                backgroundColor: screenMode == 'light' ? colors.black : colors.white,
                left: left,
                top: top,
                borderTopLeftRadius: height / 2,
                borderTopRightRadius: height / 2,
                borderBottomRightRadius: height / 2,
                borderColor: screenMode == 'light' ? colors.gray700 : colors.gray300,
                borderWidth: borderWidth,
                justifyContent: 'center', alignItems: 'center',
            }}>
            {image}
            {/* <Text style={{ fontSize: fontSize, color: colors.white, marginLeft: insideSpace }}>{textContent}</Text> */}
            <DefaultText
                text={textContent}
                size={fontSize}
                color={screenMode == 'light' ? colors.white : colors.black}
                marginLeft={insideSpace}
                weight={'Medium'}
            />
        </View>
    )
};

PointMarkerView.propTypes = propTypes;
PointMarkerView.defaultProps = defaultProps;

export default PointMarkerView;
