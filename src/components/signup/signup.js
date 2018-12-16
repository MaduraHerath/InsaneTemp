import React from 'react';
import {Dimensions, StatusBar, StyleSheet, Text, View} from 'react-native';


import LinearGradient from 'react-native-linear-gradient';
import InsInputText from "../../common/InsInputText";
import InsImage from "../../common/InsImage";
import InsButton from "../../common/InsButton";
import SocialButtons from "../SocialButtons";
import OfflineNotice from "../../common/OfflineNotice";
import {connect} from "react-redux";

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

class Signup extends React.Component {

    constructor() {
        super();
        this.state = {
            input: '',
            changeColor: 0
        }
    }

    componentDidMount() {
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = () => {

        this.props.getUserToken().then(() => {
            this.props.navigation.navigate(this.props.token.token !== null ? 'App' : 'Auth');
        })
            .catch(error => {
                this.setState({ error })
            })

    };

    render() {
        return (<View>
                <StatusBar
                    backgroundColor="#00D2FF"
                    barStyle="light-content"
                />
                <LinearGradient style={styles.header}
                                colors={["#315AFF", "#00D2FF"]}
                                start={{x: 0.0, y: 0.8}} end={{x: 1.0, y: 0.2}}>
                    <OfflineNotice/>
                    <View style={{width: width * 1, height: height * 1.3}}>
                        <View>
                            <InsImage resizeMode={'center'}/>
                        </View>
                        <View>
                            <Text style={styles.welcome}>
                                Buckmanity
                            </Text>
                        </View>
                        <InsInputText secureTextEntry={false}
                                      textContentType={'username'}
                                      placeholder={"User Name"}
                                      borderRadius={24}
                                      isleftIcon={false}
                                      iconPlaceholder={"user"}
                                      backgroundColor={"rgba(255, 255, 255, 0.25)"}
                                      placeholderTextColor='#FAFAFA'>

                        </InsInputText>
                        <InsInputText secureTextEntry={false}
                                      textContentType={'username'}
                                      placeholder={"First Name"}
                                      borderRadius={24}
                                      isleftIcon={false}
                                      iconPlaceholder={"user"}
                                      backgroundColor={"rgba(255, 255, 255, 0.25)"}
                                      placeholderTextColor='#FAFAFA'>

                        </InsInputText>
                        <InsInputText secureTextEntry={false}
                                      textContentType={'username'}
                                      placeholder={"Last Name"}
                                      borderRadius={24}
                                      isleftIcon={false}
                                      iconPlaceholder={"user"}
                                      backgroundColor={"rgba(255, 255, 255, 0.25)"}
                                      placeholderTextColor='#FAFAFA'>

                        </InsInputText>
                        <InsInputText secureTextEntry={true}
                                      textContentType={'password'}
                                      placeholder={"Password"}
                                      borderRadius={24}
                                      isleftIcon={false}
                                      iconPlaceholder={"fingerprint"}
                                      backgroundColor={"rgba(255, 255, 255, 0.25)"}
                                      placeholderTextColor='#FAFAFA'>
                        </InsInputText>
                        <InsInputText secureTextEntry={true}
                                      textContentType={'password'}
                                      placeholder={"Re-Password"}
                                      borderRadius={24}
                                      isleftIcon={false}
                                      iconPlaceholder={"fingerprint"}
                                      backgroundColor={"rgba(255, 255, 255, 0.25)"}
                                      placeholderTextColor='#FAFAFA'>
                        </InsInputText>

                        <InsButton onNavigate='Welcome' {...this.props}>
                            SignUp
                        </InsButton>

                        <View style={{flexDirection: 'row'}}>
                            <View style={{alignItems: 'flex-start'}}>
                                <InsButton onNavigate="Login" {...this.props}>
                                    Login
                                </InsButton>

                            </View>
                            <View style={{alignItems: 'flex-end'}}>
                                <SocialButtons/>
                            </View>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        );
    }


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FAFAFA',
        paddingTop: 10
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#FAFAFA',
    },
    instructions: {
        textAlign: 'center',
        color: '#FAFAFA',
        marginBottom: 5,
    },
    signup: {
        marginTop: 10,
        paddingTop: 5,
        borderRadius: 30,

    },
    text: {

        bottom: 10,
        position: 'absolute',
        height: 40,
        width: 200,
        backgroundColor: 'rgba(244,67,54 ,0.6)',

        paddingHorizontal: 10,
        marginBottom: 10

    },
    button: {
        alignItems: 'center',
        padding: 10,
        width: 3,
        height: 3,
        right: 0,
        marginTop: 30
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: 'white'
    },
    forget: {
        color: 'white',
        textAlign: 'center'
    },

    centerWhiteText: {
        fontWeight: 'bold',
        marginLeft: 5, color: 'white',
        textAlign: 'center'
    }
});

const mapStateToProps = state => ({
    token: state.token,
});


const mapDispatchToProps = dispatch => ({
    getUserToken: () => dispatch(getUserToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);