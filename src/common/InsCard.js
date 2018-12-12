import React, {Component} from 'react';
import {Dimensions, Platform, StyleSheet, Text, View} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import CardView from "react-native-simple-card-view/libs/cardView/index";
import PropTypes from 'prop-types';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class InsCard extends Component {

    componentDidMount() {
        console.log("Props", this.props)
    }

    constructor(props) {
        super(props);
    }

    render() {

            const container = {
                shadowOffset : {
                    width : Platform.OS === "ios" ? this.props.style.shadowOffsetWidth : 0,
                    height: Platform.OS === "ios" ? this.props.style.shadowOffsetWidth : 0,
                },
                width        : this.props.style.width,
                margin       : this.props.margin,
                borderRadius       : this.props.borderRadius,
                shadowColor  : this.props.style.shadowColor,
                shadowOpacity: this.props.style.shadowOpacity,
                shadowRadius : this.props.style.shadowRadius,
                elevation    : Platform.OS === "android" ? this.props.elevation : undefined,
            };
        return (
            <LinearGradient style={styles.container}
                            colors={[this.props.backgroundEndColor,this.props.backgroundStartColor]}
                            start={{x: 0.0, y: 0.8}} end={{x: 1.0, y: 0.2}}>
                <View
                      style={{borderRadius: 10, padding: 2, margin: 10,paddingVertical:6}}>
                    {this.props.children}
                </View>
            </LinearGradient>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FAFAFA',
        padding: 6,
        margin: 0,
        borderBottomColor: 'white',
        borderRadius:10
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

InsCard.defaultProps = {
    style: {
        shadowColor       : '#000000',
        shadowOffsetWidth : 3,
        shadowOffsetHeight: 3,
        shadowOpacity     : 0.1,
        shadowRadius      : 3,
        bgColor           : '#ffffff',
        padding           : 5,
        margin            : 10,
        borderRadius      : 3,
        width             : 300,
        elevation         : 3,
    },
};
CardView.propTypes = {
    style       : PropTypes.object,
    onPress     : PropTypes.func,
};
