import {put,take,call} from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../actions/index';    
import { constants } from 'zlib';
import * as actionTypes from '../actions/actionTypes';

export function* fetchHeroesSaga(action)
{ 
 yield put(actions.fetchHeroesStart());
    try
    {
     const response = yield axios.get("https://api.opendota.com/api/heroStats");
     const fetchedHeroes = [];
     for (let key in response.data)
     {
      fetchedHeroes.push(response.data[key]);
     }
     const sortedData = fetchedHeroes.sort((a,b) => {
        if (a.localized_name < b.localized_name)
     {
      return -1;
     }
     if (a.localized_name > b.localized_name)
     {  
      return 1;
     }
     return 0;})
     console.log(sortedData)
     yield put(actions.fetchHeroesSuccess(sortedData));
    }
    catch(error)
    {
     yield put(actions.fetchHeroesFail(error));   
    }   
}


export function* fetchPublicMatchesSaga(action)
{
 yield put(actions.fetchPublicMatchesStart());
 try{
    const response = yield axios.get("https://api.opendota.com/api/publicMatches");
   // console.log(response.data);
    const random = Math.floor((Math.random() * 100));
   // console.log(random);
    const chosenMatch = response.data[random];
    //console.log(chosenMatch.match_id);
    yield put(actions.fetchPublicMatchesSuccess(response.data,chosenMatch.match_id));
    yield* fetchPublicMatchSaga(action,chosenMatch.match_id);
}
 catch(error)
 {
  yield put(actions.fetchPublicMatchesFail(error));
 }
}


export function* fetchPublicMatchSaga(action,matchid)
{
 yield put(actions.fetchPublicMatchStart());
 try {
   // console.log(action.fetchedMatchId,matchid)
    const url = "https://api.opendota.com/api/matches/" + matchid;
    const response = yield axios.get(url);
    //console.log(url, response.data);
    const random = Math.floor((Math.random() * 10))
    const chosenPlayer = response.data.players[random];
    //console.log( chosenPlayer);
    yield put(actions.fetchPublicMatchSuccess(chosenPlayer,response.data));
}
 catch(error)
 {
  yield put(actions.fetchPublicMatchFail(error));
 }
}