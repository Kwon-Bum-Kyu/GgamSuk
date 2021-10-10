import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { Auth } from 'aws-amplify';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppTextInput from '../../organisms//AppTextInput';
import AppButton from '../../organisms/AppButton';
import SmallText from '../../organisms/SmallText';
import AutoLogin from '../../organisms/Autologin';
import FindPassword from '../../organisms/FindPassword';
import color from '../../../common/values/colors';
import dimen from '../../../common/values/dimensions';

import IconWrong from '../../../assets/images/svg/iconWrong';
import DefaultText from '../../atoms/texts/defaultText/DefaultText';
import realm, { getAllUsers, addUser, deleteAllUsers } from "../../../common/utils/database/Database";
import { getUsers } from '../../../common/utils/server/getServer';
import { NetWorkCheck } from '../../../common/utils/netWorkCheck';
import { netWorkToast } from '../../../common/utils/toastUtil';
// import CarList from '../CarList'
const TAG = 'Login';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            UserLogin: true,
            FindPassword: false,
            SendEmail: false,
            Autologcheck: false,
            UserWrong: false,
            User: '',
            Pass: '',
            email: '',
            changePasswordState: false
        }
    }

    componentDidMount = async () => {
        netWorkToast()
        // console.log(TAG, 'componentDidMount', 'data', data);
        // let dataUserFull = getAllUsers();
        // console.log(TAG, 'dataUserFull', dataUserFull);

    }
    goCarList = async () => {
        const { navigation } = this.props;
        // let data = await getAllUsers();
        navigation.replace('CarList');
    }

    setAutologcheck = (check) => {
        if (check == true) {
            this.setState({ Autologcheck: false })
        }
        else {
            this.setState({ Autologcheck: true })
        }
    }
    checkuser = (userid, password) => {
        if (this.state.changePasswordState) {
            this.changePassword(userid, password)
        } else {
            this.userLogin(userid, password)
        }
    }
    changePassword = async (password1, password2) => {
        // console.log('userLogin',password1.length, password2.length);
        let check = false;
        if (password1 != password2 || password1.length < 1 || password2.length < 1) {
            console.log(TAG, 'errorPassword');
            check = true
            // this.setState({UserWrong : true})
        }
        if (!check) {
            console.log(TAG, 'changePassword');
            let dataUserFull = await getAllUsers();
            realm.write(() => {
                // dataUserFull[0].ID = userid,
                dataUserFull[0].Password = password1,
                    dataUserFull[0].Autologin = false
            });
            this.setState({
                FindPassword: false,
                UserLogin: true,
                changePasswordState: false,
                User: '',
                Pass: ''
            })
        }
        this.setState({ UserWrong: check })

    }
    userLogin = async (userid, password) => {
        let userData = await getUsers(userid, password)
        console.log(userData);
        if (!await NetWorkCheck()) {
            netWorkToast()
        } else {
            if (userData[0].hasOwnProperty('message')) {
                console.log("로그인 실패");
                this.setState({ UserWrong: true })
            } else {
                await addUser(userData, password, this.state.Autologcheck);
                this.goCarList()
            }
        }



    }




    render() {
        return (

            <SafeAreaView style={styles.safeAreaContainer}>

                {
                    this.state.UserLogin == true && //초기 로그인 화면
                    <View style={styles.container}>

                        <Text style={styles.title}>
                            {this.state.changePasswordState ? '비밀번호 초기화' : 'Ai FMS'}
                        </Text>

                        <SmallText title={this.state.changePasswordState ? '비밀번호' : '이메일'} top={21} fontFamily={'Medium'} />

                        {this.state.changePasswordState ?
                            <AppTextInput
                                top={4}
                                value={this.state.User}
                                onChangeText={text => this.setState({ User: text })}

                                leftIcon="lock"
                                placeholder="*********"
                                autoCapitalize="none"
                                autoCorrect={false}
                                secureTextEntry
                                textContentType="password"
                            />
                            :

                            <AppTextInput
                                top={4}
                                value={this.state.User}
                                onChangeText={text => this.setState({ User: text })}

                                leftIcon="account"
                                placeholder="name@email.com"
                                autoCapitalize="none"
                                keyboardType="email-address"
                                textContentType="emailAddress"
                            />

                        }


                        <Text ></Text>
                        <SmallText title={this.state.changePasswordState ? '비밀번호 확인' : '비밀번호'} top={16} fontFamily={'Medium'} />


                        <AppTextInput
                            top={4}
                            value={this.state.Pass}
                            onChangeText={text => this.setState({ Pass: text })}

                            leftIcon="lock"
                            placeholder="*********"
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry
                            textContentType="password"
                        />
                        {this.state.UserWrong &&
                            <View style={{ width: '80%', marginTop: 6, flexDirection: 'row' }}>
                                <IconWrong />
                                <Text style={{ marginLeft: 12 * dimen.ratioW, lineHeight: 15 * dimen.ratioH, fontSize: 16, color: '#737373' }}>
                                    {this.state.changePasswordState ? "잘못된 비밀번호입니다." : "잘못된 ID 또는 비밀번호입니다."}

                                </Text>
                            </View>
                        }
                        {!this.state.changePasswordState &&
                            <AutoLogin
                                onPress={() => this.setAutologcheck(this.state.Autologcheck)}
                                Autologcheck={this.state.Autologcheck}
                            />

                        }



                        <AppButton
                            title={this.state.changePasswordState ? "비밀번호 초기화" : "로그인"}
                            onPress={() => this.checkuser(this.state.User, this.state.Pass)}
                            top={16} />
                        <FindPassword title={this.state.changePasswordState ? "로그인으로 돌아가기" : "비밀번호 찾기"}
                            onPress={() => this.state.changePasswordState ? this.setState({ SendEmail: false, UserLogin: true }) : this.setState({ FindPassword: true, UserLogin: false })}
                            top={16} />

                        {!this.state.changePasswordState &&
                            <DefaultText
                                marginTop={50}
                                color={color.gray600}
                                size={15}
                                text={'mtov.net'}
                            />
                        }

                    </View>
                }


                {
                    this.state.FindPassword == true && //비밀번호 찾기 화면
                    <View style={styles.container}>
                        <Text style={[styles.title]}>
                            비밀번호 찾기
                        </Text>

                        {/* <View style={{ width: '80%'} }>
                            <Text style={[styles.Text, { marginTop: 16, alignItems: 'flex-start'}] }>이메일</Text>
                        </View> */}
                        <SmallText title='이메일' top={16} />


                        <AppTextInput
                            top={4}
                            // value={username}
                            onChangeText={text => this.setState({ email: text })}
                            leftIcon="account"
                            placeholder="name@email.com"
                            autoCapitalize="none"
                            keyboardType="email-address"
                            textContentType="emailAddress"
                        />



                        <AppButton title="비밀번호 초기화 메일 전송" onPress={() => this.setState({ SendEmail: true, FindPassword: false })} top={10} />
                        <FindPassword title="로그인으로 돌아가기" onPress={() => this.setState({ FindPassword: false, UserLogin: true })} top={16} />

                    </View>
                }


                {
                    this.state.SendEmail == true && //이메일 전송 화면
                    <View style={styles.container}>
                        <Text style={[styles.title]}>
                            메일 전송 완료
                        </Text>
                        <View style={{ width: '80%', paddingLeft: 5, marginTop: 16 }}>
                            <Text style={styles.Text}>{this.state.email}에 비밀번호 초기화 메일을 보냈습니다. 도착한 메일을 확인하여 비밀번호를 초기화해주세요.</Text>
                        </View>
                        <AppButton title="로그인으로 돌아가기" onPress={() => this.setState({ SendEmail: false, UserLogin: true })} top={16} back={true} />


                    </View>
                }


            </SafeAreaView>
        )
    }

}
export default Login


const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: 'white',

    },
    container: {
        flex: 1,
        // backgroundColor:'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        // marginTop:dimen.HEIGHT/3,
        fontSize: 30,
        color: color.gray600,
        fontWeight: '500',
        fontWeight: 'bold'
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
        color: color.gray600,
        fontSize: 15,
        fontWeight: '600',

        // marginVertical: 5,

    },

    image: {
        maxWidth: '50%',

        height: 50,

    },
});
