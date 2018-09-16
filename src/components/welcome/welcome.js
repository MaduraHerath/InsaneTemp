import React from 'react';
import {Dimensions, Platform, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class Welcome extends React.Component {
    componentDidMount() {
    }

    render() {
        return (

            <LinearGradient style={styles.container}
                            colors={['#B24592', '#F15F79']}
                            start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 0.2}}>
                <View>
                    <Text style={styles.welcome}>
                        Welcome to Insane!
                    </Text>
                </View>
                <View style={styles.instructions}>

                    <TouchableHighlight style={styles.button}
                                        onPress={() => this.props.navigation.navigate('Home')}>
                        <Text style={{color: '#B24592'}}>
                            START
                        </Text>
                    </TouchableHighlight>
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
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: 'white'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        justifyContent: 'center',
        marginBottom: 5,
    },

    button: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 100,
        color: '#B24592',
        margin: 20
    },

    signup: {
        marginTop: 10,
        paddingTop: 5,
        borderRadius: 30,
        backgroundColor: '#e53935'


    }
});