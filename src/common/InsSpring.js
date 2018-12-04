import React, {Component} from 'react';
import {Animated,StyleSheet} from 'react-native';
export default class InsSpring extends Component {
    componentDidMount() {
        this.spring()
    }

    constructor() {
        super();
        this.springValue = new Animated.Value(0)
        this.opacityValue = new Animated.Value(0)
    }

    spring() {
        this.springValue.setValue(0);
        const { delay, value } = this.props;
        console.log("DELAY>>>>>",delay)
        Animated.stagger(delay,[
            Animated.delay(delay),
        Animated.spring(
            this.springValue,
            {
                toValue: value,
                duration: 1000,
                friction: 4,
                useNativeDriver: true
            }
        )]).start()
    }


    render() {

        return (
            <Animated.View                 // Special animatable View
                style={{transform: [{scale: this.springValue}],
                    ...this.props.style,
                             // Bind opacity to animated value
                }}>
                {this.props.children}
            </Animated.View>
        );
    }
}
