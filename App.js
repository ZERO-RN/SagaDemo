/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import createSaga from 'redux-saga'
import rootSaga from './saga/index';
import AllReducers from './reduce/AllReducers'
const saga = createSaga();
import Home from './container/Home';
const store = createStore(AllReducers,applyMiddleware(saga));
saga.run(rootSaga);
export default class App extends Component<{}> {
    render() {
        return (
            <Provider store={store}>
                <Home/>
            </Provider>
        );
    }
}
