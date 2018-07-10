import * as actionTypes from './actionTypes';



export const fetchHeroes = () =>
{
  return {
      type: actionTypes.FETCH_HEROES};
};


export const fetchHeroesSuccess = (fetchedHeroes) =>
{
  return {
      type: actionTypes.FETCH_HEROES_SUCCESS,
      fetchedHeroes: fetchedHeroes
  };
};

export const fetchHeroesFail = (error) =>
{
  return {
      type: actionTypes.FETCH_HEROES_FAIL,
      error: error
  };
};

export const fetchHeroesStart = () =>
{
    return {
        type: actionTypes.FETCH_HEROES_START,
    };
};

export const fetchPublicMatches = () =>
{
    return {
        type: actionTypes.FETCH_PUBLIC_MATCHES
    };
};

export const fetchPublicMatchesStart = () =>
{
    return {
        type: actionTypes.FETCH_PUBLIC_MATCHES_START,
    };
};

export const fetchPublicMatchesSuccess = (fetchedPublicMatches,fetchedMatchId) =>
{
  return {
      type: actionTypes.FETCH_PUBLIC_MATCHES_SUCCESS,
      fetchedPublicMatches: fetchedPublicMatches,
      fetchedMatchId: fetchedMatchId
  };
};


export const fetchPublicMatchesFail = (error) =>
{
  return {
      type: actionTypes.FETCH_PUBLIC_MATCHES_FAIL,
      error: error
  };
};

export const fetchPublicMatch = () =>
{
    return {
        type: actionTypes.FETCH_PUBLIC_MATCH
    };
};

export const fetchPublicMatchStart = () =>
{
    return {
        type: actionTypes.FETCH_PUBLIC_MATCH_START,
    };
};

export const fetchPublicMatchSuccess = (randomedPlayer,fetchedPublicMatch) =>
{
  return {
      type: actionTypes.FETCH_PUBLIC_MATCH_SUCCESS,
      fetchedPublicMatch: fetchedPublicMatch,
      randomedPlayer: randomedPlayer
  };
};


export const fetchPublicMatchFail = (error) =>
{
  return {
      type: actionTypes.FETCH_PUBLIC_MATCH_FAIL,
      error: error
  };
};


export const fetchItems = () =>
{
    return {
        type: actionTypes.FETCH_ITEMS
    };
};

export const fetchItemsStart = () =>
{
    return {
        type: actionTypes.FETCH_ITEMS_START,
    };
};

export const fetchItemsSuccess = (items) =>
{
  return {
      type: actionTypes.FETCH_ITEMS_SUCCESS,
      items: items
  };
};


export const fetchItemsFail = (error) =>
{
  return {
      type: actionTypes.FETCH_ITEMS_FAIL,
      error: error
  };
};