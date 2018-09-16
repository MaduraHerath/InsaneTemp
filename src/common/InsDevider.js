import React, {Component} from 'react';
import {Dimensions, StyleSheet, TouchableHighlight,Text, View} from 'react-native';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
export default class InsDevider extends Component {

    render() {
        return (
            <View>
            <View
                style={{
                    borderBottomColor: 'white',
                    borderBottomWidth: 1,
                    width: width *0.8

                }}
            />
                <Text>{this.props.children}</Text>

            </View>


        );
    }


}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FAFAFA',
        padding: 6,
        margin: 0,
        borderBottomColor: 'white',
        borderRadius: 10,
        width: width * 0.8


    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 30,
        backgroundColor: '#fff',
        borderRadius: 100,
        margin: 20
    },
    main: {

        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    }

})

