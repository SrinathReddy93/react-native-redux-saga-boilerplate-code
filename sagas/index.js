import { all, fork } from "redux-saga/effects";

import { getImages } from "./checkImages";

export default function* rootSaga() {
    yield all([
        getImages()
    ]);
}
