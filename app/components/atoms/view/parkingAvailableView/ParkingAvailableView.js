
import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import colors from '../../../../common/values/colors';
import dimen from '../../../../common/values/dimensions';
import DefaultText from '../../../atoms/texts/defaultText';

const propTypes = {
    screenMode: PropTypes.string,
    totalWidth: PropTypes.number,
    blueWidth: PropTypes.number,
    grayWidth: PropTypes.number,
    carEnableNumber: PropTypes.number,
    carFullNumbe: PropTypes.number,
    fromPage: PropTypes.string,
};

const defaultProps = {
    screenMode: 'dark',
    totalWidth: 0,
    blueWidth: 0,
    grayWidth: 0,
    carEnableNumber: 0,
    carFullNumbe: 0,
    fromPage: 'Home'
};

const ParkingAvailableView = ({ screenMode, totalWidth, blueWidth, grayWidth, carEnableNumber, carFullNumber, fromPage }) => {
    // console.log('page', fromPage);
    let pointColor = '#000000'
    let pointText = '여유'
    let percent = carEnableNumber / carFullNumber 
    if (fromPage == 'Home') {
        if (percent < 0.03) {
            pointColor = colors.red
            pointText = '만차'
        } else if (percent < 0.3) {
            pointColor = colors.yellow
            pointText = '혼잡'
        } else {
            pointColor = colors.green
            pointText = '여유'
        }
    } else {
        pointText = '주차 가능 대수'
    }
    // console.log('carFullNumber',carFullNumber);
    return (
        <View style={{ width: totalWidth }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <DefaultText
                    text={carEnableNumber.toString()}
                    // text={'0000'}
                    size={12 * dimen.ratioH}
                    weight={'Bold'}
                    color={colors.sub}
                />
                <DefaultText
                    text={carFullNumber.toString()}
                    // text={'0000'}
                    size={12 * dimen.ratioH}
                    weight={'Bold'}
                    color={screenMode == 'light' ? colors.gray200 : colors.gray800}
                />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ width: grayWidth + blueWidth, height: 4 * dimen.ratioH, backgroundColor: screenMode == 'light' ? colors.gray200 : colors.gray800, borderRadius: 16 }} />
                <View style={{ position: 'absolute', width: blueWidth, height: 4 * dimen.ratioH, backgroundColor: colors.sub, borderRadius: 16 }} />

                {/* <View style={{ width: blueWidth, height: 4 * dimen.ratioH, backgroundColor: screenMode == 'dark' ? colors.highLight : colors.sub, borderRadius: 16 }} />
                <View style={{ width: grayWidth, height: 4 * dimen.ratioH, backgroundColor: screenMode == 'dark' ? colors.gray500 : colors.gray200, borderRadius: 16 }} /> */}
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    marginTop: 4
                }}>
                {fromPage == 'Home' &&
                    <View
                        style={{
                            // position: 'absolute',
                            width: 8,
                            height: 8,
                            backgroundColor: pointColor,
                            // top: 8 * dimen.ratioW,
                            // left: 56 * dimen.ratioW,
                            borderRadius: 4,
                            marginRight: 5
                        }}
                    />
                }
                <DefaultText
                    text={pointText}
                    size={10 * dimen.ratioH}
                    weight={'Regular'}
                    color={screenMode == 'dark' ? colors.white : colors.black}
                />

            </View>
        </View>
    )
};

ParkingAvailableView.propTypes = propTypes;
ParkingAvailableView.defaultProps = defaultProps;

export default ParkingAvailableView;
