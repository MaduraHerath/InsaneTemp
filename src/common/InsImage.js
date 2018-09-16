import React, {Component} from 'react';
import {Dimensions, StyleSheet, Image, View} from 'react-native';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
export default class InsImage extends Component {

    render() {
        return (
            <View style={styles.main} >
                <Image source={require('../images/logo.png')} resizeMode={this.resizeMode}/>
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
    main: {

        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    }

})

