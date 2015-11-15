/**
 *
 * Created by thrawn on 15/11/15.
 */

import fetch from 'isomorphic-fetch';

export const REQUEST_SEARCH = 'REQUEST_SEARCH';
export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';
export const SEARCH = 'SEARCH';

export const SELECT_CARD = 'SELECT_CARD';
export const REQUEST_CARD = 'REQUEST_CARD';
export const RECEIVE_CARD = 'RECEIVE_CARD';

import KEY from '../secret';

//export const INVALIDATE_REDDIT = 'INVALIDATE_REDDIT';

export function search(text) {
  return {
    type: SEARCH,
    text
  }
}

export function selectCard(name) {
  return {
    type: SELECT_CARD,
    name
  }
}

function requestSearch(text) {
  return {
    type: REQUEST_SEARCH,
    text
  }
}

function receiveSearch(text, json) {
  const cards = typeof json.error == 'number' ? [] : json;
  return {
    type: RECEIVE_SEARCH,
    text: text,
    cards: cards,
    receivedAt: Date.now()
  };
}

function requestCard(name) {
  return {
    type: REQUEST_CARD,
    name
  }
}

function receiveCard(name, json) {
  return {
    type: RECEIVE_CARD,
    name,
    //card: json.data.children.map(child => child.data),
    card: json[0],
    receivedAt: Date.now()
  };
}

export function fetchSearch(text) {
  return dispatch => {
    dispatch(requestSearch(text));
    return fetch(`https://omgvamp-hearthstone-v1.p.mashape.com/cards/search/${text}?collectible=1`, {
      headers: {
        'X-Mashape-Key': KEY
      }
    }).then(response => response.json())
      .then(json => dispatch(receiveSearch(text, json)));
  }
}

export function fetchCard(name) {
  return dispatch => {
    dispatch(requestCard(name));
    return fetch(`https://omgvamp-hearthstone-v1.p.mashape.com/cards/${name}/?collectible=1`, {
      headers: {
        'X-Mashape-Key': KEY
      }
    })
      .then(response => {
        console.log(response);
        response.json()
      })
      .then(json => dispatch(receiveCard(name, json)));
  }
}
