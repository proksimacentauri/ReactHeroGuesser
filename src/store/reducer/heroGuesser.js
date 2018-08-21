import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
    fetchedHeroes: [],
    fetchedPublicMatches: [],
    items: [],
    randomId: 0,
    fetchedMatchId: null,
    fetchedPublicMatch: null,
    randomedPlayer: null,
    gameGoing: null,
    error: false,
    gameId: '',
    loading: false 
};

const fetchHeroesStart = (state,action) =>
{
 return updateObject(state,{loading: true});
}

const fetchHeroesFail = (state,action) =>
{
 return updateObject(state,{loading: false});
}

const fetchHeroesSuccess = (state,action) =>
{
 return updateObject(state,{fetchedHeroes: action.fetchedHeroes,
    loading: false});
}

const fetchPublicMatchesStart = (state,action) =>
{
 return updateObject(state,{loading: true});
}

const fetchPublicMatchesFail = (state,action) =>
{
 return updateObject(state,{loading: false});
}

const fetchPublicMatchesSuccess = (state,action) =>
{
 return updateObject(state,{fetchedPublicMatches: action.fetchedPublicMatches, fetchedMatchId: action.fetchedMatchId,
    loading: false});
}

const fetchPublicMatchStart = (state,action) =>
{
 return updateObject(state,{loading: true});
}

const fetchPublicMatchFail = (state,action) =>
{
 return updateObject(state,{loading: false});
}

const fetchPublicMatchSuccess = (state,action) =>
{
 return updateObject(state,{fetchedPublicMatch: action.fetchedPublicMatch, randomId: action.randomId, randomedPlayer: action.randomedPlayer,
    loading: false});
}

const fetchItemsStart = (state,action) =>
{
 return updateObject(state,{loading: true});
}

const fetchItemsFail = (state,action) =>
{
 return updateObject(state,{loading: false});
}

const fetchItemsSuccess = (state,action) =>
{
 return updateObject(state,{items: action.items,
    loading: false});
}

const gameStart = (state,action) =>
{
 return updateObject(state,{gameGoing: true});
}

const gameEnd  = (state,action) =>
{
 return updateObject(state,{gameGoing: false});
}

const newGame = (state,action) =>
{
 return updateObject(state,{gameGoing: true});
}

const getGameUrlSuccess = (state,action) =>
{
 return updateObject(state,{gameId: action.gameId});
}

const fetchUrlMatchStart = (state,action) =>
{
 return updateObject(state,{loading: true});
}

const fetchUrlMatchFail = (state,action) =>
{
 return updateObject(state,{loading: false});
}

const fetchUrlMatchSuccess = (state,action) =>
{
 return updateObject(state,{fetchedPublicMatch: action.fetchedPublicMatch, randomId: action.randomId, randomedPlayer: action.randomedPlayer,
    loading: false});
}

const reducer = (state = initialState, action) =>
{
 if(action.type === actionTypes.FETCH_HEROES_START)
 {
     return fetchHeroesStart(state,action);
 }
 if(action.type === actionTypes.FETCH_HEROES_SUCCESS)
 {
     return fetchHeroesSuccess(state,action);
 }
 if(action.type === actionTypes.FETCH_HEROES_FAIL)
 {
     return fetchHeroesFail(state,action);
 }
 if(action.type === actionTypes.FETCH_PUBLIC_MATCHES_START)
 {
     return fetchPublicMatchesStart(state,action);
 }
 if(action.type === actionTypes.FETCH_PUBLIC_MATCHES_SUCCESS)
 {
     return fetchPublicMatchesSuccess(state,action);
 }
 if(action.type === actionTypes.FETCH_PUBLIC_MATCHES_FAIL)
 {
     return fetchPublicMatchesFail(state,action);
 }
 if(action.type === actionTypes.FETCH_PUBLIC_MATCH_START)
 {
     return fetchPublicMatchStart(state,action);
 }
 if(action.type === actionTypes.FETCH_PUBLIC_MATCH_SUCCESS)
 {
     return fetchPublicMatchSuccess(state,action);
 }
 if(action.type === actionTypes.FETCH_PUBLIC_MATCH_FAIL)
 {
     return fetchPublicMatchFail(state,action);
 }
 if(action.type === actionTypes.FETCH_ITEMS_START)
 {
     return fetchItemsStart(state,action);
 }
 if(action.type === actionTypes.FETCH_ITEMS_SUCCESS)
 {
     return fetchItemsSuccess(state,action);
 }
 if(action.type === actionTypes.FETCH_ITEMS_FAIL)
 {
     return fetchItemsFail(state,action);
 }
 if(action.type === actionTypes.GAME_START)
 {
     return gameStart(state,action);
 }
 if(action.type === actionTypes.GAME_END)
 {
     return gameEnd(state,action);
 }
 if(action.type === actionTypes.NEW_GAME)
 {
  return newGame(state,action);
 }
 if(action.type === actionTypes.GAME_URL_SUCCESS)
 {
  return getGameUrlSuccess(state,action);
 }
 if(action.type === actionTypes.FETCH_URL_MATCH_START)
 {
     return fetchUrlMatchStart(state,action);
 }
 if(action.type === actionTypes.FETCH_URL_MATCH_SUCCESS)
 {
     return fetchUrlMatchSuccess(state,action);
 }
 if(action.type === actionTypes.FETCH_URL_MATCH_FAIL)
 {
     return fetchUrlMatchFail(state,action);
 }
 return state;
}

export default reducer;