import { put, takeEvery, call } from "redux-saga/effects";
import { COUNTER_CHANGE, API_RESPONSE} from '../constants';


function* updateProfilePersonal(action) {
    console.log('updateProfilePersonal ')
    let res = yield call(getImages);
    console.log('updateProfilePersonal 2', res);
    yield put({
        type: API_RESPONSE,
        payload: 1
    });
}

async function getImages() {
    console.log('getImages 22 ')
    const url = "https://i.picsum.photos/id/862/200/300.jpg?hmac=eu7Z4fgzcdsbc3tA4GZZVHdkM3dtNIu2A--ZHUQEK_g";

    try {
        let response = await fetch(url, {
            method: "GET",
        });
        console.log('response 11', response);
        return {
            status: response.ok
        };
    } catch (e) {
        console.error(e);
        throw e;
    }
}

export function* getImages() {

    yield takeEvery(
        COUNTER_CHANGE,
        updateProfilePersonal
    );
}
