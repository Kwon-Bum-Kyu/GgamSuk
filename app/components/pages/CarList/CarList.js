

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Alert, FlatList } from 'react-native';
// import { Auth } from 'aws-amplify';
import Modal from 'react-native-modal'
import { SafeAreaView } from 'react-native-safe-area-context';
// import Home from '../Home'
import AppButton from '../../organisms/AppButton';
import Logout from '../../organisms/Logout';
import CarNumberInput from '../../organisms/CarNumberInput';
import QRCodeScanner from 'react-native-qrcode-scanner';
import dimen from '../../../common/values/dimensions'
import fonts from '../../../common/values/fonts';
import IconExit from '../../../assets/images/svg/iconExit';
import IconWrong from '../../../assets/images/svg/iconWrong';
import IconRefreshBtn from '../../../assets/images/svg/iconRefreshBtn'

import { deleteAllUsers, getAllUsers } from "../../../common/utils/database/Database";
import colors from '../../../common/values/colors';
import UIActivityIndicator from '../../../common/utils/indiCator/indicatorDesign';
import FindPassword from '../../organisms/FindPassword';
import { NetWorkCheck } from '../../../common/utils/netWorkCheck';
import { blueToothToast, netWorkToast } from '../../../common/utils/toastUtil';
import { endBluetoothConnectCheck, startBluetoothConnectCheck, startCarScan } from '../../../common/utils/blePlxManager';
import DefaultText from '../../atoms/texts/defaultText/DefaultText';
const TAG = "CarList"
class CarList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,

            check: false,
            carNumWrong: false,
            scanState: 'scan',
            name: '',
            email: '',
            uuid: '',
            last_ip: '',
            accessToken: '',
            carNum: '',
            carData: [],
        }
        this.scanner = null;

    }
    goCarInfo = async(nonSpaceString) => {
        const { navigation } = this.props;
        let data = {
            carNum: nonSpaceString,
            carName: '디피코 포트로',
            userName: this.state.name,
            uuid: this.state.uuid,
            last_ip: this.state.last_ip,
            accessToken: this.state.accessToken,
        }

        await endBluetoothConnectCheck(TAG);
        navigation.navigate('CarInfo', data);
    }
    componentDidMount = async () => {
        netWorkToast();
        this.checkCarAndBluetooth();
        let data = await getAllUsers();
        if (data.length > 0) {
            this.setState({
                name: data[0].name,
                email: data[0].email,
                uuid: data[0].uuid,
                last_ip: data[0].last_ip,
                accessToken: data[0].accessToken,
                carNum: data[0].carNum,
            })
        } else {
            Alert.alert(
                "로그인 오류",
                "로그인 오류 다시 로그인 해주세요.",
                [
                    { text: "OK", onPress: () => this.goLogin() }
                ]
            );
        }
        this.scanRestart();

    }
    scanRestart = () => {
        this.setState({ scanState: 'scan' })
        setTimeout(async() => {
            this.setState({
                scanState: 'notData',
            })
            await endBluetoothConnectCheck(TAG);
        }, 3000);
    }
    checkCarAndBluetooth = async () => {
        await startBluetoothConnectCheck(async (state) => {
            if (state === 'PoweredOn') {
                let phoneNum = await startCarScan();
                console.log('phoneNum',phoneNum);
                this.setState({ scanState: 'scan' })
            } else if (state === 'PoweredOff') {
                blueToothToast(false);
                await endBluetoothConnectCheck(TAG);
                this.setState({ scanState: 'scanExit' })
            }
        })
    }
    componentWillUnmount = async () => {
        console.log('componentWillUnmount');
        await endBluetoothConnectCheck(TAG)
    }
    setCarNum = (carNum) => {
        this.setState({ carNum: carNum })
    }
    checkCarNum = (carNum) => {

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
            this.setState({ check: true, carNumWrong: false, open: false })
            this.goCarInfo(nonSpaceString)
            // Keyboard.dismiss()
            // await setCarNumberDB(carNum)
            // setTimeout(() => {
            //     this.goToHome(carNum);
            // }, 200)
        } else {
            console.log('양식 틀림');
            this.setState({ check: false, carNumWrong: true })
            // Keyboard.dismiss()
            // this.setState({ denyBool: true })
        }

    }

    goLogin = async () => {
        console.log('logout')
        await deleteAllUsers();
        await endBluetoothConnectCheck(TAG)
        const { navigation } = this.props;
        navigation.replace('Login');


    }
    // renderCarList = async () => {
    //     if (this.state.scanState == 'notData') {
    //         return (
    //             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
    //                 <Text style={{ textAlign: 'center', fontSize: 18, color: colors.gray700, lineHeight: 18 * 1.35, fontFamily: fonts.spoqaRegular }}>{"스캔된 차량 없음 \n수동으로 연결해주세요."}</Text>
    //             </View>
    //         )
    //     } else {
    //         return (

    //         )

    //     }



    // }

    render() {
        let name;
        if (this.state.name.length > 10) {
            let split = this.state.name.split('@');
            name = split[0]
        } else {
            name = this.state.name
        }
        return (
            <SafeAreaView style={styles.safeAreaContainer}>
                <View style={styles.container}>
                    <View style={styles.headers}>
                        <Text style={[styles.title, { fontSize: 24 }]}>{name + " 님" + "\n반갑습니다"}</Text>{/*this.state.name*/}
                        <Logout title="로그아웃" top={16} onPress={() => this.goLogin()} />
                    </View>
                    <View style={{ borderBottomColor: colors.gray400, borderBottomWidth: 1, width: dimen.WIDTH - 60, margin: 20 }}></View>
                    <View style={{ width: dimen.WIDTH - 60, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={[styles.title, { fontSize: 18, marginRight: 13 }]}>근처 차량</Text>
                            <TouchableOpacity
                                style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}
                                activeOpacity={1}
                                onPress={() => this.state.scanState == 'notData' ? this.scanRestart() : console.log('scanning')}
                            >
                                {this.state.scanState == 'notData' ?
                                    <IconRefreshBtn />
                                    :
                                    <UIActivityIndicator color={colors.gray600} size={20 * dimen.ratioW} count={8} />
                                }
                                <Text style={[styles.title, { fontSize: 14, marginLeft: 3, fontFamily: fonts.spoqaRegular }]}>{this.state.scanState == 'notData' ? "재검색" : "스캔 중"}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1 }}>
                            <FindPassword
                                title={"수동으로 연결"}
                                onPress={() => this.setState({ open: true })}
                                frompage={TAG}
                            />
                        </View>
                    </View>
                    {this.state.carData.length < 1 || this.state.scanState == 'notData' ?
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                            <Text style={{ textAlign: 'center', fontSize: 18, color: colors.gray700, lineHeight: 18 * 1.35, fontFamily: fonts.spoqaRegular }}>
                                {this.state.scanState == 'notData' ? "스캔된 차량 없음 \n수동으로 연결해주세요." : "근처 차량 블루투스 스캔 중"}
                            </Text>
                        </View>
                        :
                        <FlatList
                            style={{
                                width: dimen.WIDTH - 60,
                                marginTop: 7 * dimen.ratioH,
                            }
                            }
                            data={this.state.carData}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) =>
                                <TouchableOpacity style={styles.carView}>
                                    <DefaultText
                                        color={colors.gray700}
                                        size={18}
                                        weight={'Bold'}
                                        text={item.carName}
                                    />
                                    <View style={{
                                        width: 86 * dimen.ratioW,
                                        height: 28 * dimen.ratioH,
                                        borderWidth: 1,
                                        borderColor: colors.gray700,
                                        borderRadius: 4 * dimen.ratioW,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <DefaultText
                                            color={colors.gray700}
                                            size={14}
                                            weight={'Medium'}
                                            text={item.carNum}
                                        />
                                    </View>


                                </TouchableOpacity>
                            }
                        />
                    }
                    {/* <Button title="다른 사용자로 로그인" color="gray"  /> */}




                    <Modal
                        // offset={50}
                        // open={this.state.open}
                        // modalDidOpen={() => console.log('modal did open')}
                        // modalDidClose={() => this.setState({ open: false })}
                        isVisible={this.state.open}
                        useNativeDriver={true}
                        hideModalContentWhileAnimating={true}
                        // animationType="none"
                        transparent={true}
                        onBackdropPress={() => this.setState({ open: false })}
                        style={{
                            alignItems: 'center',
                            // justifyContent: 'flex-end',
                            flex: 1,
                            margin: 0
                        }}





                        //     backgroundColor: '#F5F5F5'
                        // }}
                        // animationIn={'fadeInUp'}
                        // animationOut={'fadeOutDown'}
                        animationInTiming={300}
                        animationOutTiming={300}
                    >
                        <KeyboardAvoidingView
                            style={{
                                marginTop: dimen.HEIGHT / 3,
                                flex: 1,
                                justifyContent: 'center'
                            }}
                            behavior='padding'
                            pointerEvents='box-none'
                            enabled={false}
                        >
                            <View style={{
                                borderTopLeftRadius: 24,
                                borderTopRightRadius: 24,
                                width: dimen.WIDTH, height: dimen.HEIGHT * 3 / 4,
                                alignContent: 'center',
                                backgroundColor: colors.white,
                            }}>
                                <TouchableOpacity
                                    style={{ position: 'absolute', right: 20 * 1.3, top: 20 * 1.3, zIndex: 1 }}
                                    activeOpacity={1}
                                    onPress={() => this.setState({ open: false })}>
                                    <IconExit />
                                </TouchableOpacity>
                                <Text style={[styles.Text, { marginTop: 56, fontSize: 24, fontWeight: 'bold' }]}>차량 수동 연결</Text>
                                <View style={{ width: dimen.WIDTH, justifyContent: 'center', alignItems: 'center', marginTop: 42 }}>
                                    <CarNumberInput
                                        // value={username}
                                        // onChangeText={text => setUsername(text)}
                                        // leftIcon="account"
                                        placeholder="00가 0000"
                                        // function={(text) => asdflkm}
                                        autoCapitalize="none"
                                        // placeholder="12가 1234"
                                        // keyboardType="email-address"
                                        // textContentType="emailAddress"
                                        defaultValue={this.state.carNum}
                                        onChangeText={(text) => this.setCarNum(text)}
                                        onSubmitEditing={async () => !await NetWorkCheck() ? netWorkToast() : this.checkCarNum(this.state.carNum)}


                                    />
                                    {this.state.carNumWrong &&
                                        <View style={{ width: dimen.WIDTH, marginTop: 6, flexDirection: 'row', justifyContent:'center',  alignItems:'center' }}>
                                            <IconWrong />
                                            <Text style={{ marginLeft: 12 * dimen.ratioW, lineHeight: 17 * dimen.ratioH, fontSize: 16, color: '#737373' }}>차량 연결 실패 - 번호를 확인해주세요</Text>
                                        </View>
                                    }
                                    <TouchableOpacity
                                        style={{
                                            marginTop: 23,
                                            width: dimen.WIDTH / 1.5,
                                            padding: 10,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundColor: colors.gray600,
                                            borderRadius: 4

                                        }}
                                        onPress={async () => !await NetWorkCheck() ? netWorkToast() : this.checkCarNum(this.state.carNum)}
                                    >
                                        <DefaultText
                                            text={"차량번호 입력"}
                                            weight={'Medium'}
                                            size={15}
                                            color={colors.white}
                                        />
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </KeyboardAvoidingView>


                    </Modal>



                </View>
            </SafeAreaView>
        )
    }

}




const styles = StyleSheet.create({
    headers: {
        flexDirection: 'row',
        width: dimen.WIDTH - 60,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 35,
    },
    safeAreaContainer: {
        flex: 1,
        // position: 'relative',
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        position: 'relative',
        // backgroundColor:'red',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    title: {

        color: colors.gray700,
        fontFamily: fonts.spoqaBold,
        textAlign: 'left',

    },
    footerButtonContainer: {
        marginVertical: 15,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    Text: {
        // backgroundColor:'black',

        textAlign: 'center',
        color: colors.gray700,
        fontSize: 24,
        fontFamily: fonts.spoqaBold,
        marginVertical: 5,

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

    },
    carView: {
        flex: 1,
        marginTop: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: colors.gray500,
        borderRadius: 8,
        padding: 24
    }
});
export default CarList



