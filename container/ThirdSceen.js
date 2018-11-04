/**
 * Created by zerowolf on 2018/2/4.
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,Alert,
    View,TouchableOpacity
} from 'react-native';

export default class ThirdSceen extends Component{
    constructor(props){
        super(props);

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
    render(){
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity activeOpacity={0.5} onPress={()=>{
                    this.refresh();
                }}>

                    <Text style={{color: 'blue', fontSize: 18}}>
                        New Page !
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}