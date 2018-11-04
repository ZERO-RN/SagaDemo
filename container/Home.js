/**
 * Created by zerowolf on 2018/2/3.
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text, Alert,
    View
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actions,login} from '../reduce/Home';
import Mine from './Mine';
class Home extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        const  {} = this.props;
    }

    componentWillMount() {
        this.props.initLogin('1059901966@qq.com','123456')
        // this.props.initAction()
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: 'blue', fontSize: 18}}
                >
                    New Page !
                </Text>
                <Mine {...this.props}/>

            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // RS_AutoPay: state.RS_AutoPay.data,
        reducers:state.reducers,
    }

};

const mapDispatchToProps = (dispatch) => {
    // const initAction = bindActionCreators([actions.login, actions.loginOut], dispatch);
    // return {
    //     initAction
    // };
    //
    return bindActionCreators({
        initLogin: actions.login,
        // initLogin: reducers,
    }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);
