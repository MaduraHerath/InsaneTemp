import React, {Component} from 'react';
import {Dimensions, StyleSheet, TextInput, View} from 'react-native';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
export default class InsInputText extends Component {

    render() {
        return (
            <View style={styles.main} >
                <TextInput style={styles.container}
                           allowFontScaling={true}
                           underlineColorAndroid={'transparent'}
                           textAlign={'center'}
                           placeholder={this.props.placeholder}
                           secureTextEntry={this.props.secureTextEntry}
                           multiline={false}
                           textContentType = {this.props.textContentType}
                >
                    {this.props.children}
                </TextInput>
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
        padding: 10
    }

})

