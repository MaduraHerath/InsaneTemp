import React, {PureComponent} from 'react';
import {Dimensions, NetInfo, StyleSheet, Text, View} from 'react-native';
import {connect} from "react-redux";
import {updateNetstatus} from "../actions/NetworkStatusActions";
import InsFade from "./InsFade";

const {width} = Dimensions.get('window');

function MiniOfflineSign() {
    return (
        <View style={styles.offlineContainer}>
            <Text style={styles.offlineText}>No Internet Connection</Text>
        </View>
    );
}

class OfflineNotice extends PureComponent {

    constructor(props) {
        super(props);
        _this = this;
    }

    _handleNetInfo(isConnected) {
        console.log("Props", this.props)

        isConnected ? _this.props._Netstatus(true) : _this.props._Netstatus(false)

    }

    componentDidMount() {
        console.log("Props", this.props)
        NetInfo.isConnected.addEventListener('connectionChange', this._handleNetInfo);
    }

    componentWillUnmount() {
        NetInfo.isConnected.removeEventListener('connectionChange', this._handleNetInfo);
    }

    render() {
        if (!this.props.status) {
            return <InsFade><MiniOfflineSign/></InsFade>;
        }
        return null;
    }
}

const styles = StyleSheet.create({
    offlineContainer: {
        backgroundColor: '#b52424',
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width,
        position: 'absolute',
        top: 0
    },
    offlineText: {color: '#fff'}
});


function mapStateToProps(state) {
    return {
        status: state.netStatus.connection
    }
}

function mapDispatchToProps(dispatch) {
    return {
        _Netstatus: (status) => dispatch(updateNetstatus(status))
    }
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OfflineNotice)