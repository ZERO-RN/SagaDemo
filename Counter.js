/*eslint-disable no-unused-vars */
import React, { Component } from 'react'
import  PropTypes  from 'proptypes'

import {
    Platform,
    StyleSheet,
    Text,Alert,
    View,
    Button
} from 'react-native';

export default class Counter extends Component{
    constructor(props){
        super(props);

    }

    render(){
        const {params} = this.props;
       return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Button title="Increment" onPress={()=>{
                    params.onIncrement()
                }}/>
                <Button title="Decrement" onPress={()=>{
                    params.onDecrement()
                }}/>
                <Text>
                    Clicked: {params.value} times
                </Text>

            </View>
        )
    }
}
Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
};
