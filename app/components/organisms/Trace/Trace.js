
import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import colors from '../../../common/values/colors';
import fonts from '../../../common/values/fonts';
import DefaultText from '../../atoms/texts/defaultText';
import Styles from '../Styles/Styles'

const propTypes = {
  
};

const defaultProps = {
};


const TraceView = ({
}) => {
    return (
        <View style={Styles.main}>
            <View style={Styles.sub}>
                <DefaultText
                    text={"산책 거리"}
                    size={18}
                    color={colors.black}
                />
                <DefaultText
                    text={"4.08km"}
                    size={24}
                    color={colors.green}
                />
            </View>
            <View style={Styles.sub}>
                <DefaultText
                    text={"산책 시간"}
                    size={18}
                    color={colors.black}
                />
                <DefaultText
                    text={"28:41"}
                    size={24}
                    color={colors.black}
                />
            </View>
            
        </View>
       
    )
};


TraceView.propTypes = propTypes;
TraceView.defaultProps = defaultProps;

export default TraceView;



