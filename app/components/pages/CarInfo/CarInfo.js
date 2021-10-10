
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TouchableHighlight, Keyboard, BackHandler } from 'react-native';
// import { Auth } from 'aws-amplify';
import Modal from 'react-native-modal'
import { SafeAreaView } from 'react-native-safe-area-context';
// import Home from '../Home'
import AppButton from '../../organisms/AppButton';
import Logout from '../../organisms/Logout';
import CarNumberInput from '../../organisms/CarNumberInput';
import CarNumber from '../../organisms/CarNumber';
import Potro from '../../../assets/images/svg/potro'
import colors from '../../../common/values/colors';

import { startConTraction } from '../../../common/utils/server/getServer';
import { contractionToast, netWorkToast } from '../../../common/utils/toastUtil';
import { NetWorkCheck } from '../../../common/utils/netWorkCheck';


const vehicle_uuid = "4aa8a54c-1d00-11ec-9e59-4616e5ba6420"
const vehicle_device_uuid = "76801d88-1d01-11ec-9e59-4616e5ba6420"
const TAG = 'CarInfo';
class CarInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            carNum: '12가 1234'
        }
        this.scanner = null;
        

    }
    

    componentDidMount = () => {
        netWorkToast();
        // const scanner = React.useRef('');
       
        // console.log(TAG, 'componentDidMount', this.props.route.params);
       
    }
    goHome = async() =>{
        if(await NetWorkCheck()){
            const { carName, carNum, userName, uuid, last_ip, accessToken } = this.props.route.params;
            const vehicle_contraction_uuid = await startConTraction(vehicle_uuid, uuid, accessToken);
            console.log(TAG,'vehicle_contraction_uuid',vehicle_contraction_uuid);
            if(vehicle_contraction_uuid != null){
                const {navigation} = this.props
                let data ={
                    carName : carName,
                    carNum : carNum,
                    userName : userName,
                    uuid : uuid,
                    last_ip : last_ip,
                    vehicle_contraction_uuid : vehicle_contraction_uuid,
                    vehicle_uuid : vehicle_uuid,
                    vehicle_device_uuid: vehicle_device_uuid,
                    accessToken : accessToken,
                }
                
                navigation.navigate('Home', data);
            }else {
                contractionToast()
            }
        }else {
            netWorkToast();
        }
       
       
    }
    checkCarNum = (carNum) => {
        this.setState({ carNum: carNum })
        let nonSpaceString = carNum.replace(/ /gi, ''); // 중간에 띄어쓰기를 한 경우 해당 띄어쓰기 제거
        let correctCarNum = true;

        if (nonSpaceString.length >= 7 && nonSpaceString.length <= 8) {  // 7자리 이상이어야 됨.
            for (let i = nonSpaceString.length; i > 0; i--) { // 뒤에서부터
                if (i == nonSpaceString.length - 4) {  // 뒤에서 5번째 자리의 경우
                    if (!isNaN(nonSpaceString.substring(i - 1, i))) { // 숫자가 아닌 문자여야 됨 -> isNaN이 true 여야 문자
                        correctCarNum = false;
                    }
                } else {
                    if (isNaN(nonSpaceString.substring(i - 1, i))) { // 문자가 아닌 숫자여야 됨 -> isNaN이 false 여야 숫자
                        correctCarNum = false;
                    }
                }
            }
        } else { // 6자리 이하인 경우는 없으므로 이 경우 false
            correctCarNum = false;
        }
        if (correctCarNum == true) {
            console.log('양식 맞음');
        } else {
            console.log('양식 틀림');
        }

    }
    render() {
        const { carName, carNum } = this.props.route.params
        console.log('propsInfo', carName, carNum);
        return (
            <SafeAreaView style={styles.safeAreaContainer}>
                <View style={styles.container}>
                        <Potro/>
                    <View style={{ marginTop: 52, alignItems:'center' }}>
                        <Text style={[styles.Text, {fontSize:24}]}>{carName}</Text>
                        <CarNumber title={carNum} />
                        <Logout title="연결 해제" top={26} onPress={() => this.props.navigation.goBack()}/>
                    </View>
                    

                    {/* <Button title="다른 사용자로 로그인" color="gray"  /> */}
                    
                    <AppButton title="운행 시작" top ={82} onPress={() => this.goHome()}/>

                </View>
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
    container: {
        flex: 1,
        position: 'relative',
        // backgroundColor:'red',
        justifyContent:'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        color: '#202020',
        fontWeight: '500',
        marginVertical: 30
    },
    footerButtonContainer: {
        marginVertical: 15,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    forgotPasswordButtonText: {
        color: 'tomato',
        fontSize: 18,
        fontWeight: '600'
    },
    Text: {
        // backgroundColor:'black',

        textAlign: 'center',
        color: colors.gray700,
        fontSize: 15,
        fontWeight: 'bold',
        // marginVertical: 5,
        // lineHeight: 15 * 1.5,

    },
    bar: {
        marginVertical: 100,
        color: 'gray',
        fontSize: 15,
        fontWeight: '300'
    },
    image: {
        maxWidth: '50%',

        height: 50,

    },
    modelview: {
        // width: '100%',
        // height: '50%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        // bottom:0,
        // marginTop: 0,
        // height: 10,

        backgroundColor: 'rgba(0, 0, 0, 0.56)',

    }
});
export default CarInfo

