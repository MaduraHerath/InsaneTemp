import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import InsHeader from "../../common/InsHeader";
import InsCard from "../../common/InsCard";


var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class Booking extends React.Component {

    constructor() {
        super();
        this.state = {
            input: '',
            colors: [['#654ea3', '#654ea3'], ['#FF416C', '#FF4B2B'], ['#bc4e9c', '#f80759'], ['#8E2DE2', '#4A00E0'], ['#141E30', '#243B55'], ['#16222A', '#3A6073']],
            changeColor: 0


        }

    }

    componentDidMount() {
        console.log("Color", this.state.changeColor)
        this.setState({changeColor: Math.floor(Math.random() * 5)})


    }

    render() {

        let {changeColor} = this.state;
        console.log("CHCHCHCHCHCHCH", changeColor)
        return (
            <View style={{height: height * 0.4, width: "100%"}}>
                <InsHeader>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={styles.welcome}>
                            Booking
                        </Text>
                        <Text style={styles.instructions}>
                            Patient Details
                        </Text>
                    </View>
                </InsHeader>
                <View>
                    <InsCard
                        onPress={() => this.props.navigation.navigate('Home')}
                        backgroundEndColor={"#F5F5F5"}
                        backgroundStartColor={"#F5F5F5"}
                        margin={12}>

                    </InsCard>
                </View>
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
        marginBottom: 5
        ,
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