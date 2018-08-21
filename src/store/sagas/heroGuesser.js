import {put,take,call} from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../actions/index';    
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

export function* fetchUrlMatchSaga(action)
{
yield put(actions.fetchUrlMatchStart());
 try {
    console.log(window.location.search);
    const urlObject = new URL(window.location.href);
    const urlSearch = urlObject.search;
     const  arrayofsearch = urlSearch.split("&");
    const stringofSearch = arrayofsearch.join("");
    console.log(urlSearch);
    console.log("hello"+ stringofSearch.length);

 arrayofsearch[0] = arrayofsearch[0].replace(/\D+/g, '');
 arrayofsearch[1] = arrayofsearch[1].replace(/\D+/g, '');
 const matchId = arrayofsearch[0] ;
 const personId =arrayofsearch[1];
    const url = "https://api.opendota.com/api/matches/" + matchId;
    const response = yield axios.get(url);
    const chosenPlayer = response.data.players[personId];
    console.log(chosenPlayer,url);
    const gameId = "/?id=" + matchId + "&number="+ personId;
    yield put(actions.getGameUrlSuccess(gameId));
    yield put(actions.fetchUrlMatchSuccess(chosenPlayer,personId,response.data));

 }
 catch(error)
 {
   yield put(actions.fetchUrlMatchFail(error));
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
    console.log( chosenPlayer);
    const gameId = "/?id=" + matchid + "&number="+ random;
    yield put(actions.getGameUrlSuccess(gameId));
    yield put(actions.fetchPublicMatchSuccess(chosenPlayer,random,response.data));
}
 catch(error)
 {
  yield put(actions.fetchPublicMatchFail(error));
 }
}


export function* fetchItemsSaga(action)
{
 yield put(actions.fetchItemsStart());
 try {
  const response = yield axios.get("http://api.steampowered.com/IEconDOTA2_570/GetGameItems/v0001/?key=7C8B37F899203B917EA9CA4607F86FBE&format=JSON&language=en");
  console.log(response.data);
  yield put(actions.fetchItemsSuccess(response.data));
 }
 catch (error)
 {
  yield put(actions.fetchItemsFail(error));
 }
}