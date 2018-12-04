import React from 'react';
import {
    Dimensions,
    Image,
    Picker,
    ScrollView,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View
} from 'react-native';
import InsInputText from "../../common/InsInputText";
import InsCard from "../../common/InsCard";
// import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import LinearGradient from "react-native-linear-gradient";
import DateTimePicker from 'react-native-modal-datetime-picker';
import InsSpring from "../../common/InsSpring";
import InsFade from "../../common/InsFade";

var width = Dimensions.get('window').width;


export default class Welcome extends React.Component {
    componentDidMount() {
    };

    constructor(props) {
        super(props);
        this.state = {
            isColllapsed: false,
            isDateTimePickerVisible: false
        };
    };

    collapsible() {
        this.setState({
            isColllapsed: !this.state.isColllapsed
        })
    };

    _showDateTimePicker = () => this.setState({isDateTimePickerVisible: true});

    _hideDateTimePicker = () => this.setState({isDateTimePickerVisible: false});

    _handleDatePicked = (date) => {
        console.log('A date has been picked: ', date);
        this._hideDateTimePicker();
    };

    render() {
        return (
            <View>
                <View style={styles.instructions}>
                    <InsFade delay={200}>
                    <LinearGradient style={styles.header}
                                    colors={["#315AFF", "#00D2FF"]}
                                    start={{x: 0.0, y: 0.8}} end={{x: 1.0, y: 0.2}}>
                        <View onPress={() => console.log("Clicked!")}
                              style={{borderRadius: 10, padding: 2, margin: 10}}>
                            {this.props.children}

                        </View>

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingHorizontal: 8

                        }}>
                            <InsFade delay={450}>
                            <View style={{flexDirection: 'column', alignItems: "flex-start"}}>
                                <Image source={require('../../images/logo.png')} resizeMode={this.resizeMode}
                                       style={{width: 50, height: 50, padding: 10}}/>
                            </View>
                            </InsFade>
                            <InsFade delay={500}>
                            <View style={{flexDirection: 'column'}}>
                                <Text style={styles.welcome}>
                                    Home
                                </Text>
                            </View>
                            </InsFade>
                            <InsFade delay={450}>
                            <View style={{flexDirection: 'column', alignItems: "flex-end", right: 0}}>
                                {/*<TouchableHighlight style={styles.button}*/}
                                {/*onPress={() => this.props.navigation.navigate('Home')}>*/}
                                {/*<Text style={{fontFamily: 'Arial', fontSize: 15}}>Appoinments</Text>*/}
                                {/*</TouchableHighlight>*/}
                                <Icon name="chart-bar" size={30} color="#FAFAFA"/>
                            </View>
                            </InsFade>
                        </View>
                        <InsFade delay={600}>
                        <InsInputText secureTextEntry={false}
                                      textContentType={'username'}
                                      placeholder={"Name of the Doctor"}
                                      borderRadius={24}
                                      backgroundColor={"rgba(255, 255, 255, 0.25)"}
                                      placeholderTextColor='#FAFAFA'>
                        </InsInputText>
                        </InsFade>
                        <View style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",

                        }}>
                            <InsFade delay={600}>
                            <View style={{
                                backgroundColor: "rgba(255, 255, 255, 0.25)",
                                borderRadius: 30,
                                height: 40,
                                width: "80%",
                                justifyContent: "center"
                            }}>

                                <Picker
                                    selectedValue={""}
                                    style={{height: 50, width: "100%"}}>
                                    <Picker.Item label="Neurology" value="java"/>
                                    <Picker.Item label="Neurology" value="java"/>
                                    <Picker.Item label="Neurology" value="java"/>
                                    <Picker.Item label="Neurology" value="java"/>
                                </Picker>
                            </View>
                            </InsFade>
                        </View>

                        <DateTimePicker
                            isVisible={this.state.isDateTimePickerVisible}
                            onConfirm={this._handleDatePicked}
                            onCancel={this._hideDateTimePicker}
                        />
                        <View style={{
                            flexDirection: "row",
                            alignItems: "center",
                            paddingVertical: 10,
                            justifyContent: "center",
                            width: "100%",

                        }}>
                            <View style={{
                                backgroundColor: "rgba(255, 255, 255, 0.25)",
                                borderRadius: 30,
                                height: 40,
                                width: "80%",
                                padding: 6,
                                justifyContent: "center"
                            }}>
                                <TouchableOpacity onPress={this._showDateTimePicker}>
                                    <Text style={{color: "#FAFAFA"}}>Selected Date </Text>
                                    <Icon
                                        style={styles.icon}
                                        name='calendar-o'
                                        color='#FAFAFA'
                                        size={14}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>

                    </LinearGradient>
                    </InsFade>
                    <ScrollView contentContainerStyle={styles.contentContainer} bounces={true} bouncesZoom={true}>
                        <View style={{margin: 5}} onPress={() => this.props.navigation.navigate('Home')}>
                            <InsSpring value={1}
                                       delay={0}>
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
                                    <View style={{flexDirection: "row", justifyContent: 'space-between'}}>
                                        <View style={{flexDirection: 'column', alignItems: "flex-start"}}>
                                            <TouchableHighlight onPress={() => this.props.navigation.navigate('Home')}>
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
                                        <View style={{flexDirection: 'column', padding: 10, width: width * 0.8}}>
                                            <View style={{flexDirection: 'row'}}>
                                                <View style={styles.cardName}>
                                                    <Text
                                                        style={{fontFamily: 'Arial', fontSize: 15, textAlign: 'right'}}>Madura
                                                        Herath</Text>
                                                </View>

                                                <Text style={{
                                                    fontFamily: 'Arial',
                                                    fontSize: 13,
                                                    textAlign: 'right',
                                                    padding: 1
                                                }}>(Cardiology)</Text>

                                            </View>
                                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>

                                                <Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                                                    pulvinar semper erat non imperdiet. </Text>
                                            </View>
                                            {this.state.isColllapsed &&
                                            <View>
                                                <Text> More Details </Text>
                                            </View>
                                            }
                                        </View>
                                    </View>
                                </InsCard>
                            </InsSpring>
                        </View>

                    </ScrollView>
                </View>

            </View>
        );
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
    icon: {
        position: "absolute",
        right: 40
    },
    header: {
        backgroundColor: '#FAFAFA',
        padding: 6,
        margin: 0,
        borderBottomColor: 'white',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
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

});