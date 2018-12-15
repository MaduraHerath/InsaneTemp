import React from 'react';
import {Dimensions, Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import InsCard from "../../common/InsCard";
import InsSpring from "../../common/InsSpring";
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import InsGradientButton from "../../common/InsGradientButton";


var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class DoctorCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isColllapsed: false,
        };
    }

    collapsible() {
        this.setState({
            isColllapsed: !this.state.isColllapsed
        })
    };

    render() {
        return (
            <View style={{margin: 6}}>
                <InsCard
                    onPress={() => this.props.navigation.navigate('Home')}
                    backgroundEndColor={"#F5F5F5"}
                    backgroundStartColor={"#F5F5F5"}
                    margin={5}>
                    <View style={{
                        position: "absolute",
                        right: 0
                    }}>
                        {!this.state.isColllapsed &&
                        <Icon name="arrow-down" size={15} color="#607D8B"
                              style={{textAlign: "right", padding: 10}}
                              onPress={this.collapsible.bind(this)}/>
                        }{this.state.isColllapsed &&
                    <Icon name="arrow-up" size={15} color="#607D8B"
                          style={{textAlign: "right", padding: 10}}
                          onPress={this.collapsible.bind(this)}/>
                    }
                    </View>
                    <View
                        style={{flexDirection: "row", justifyContent: 'space-between'}}>
                        <View
                            style={{flexDirection: 'column', alignItems: "flex-start"}}>
                            <TouchableHighlight
                                onPress={() => this.props.navigation.navigate('Home')}>
                                <InsSpring value={1}
                                           delay={600}>
                                    <Image source={require('../../images/doctor.png')}
                                           resizeMode={this.resizeMode}
                                           style={{
                                               width: 50,
                                               height: 50,
                                               alignItems: "flex-start",
                                               borderRadius: 64
                                           }}/>
                                </InsSpring>

                            </TouchableHighlight>
                        </View>
                        <View style={{
                            flexDirection: 'column',
                            padding: 10,
                            width: width * 0.6
                        }}>
                            <View style={{flexDirection: 'row'}}>
                                <View style={styles.cardName}>
                                    <Text
                                        style={{
                                            fontFamily: 'Arial',
                                            fontSize: 15,
                                            textAlign: 'right'
                                        }}>{this.props.data.name}</Text>
                                </View>

                                <Text style={{
                                    fontFamily: 'Arial',
                                    fontSize: 13,
                                    textAlign: 'right',
                                    padding: 1
                                }}>(Cardiology)</Text>

                            </View>
                            <View style={{
                                flexDirection: 'row',
                                flex: 1,
                                justifyContent: 'space-between'
                            }}>

                                <Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                                    pulvinar semper erat non imperdiet. </Text>
                            </View>
                            {this.state.isColllapsed &&
                            <View>
                                <InsGradientButton
                                    onNavigate='Booking' {...this.props}>
                                    <Text> Booking </Text>
                                </InsGradientButton>
                            </View>
                            }
                        </View>
                    </View>
                </InsCard>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: 20,
        paddingBottom: 30
    },
    cardName: {
        fontFamily: 'Arial',
        fontSize: 15,
        textAlign: 'right',
        color: "#212121",
        paddingBottom: 5,
        fontWeight: "bold"
    },
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },

});