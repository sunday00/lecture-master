import {all, put, call, takeEvery} from 'redux-saga/effects';
import {actions, Types} from './index';
import {callApi} from '../../../common/util/api';
import {makeFetchSaga} from '../../../common/util/fetches'

type NameType = {
    name: string
}

function* fetchUser({ name }: NameType){
    //@ts-ignore
    const { isSuccess, data } = yield call(callApi, {
        url: '/user/search',
        params: { keyword: name }
    });

    if (isSuccess && data){
        const user = data.find( (item:{name:string, department: string, tag: string}) => item.name === name );
        yield put(actions.setValue('user', user));
    }
}

export default function* ()
{
    yield all ([
        //@ts-ignore
        // takeEvery(Types.FetchUser, fetchUser),
        makeFetchSaga({ fetchSaga: fetchUser, isCached: false  }),
    ]);
}
