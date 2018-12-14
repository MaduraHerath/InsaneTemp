import React from 'react';
import {
    Dimensions,
    Image,
    Picker, RefreshControl,
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
import {connect} from "react-redux";
import {fetchPeopleFromAPI} from "../../actions";
import LottieView from 'lottie-react-native';

var width = Dimensions.get('window').width;


class Welcome extends React.Component {
    componentDidMount() {
        this.props.getPeople()
    };

    constructor(props) {
        super(props);
        this.state = {
            isColllapsed: false,
            date: "",
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
        this.state.date = date.toString();
        console.log('A date has been picked: ', date.toString());
        this._hideDateTimePicker();
    };

    render() {
        console.log(this.state.date)
        const {people, isFetching} = this.props.people;
        console.log(people)
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
                                        <Icon name="chart" size={30} color="#FAFAFA"/>
                                    </View>
                                </InsFade>
                            </View>
                            <InsFade delay={600}>
                                <InsInputText secureTextEntry={false}
                                              textContentType={'username'}
                                              placeholder={"Name of the Doctor"}
                                              borderRadius={24}
                                              backgroundColor={"rgba(255, 255, 255, 0.25)"}
                                              isleftIcon={false}
                                              iconPlaceholder={"user-md"}
                                              placeholderTextColor='#FAFAFA'>
                                </InsInputText>
                            </InsFade>
                            <InsFade delay={600}>
                                <View style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "100%",

                                }}>

                                    <View style={{
                                        backgroundColor: "rgba(255, 255, 255, 0.25)",
                                        borderRadius: 30,
                                        height: 40,
                                        paddingLeft: 10,
                                        width: "80%",
                                        justifyContent: "center"
                                    }}>

                                        <Picker
                                            selectedValue={""}
                                            iosHeader="Selecione o País"
                                            style={{height: 50, width: "100%",color:"#FAFAFA"}}>
                                            <Picker.Item label="Neurology" value="java"/>
                                            <Picker.Item label="Another One" value="java"/>
                                            <Picker.Item label="Love Sick" value="java"/>
                                            <Picker.Item label="Neurology" value="java"/>
                                        </Picker>
                                    </View>

                                </View>
                            </InsFade>
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
                                    padding: 10,
                                    justifyContent: "center"
                                }}>
                                    <TouchableOpacity onPress={this._showDateTimePicker}>
                                        <Text style={{color: "#FAFAFA", paddingLeft: 10}}>{this.state.date}</Text>
                                        <Icon
                                            style={styles.icon}
                                            name='calendar'
                                            color='#FAFAFA'
                                            size={14}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </LinearGradient>
                    </InsFade>
                    <ScrollView contentContainerStyle={styles.contentContainer} bounces={true} bouncesZoom={true}  refreshControl={
                        <RefreshControl
                            refreshing={isFetching}
                            onRefresh={ console.log("Loader")}/>}>
                        <View>
                            <InsSpring value={1}
                                       delay={0}>
                                {
                                    isFetching && <View>
                                        {/*<Text>Loading ...</Text>*/}
                                        <LottieView
                                        source={require('../../images/healthtap_spinner.json')}
                                        autoPlay
                                        loop
                                        />
                                    </View>
                                }
                                {
                                    people.length ? (
                                        people.map((person, i) => {
                                            return <View key={i} style={{margin:10}}>
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
                                                            width: width * 0.8
                                                        }}>
                                                            <View style={{flexDirection: 'row'}}>
                                                                <View style={styles.cardName}>
                                                                    <Text
                                                                        style={{
                                                                            fontFamily: 'Arial',
                                                                            fontSize: 15,
                                                                            textAlign: 'right'
                                                                        }}>{person.name}</Text>
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
                                                                justifyContent: 'space-between'
                                                            }}>

                                                                <Text> Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit. Nulla
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
                                            </View>
                                        })
                                    ) : null
                                }

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
        right: 4,
        marginBottom:10
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

function mapStateToProps(state) {
    return {
        people: state.people
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getPeople: () => dispatch(fetchPeopleFromAPI())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Welcome)
