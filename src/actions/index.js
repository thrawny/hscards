/**
 *
 * Created by thrawn on 15/11/15.
 */

import fetch from 'isomorphic-fetch';

export const REQUEST_SEARCH = 'REQUEST_SEARCH';
export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';

export const REQUEST_CARD = 'REQUEST_CARD';
export const RECEIVE_CARD = 'RECEIVE_CARD';

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
  const card = typeof json.error == 'number' ? {} : json[0];
  return {
    type: RECEIVE_CARD,
    name,
    card: card,
    receivedAt: Date.now()
  };
}

export function fetchSearch(text) {
  return dispatch => {
    dispatch(requestSearch(text));
    return fetch(`/api/search/${text}`)
      .then(response => response.json())
      .then(json => dispatch(receiveSearch(text, json)));
  }
}

export function fetchCard(name) {
  return dispatch => {
    dispatch(requestCard(name));
    return fetch(`/api/card/${name}`)
      .then(response => response.json())
      .then(json => dispatch(receiveCard(name, json)));
  }
}
