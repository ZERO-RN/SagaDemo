/**
 * Created by zerowolf on 2018/2/3.
 */
import {takeEvery, take, fork, put, call} from 'redux-saga/effects';
import {ACTION_TYPE} from '../reduce/Home';
import {actions} from '../reduce/Home';
import {Alert} from 'react-native';
import {fetchJson} from '../FetchUtil';

export const delay = ms =>{
    new Promise(resolve=>{
        setTimeout(resolve,ms)
    })
}

export function *incrementAsync() {
    yield delay(2000)
    yield put({type:'INCREMENT'})
}

export function *sagaTest(user,isLoading,error) {
    console.log(user+"-----"+isLoading+"-----"+error)
    console.log('sagaTest')
    // yield call(Alert.alert,'EEEEEEEEE')
    const jsonList = yield call(fetchJson, 'https://api.douban.com/v2/movie/top250?start=0&count=10');
    console.log(jsonList)
    const dataList = jsonList.subjects.splice(0, 4);
    yield put(actions.loginOut(dataList))
}

export function* showErrorAlert() {
    // const {}
    while (true) {
        const {user , isLoading , error } = yield take(ACTION_TYPE.ACTION_READHOMEDATA);
        yield fork(sagaTest,user,isLoading,error);
        console.log('errorerrorerrorerrorerror')
    }
}
