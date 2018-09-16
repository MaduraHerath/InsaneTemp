import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
// Use prebuilt version of RNVI in dist folder
import Icon from 'react-native-vector-icons/FontAwesome';

// Generate required css
import iconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
export default class SocialButtons extends Component {

    render() {
        return (
            <View style={styles.main} >
                <View style={styles.sicon}>
                <Icon name="facebook-square" style={{color:'white', fontSize: 0.09 * width}}>
                </Icon>
                </View>
                <View style={styles.sicon}>
                <Icon name="google-plus-square" style={{color:'white', fontSize: 0.09 * width}}>
                </Icon>
                    </View>
                <View style={styles.sicon}>
                <Icon name="linkedin-square" style={{color:'white', fontSize: 0.09 * width}}>
                </Icon>
                </View>
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
        padding: 10,
        width:width * 0.4,
        flex: 1,
        flexDirection: 'row',
        margin:10
    },
    sicon:{
        margin:10
    }
    }

)

