import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Image, TextInput, StatusBar, ScrollView } from 'react-native';




export default class Newsfeed extends React.Component {




    constructor() {
        super();
        this.state = { input: '' }
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#ef5350"
                    barStyle="light-content"
                />
                <ScrollView bounces={true}>

                </ScrollView>
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
        width: 200,
        bottom: 10,
        position: 'absolute',
        borderWidth: 2,
        borderColor:'#f44336',
        flex: -1

    },
    button: {
        alignItems: 'center',
        padding: 10,
        width: 3,
        height: 3,
        right: 0
    },
});