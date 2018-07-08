import {takeEvery, all, takeLatest,take,call} from 'redux-saga/effects';
import { fetchHeroesSaga, fetchPublicMatchesSaga, fetchPublicMatchSaga} from './heroGuesser';
import * as actionTypes from '../actions/actionTypes';


export function* watchHeroGuesser()
{
 yield takeEvery(actionTypes.FETCH_HEROES,fetchHeroesSaga);
 yield takeEvery(actionTypes.FETCH_PUBLIC_MATCHES,fetchPublicMatchesSaga);
 //yield take(actionTypes.FETCH_PUBLIC_MATCHES);
/*
 while (yield take(actionTypes.FETCH_PUBLIC_MATCHES)) {
    yield call(fetchPublicMatchesSaga) // waits for the fetchPosts task to terminate
 }*/

 yield takeLatest(actionTypes.FETCH_PUBLIC_MATCH, fetchPublicMatchSaga);
}