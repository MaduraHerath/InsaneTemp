import React from 'react';
import {Dimensions, StyleSheet, Text, View,TouchableHighlight} from 'react-native';


import LinearGradient from 'react-native-linear-gradient';
import InsInputText from "../../common/InsInputText";
import InsImage from "../../common/InsImage";
import InsButton from "../../common/InsButton";
import SocialButtons from "../SocialButtons";
import ResetPassword from "../passwordReset/resetPassword";

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            input: '',
            colors:[['#654ea3', '#654ea3'],['#FF416C', '#FF4B2B'],['#bc4e9c', '#f80759'],['#8E2DE2', '#4A00E0'],['#141E30', '#243B55'],['#16222A', '#3A6073']],
            changeColor: 0


        }

    }
    componentDidMount() {
        console.log("Color",this.state.changeColor)
        this.setState({ changeColor: Math.floor(Math.random() * 5)})

    }

    render() {

        let { changeColor } = this.state;
        console.log("CHCHCHCHCHCHCH",changeColor)
        return (
            <LinearGradient
                colors={this.state.colors[4]}
                start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
            >
                <View style={{width: width * 1, height: height * 1.3}}>
                    <View>
                        <InsImage resizeMode={'center'}/>
                    </View>
                    <View>
                        <Text style={styles.welcome}>
                            Buckmanity
                        </Text></View>
                    <InsInputText secureTextEntry={false}
                                  textContentType={'username'}
                                  placeholder={"Phone Number"}>

                    </InsInputText>

                    <InsInputText secureTextEntry={true}
                                  textContentType={'password'}
                                  placeholder={"Password"}>
                    </InsInputText>
                    <View style={styles.forget}>
                        <Text style={styles.forget}>
                            Those who dumb to remember their password

                        </Text>
                        <Text style={styles.centerWhiteText} onPress={() =>  {this.props.navigation.navigate('ResetPassword')}}>
                            Click Here
                        </Text>
                    </View>

                    <InsButton onNavigate ='Otp' {...this.props}>
                        Login
                    </InsButton>

                    <Text style={styles.centerWhiteText}>OR</Text>

                    <View style={{flexDirection: 'row'}}>
                        <View style={{alignItems: 'flex-start'}}>
                            <InsButton  onNavigate ="Otp" {...this.props}>
                                SignUp
                            </InsButton>

                        </View>
                        <View style={{alignItems: 'flex-end'}}>
                            <SocialButtons/>
                        </View>
                    </View>
                </View>
            </LinearGradient>

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