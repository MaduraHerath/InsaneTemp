import React, {Component} from 'react';
import {Dimensions, StyleSheet, TouchableHighlight,Text, View} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class InsButton extends Component {

    componentDidMount(){
        console.log("Props",this.props)
    }
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.main} onPress={this.onPress} >
                <TouchableHighlight style={styles.button} onPress={() =>  {this.props.navigation.navigate(this.props.onNavigate)}} >
                    <Text style={{color: this.color}}>
                        {this.props.children}
                    </Text>
                </TouchableHighlight>
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

