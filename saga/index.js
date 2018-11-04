/**
 * Created by zerowolf on 2018/2/3.
 */
import {all, fork,takeEvery} from 'redux-saga/effects';

import * as homeSagas from './sagaHome';
import {ACTION_TYPE} from '../reduce/Home';

export default function * rootSaga() {
    yield all([
        fork(homeSagas.showErrorAlert)
    ]);

}

