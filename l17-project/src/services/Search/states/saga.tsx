import {all, put, call, takeEvery} from 'redux-saga/effects';
import {actions, Types} from './index';
import {callApi} from '../../../common/util/api';

type KeywordType = {
    keyword: string
}

function* fetchAutoComplete({ keyword }: KeywordType){
    //@ts-ignore
    const { isSuccess, data } = yield call(callApi, {
        url: '/user/search',
        params: { keyword }
    });

    if (isSuccess && data){
        yield put(actions.setValue('autoCompletes', data));
    }
}

export default function* ()
{
    yield all ([
        //@ts-ignore
        takeEvery(Types.FetchAutoComplete, fetchAutoComplete),
    ]);
}
