import React from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import InsInputText from "../../common/InsInputText";
import InsCard from "../../common/InsCard";
import LinearGradient from "react-native-linear-gradient";
import InsSpring from "../../common/InsSpring";


export default class Home extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <View>

                <View style={styles.instructions}>
                    <LinearGradient style={styles.header}
                                    colors={["#315AFF","#00D2FF"]}
                                    start={{x: 0.0, y: 0.8}} end={{x: 1.0, y: 0.2}}>
                        <View onPress={() => console.log("Clicked!")}
                              style={{borderRadius: 10, padding: 2, margin: 10}}>
                            {this.props.children}

                        </View>

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between'}}>
                            <View style={{ flexDirection: 'column'}}>
                                <InsSpring>
                                <Text style={styles.welcome}>
                                    Doctors
                                </Text>
                                </InsSpring>
                            </View>
                        </View>
                        <InsInputText secureTextEntry={false}
                                      textContentType={'username'}
                                      placeholder={"Specialized Category"}
                                      borderRadius={24}
                                      backgroundColor={"rgba(255, 255, 255, 0.25)"}
                                      placeholderTextColor='#FAFAFA'>
                        </InsInputText>
                    </LinearGradient>
                    <View style={{margin: 5}} onPress={() => this.props.navigation.navigate('Home')}>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Home')}>
                            <InsCard
                                onPress={() => this.props.navigation.navigate('Home')}
                                backgroundEndColor={"#F5F5F5"}
                                backgroundStartColor={"#F5F5F5"}
                                margin={5}>
                                <Text style={{fontFamily: 'Arial', fontSize: 15, textAlign: 'right'}}>Madura
                                    Herath</Text>
                            </InsCard>
                        </TouchableHighlight>
                    </View>
                    <View style={{margin: 5}} onPress={() => this.props.navigation.navigate('Home')}>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Home')}>
                            <InsCard

                                backgroundEndColor={"#F5F5F5"}
                                backgroundStartColor={"#F5F5F5"}
                                margin={12}>
                                <Text style={{fontFamily: 'Arial', fontSize: 15, textAlign: 'right'}}>Shihan
                                    Anurudhdha</Text>
                            </InsCard>
                        </TouchableHighlight>
                    </View>
                    <View style={{margin: 5}} onPress={() => this.props.navigation.navigate('Home')}>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Home')}>
                            <InsCard
                                onPress={() => this.props.navigation.navigate('Home')}
                                backgroundEndColor={"#F5F5F5"}
                                backgroundStartColor={"#F5F5F5"}
                                margin={12}>
                                <Text style={{fontFamily: 'Arial', fontSize: 15, textAlign: 'right'}}>L</Text>
                            </InsCard>
                        </TouchableHighlight>
                    </View>
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
        backgroundColor: '#F5FCFF',
    },
    header:{
        alignItems: 'center',
        backgroundColor: '#FAFAFA',
        padding: 6,
        margin: 0,
        borderBottomColor: 'white',
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        justifyContent: 'center',
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
        width: 40,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 100,
        color: '#B24592',
        margin: 5
    },

    signup: {
        marginTop: 10,
        paddingTop: 5,
        borderRadius: 30,
        backgroundColor: '#e53935'


    }
});