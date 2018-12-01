import React, {Component} from 'react';
import {Dimensions, StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
let backgroundColor = "ffffff";
export default class InsInputText extends Component {

    render() {
        backgroundColor = this.props.backgroundColor;
        return (
            <View style={styles.main}>
                <Icon
                    style={styles.icon}
                    name='calendar-o'
                    color='#FAFAFA'
                    size={14}
                />
                <TextInput style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: this.props.backgroundColor,
                    color:"#EEEEEE",
                    padding: 6,
                    margin: 0,
                    borderBottomColor: 'white',
                    borderRadius: 10,
                    width: width * 0.8,
                }}
                           allowFontScaling={true}
                           underlineColorAndroid={'transparent'}
                           textAlign={'left'}
                           paddingLeft={6}
                           placeholderTextColor="#FAFAFA"
                           placeholder={this.props.placeholder}
                           secureTextEntry={this.props.secureTextEntry}
                           multiline={false}
                           borderRadius={this.props.borderRadius}
                           textContentType = {this.props.textContentType}>
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
        color:"#EEEEEE",
        padding: 6,
        margin: 0,
        borderBottomColor: 'white',
        borderRadius: 10
    },
    icon: {
        position:"absolute",
        right:40
    },
    main: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        height: 40,
        margin: 10
    }

})

