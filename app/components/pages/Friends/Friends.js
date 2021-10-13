

import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { Auth } from 'aws-amplify';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../../common/values/colors';
import dimen from '../../../common/values/dimensions';
import DefaultText from '../../atoms/texts/defaultText';



const TAG = 'Friends'

class Friends extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friendsData: [
                {
                    type: 'Header',
                    text: 'Besties'
                },
                {
                    type: 'Besties',
                    name: '몽치(말티즈)',
                    age: '10살',
                    size: 'S'
                },
                {
                    type: 'Besties',
                    name: '뽀미(포메)',
                    age: '13살',
                    size: 'S'
                },
                {
                    type: 'Besties',
                    name: '호두(웰시)',
                    age: '3살',
                    size: 'M'
                },
                {
                    type: 'Header',
                    text: 'Recent'
                },
                {
                    type: 'Recent',
                    name: '두리(리트)',
                    age: '1살',
                    size: 'XL'
                },
                {
                    type: 'Recent',
                    name: '동규(비숑)',
                    age: '0살',
                    size: 'XS'
                },
                {
                    type: 'Recent',
                    name: '보리(웰시)',
                    age: '1살',
                    size: 'M'
                },
                {
                    type: 'Recent',
                    name: '코코(푸들)',
                    age: '2살',
                    size: 'M'
                },


            ],
            // views: this.props.route.name,
        }



    }




    componentDidMount = async () => {
        // console.log(this.props.route) 
    }



    render() {

        // const disp = this.getDisp();
        // console.log(this.state.friendsData);
        return (
            <SafeAreaView style={styles.safeAreaContainer}>
                <View style={{ width: dimen.WIDTH, padding: 10 }}>
                    <DefaultText
                        marginLeft={5}
                        text={"Profile"}
                        color={colors.black}
                        size={24}
                    />
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginLeft: 10 }}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Image source={require('../../../assets/images/png/Profile.png')} style={{ width: 50, height: 50 }} />
                            <DefaultText
                                marginLeft={10}
                                text={"깜숙(진도)"}
                                color={colors.black}
                                size={20}
                            />
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent:'space-between', alignItems: 'center', paddingLeft:30, paddingRight:30}}>
                            <DefaultText
                                // textAlign={'right'}
                                // marginLeft={30}
                                text={"1살"}
                                color={colors.black}
                                size={20}
                            />
                            <DefaultText
                                // marginRight={30}
                                text={"L"}
                                color={colors.black}
                                size={20}
                            />
                        </View>
                        {/* <Profile/> */}
                    </TouchableOpacity>

                </View>
                <FlatList
                    style={{ flex: 1, padding: 10 }}
                    data={this.state.friendsData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        if (item.type == 'Header') {
                            return (
                                <View style={{ flex: 1, flexDirection:'row', alignItems: 'center' }}>
                                    {item.text == 'Besties' ?
                                        <Image source={require('../../../assets/images/png/Star.png')} style={{ width: 50, height: 50 }} />
                                        :
                                        <Image source={require('../../../assets/images/png/Recent.png')} style={{ width: 50, height: 50 }} />
                                    }
                                    <DefaultText
                                        color={colors.gray700}
                                        size={18}
                                        // weight={'Bold'}
                                        text={item.text}
                                    />
                                </View>
                            )
                        } else {
                            return (
                                <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop:10, marginLeft: 10 }}>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <Image source={require('../../../assets/images/png/Profile.png')} style={{ width: 40, height: 40 }} />
                                        <DefaultText
                                            marginLeft={10}
                                            text={item.name}
                                            color={colors.black}
                                            size={20}
                                        />
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft:30, paddingRight:30 }}>
                                        <DefaultText
                                            // textAlign={'right'}
                                            // marginLeft={30}
                                            text={item.age}
                                            color={colors.black}
                                            size={20}
                                        />
                                        <DefaultText
                                            // textAlign={'right'}
                                            // marginLeft={50}
                                            text={item.size}
                                            color={colors.black}
                                            size={20}
                                        />
                                        {/* <Text style={{textAlign:''}}></Text> */}
                                    </View>
                                </TouchableOpacity>
                            )
                        }
                    }
                    }
                />
            </SafeAreaView>
        )
    }

}




const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        // position: 'relative',
        backgroundColor: 'white',
    },


});
export default Friends;



