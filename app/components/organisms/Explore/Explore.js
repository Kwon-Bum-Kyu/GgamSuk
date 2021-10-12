
import React from 'react';
import {View } from 'react-native';
import PropTypes from 'prop-types';

import colors from '../../../common/values/colors';
import fonts from '../../../common/values/fonts';
import DefaultText from '../../atoms/texts/defaultText';
import Styles from '../Styles/Styles'

const propTypes = {
  
};

const defaultProps = {
};


const Explore = ({
}) => {
    return (
        <View style={Styles.main}>
            <View style={Styles.sub}>
                <DefaultText
                    text={"친한 친구"}
                    size={18}
                    color={colors.black}
                />
                <DefaultText
                    text={"1마리"}
                    size={24}
                    color={colors.orange}
                />
            </View>
            <View style={Styles.sub}>
                <DefaultText
                    text={"만나본 친구"}
                    size={18}
                    color={colors.black}
                />
                <DefaultText
                    text={"1마리"}
                    size={24}
                    color={colors.blue}
                />
            </View>
            <View style={Styles.sub}>
                <DefaultText
                    text={"다른 친구들"}
                    size={18}
                    color={colors.black}
                />
                <DefaultText
                    text={"2마리"}
                    size={24}
                    color={colors.gray300}
                />
            </View>
            
        </View>
       
    )
};


Explore.propTypes = propTypes;
Explore.defaultProps = defaultProps;

export default Explore;



