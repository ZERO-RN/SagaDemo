/**
 * Created by zerowolf on 2018/2/3.
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text, Alert,
    View,
    TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actions} from '../reduce/Home';
import ThirdSceen from './ThirdSceen';
class Mine extends Component {
    constructor(props) {
        super(props);
        this.props.initLoginOut();
        this.props.initLogin('9999999');
    }

    componentWillMount() {
        const params = this.props;
        console.log(params.reducers);

    }
    refresh(){
        console.log('refresh');
        // this.props.initLogin('88888');
        const params = this.props;
        console.log(params.reducers);
        // params.initLogin('6666666');
        params.readHomeData('789',true,null)

        // console.log(initLogin);
        // Alert.alert('ERROR','eeee')
    }

    render() {
        console.log(this.props.reducers);
        // console.log(this.props.actions);
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity activeOpacity={0.5} onPress={()=>{
                    this.refresh();
                }}>

                <Text style={{color: 'blue', fontSize: 18}}>
                    New Page !
                </Text>
                </TouchableOpacity>
                <ThirdSceen {...this.props}/>
            </View>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        // RS_AutoPay: state.RS_AutoPay.data,
        reducers: state.reducers,
    };

};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        // initAutoPayAction: Page_AutoPay,
        initLogin: actions.login,
        initLoginOut: actions.loginOut,
        readHomeData:actions.readHomeData
    }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(Mine);
