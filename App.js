import React from 'react';
import {Animated, Easing, StyleSheet} from 'react-native';
import {createStackNavigator, StackNavigator,} from 'react-navigation';

import Welcome from "./src/components/welcome/welcome";
import Home from "./src/components/home/home";
import Booking from "./src/components/newsfeed/booking";
import Otp from "./src/components/otp/otp";
import ResetPassword from "./src/components/passwordReset/resetPassword";
import {Provider} from "react-redux"
import configureStore from "./src/configureStore";
import Login from "./src/components/login/login";


let initialState = {
    people: []
}
const store = configureStore(initialState);

export default class App extends React.Component {
    render() {
        return (
            <Provider store = {store}>
                <StackView/>
            </Provider>
        );
    }
}
const transitionConfig = () => {
    return {
        transitionSpec: {
            duration: 750,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
            useNativeDriver: true,
        },
        screenInterpolator: sceneProps => {
            const {layout, position, scene} = sceneProps

            const thisSceneIndex = scene.index
            const width = layout.initWidth

            const translateX = position.interpolate({
                inputRange: [thisSceneIndex - 1, thisSceneIndex],
                outputRange: [width, 0],
            })

            return {transform: [{translateX}]}
        },
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});


const StackView = createStackNavigator({
        Welcome: {
            screen: Welcome,
            navigationOptions: {
                header: null
            },
        },

        Login: {
            screen: Login,
            navigationOptions: {
                header: null
            },
        },
        Home: {
            screen: Home,
            navigationOptions: ({navigation}) => {
                return {
                    headerTintColor: 'white',
                    headerTransparent: true,
                    headerStyle: {borderBottomWidth: 0, tintColor: '#FAFAFA'},
                    headerText: "Doctor"
                }
            }
        },
        Booking: {
            screen: Booking,
            navigationOptions: ({navigation}) => {
                return {
                    headerTintColor: 'white',
                    headerTransparent: true,
                    headerStyle: {borderBottomWidth: 0, tintColor: '#FAFAFA'},
                    headerText: "Booking"
                }
            }

        },
        Otp: {
            screen: Otp,
            navigationOptions: ({navigation}) => {
                return {
                    headerTintColor: 'white',
                    headerTransparent: true,
                    headerStyle: {borderBottomWidth: 0, tintColor: '#FAFAFA'}
                }
            }

        },
        ResetPassword: {
            screen: ResetPassword, navigationOptions: ({navigation}) => {
                return {
                    headerTintColor: 'white',
                    headerTransparent: true,
                    headerStyle: {borderBottomWidth: 0, tintColor: '#FAFAFA'}
                }
            }
        },
    },
    {
        initialRouteName: 'Login',
        transitionConfig,
        portraitOnlyMode: true
    });

