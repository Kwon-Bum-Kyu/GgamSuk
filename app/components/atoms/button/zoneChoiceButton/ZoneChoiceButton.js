
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import colors from '../../../../common/values/colors';
import dimen from '../../../../common/values/dimensions';
import fonts from '../../../../common/values/fonts';

const propTypes = {
    screenMode: PropTypes.string,
    customMarginLeft: PropTypes.number,
    customMarginRight: PropTypes.number,
    fromPage: PropTypes.string,
    carEnableNumber: PropTypes.object,

};

const defaultProps = {
    screenMode: 'dark',
    customMarginLeft: 0,
    customMarginRight: 0,
   
    fromPage: 'ParkingLotView',
    carEnableNumber:  {"A": {"all": 440, "free": 420, "in": 19, "none": 1}, "B": {"all": 264, "free": 256, "in": 7, "none": 1}, "C": {"all": 390, "free": 212, "in": 178, "none": 0}, "D": {"all": 474, "free": 466, "in": 8, "none": 0}, "E": {"all": 334, "free": 280, "in": 49, "none": 5}},
};

class ZoneChoiceButton extends React.Component {
    render() {
        const { screenMode, customMarginLeft, customMarginRight, buttonFunc, item, index, focusChoiced, carEnableNumber, fromPage } = this.props;
        // console.log('Object.values(item)[0].displayName',Object.values(item)[0].displayName.length);
        let buttonColor;
        let textColor;
        let borderColor;
        if (screenMode == 'dark') {
            buttonColor = focusChoiced ? colors.white : colors.gray800
            textColor = focusChoiced ? colors.black : colors.white
            borderColor =focusChoiced  ? colors.white : colors.gray700
        } else {
            buttonColor = focusChoiced ? colors.black : colors.gray200
            textColor = focusChoiced ? colors.white : colors.gray600
            borderColor = focusChoiced ? colors.black : colors.gray300
        }
        let pointColor = '#000000'
        let percent = carEnableNumber.free / carEnableNumber.all
        if (percent < 0.03) {
            pointColor = colors.red
        } else if (percent < 0.3) {
            pointColor = colors.yellow
        } else {
            pointColor = colors.green
        }
        // console.log('carEnableNumber',carEnableNumber);
        return (
            <TouchableOpacity
                style={{
                    height: fromPage == 'ParkingLotView' ? 68 : 44,
                    width:Object.values(item)[0].displayName.length > 4 ? 100 : 70 ,
                    paddingLeft: 12,
                    paddingRight: 25,
                    paddingVertical: 12,
                    borderRadius: 12,
                    backgroundColor: buttonColor,
                    justifyContent: 'space-between',
                    marginTop : fromPage == 'ParkingLotView' ? 0 : 19,
                    marginLeft: customMarginLeft * dimen.ratioW,
                    marginRight: customMarginRight * dimen.ratioW,
                    borderWidth: 1,
                    borderColor: borderColor,
                }}
                onPress={() => buttonFunc()}
            >
                <View style={{ flex: 1, justifyContent: 'space-between' }}>
                    <Text style={{
                        color: textColor,
                        fontSize: 16,
                        lineHeight: 20,
                        fontFamily: fonts.spoqaBold,
                        includeFontPadding: false,
                    }}>{Object.values(item)[0].displayName}</Text>
                    {fromPage == 'ParkingLotView' && 
                    <Text style={{
                        color: colors.sub,
                        fontSize: 16,
                        lineHeight: 20,
                        fontFamily: fonts.spoqaBold,
                        includeFontPadding: false,
                    }}>{carEnableNumber.free}</Text>
                    }
                </View>

                <View
                    style={{
                        position: 'absolute',
                        width: 8,
                        height: 8,
                        backgroundColor: pointColor,
                        top: 12,
                        right: 12,
                        borderRadius: 4 * dimen.ratioW
                    }}
                />
            </TouchableOpacity>
        );
    }
}

ZoneChoiceButton.propTypes = propTypes;
ZoneChoiceButton.defaultProps = defaultProps;

export default ZoneChoiceButton;
