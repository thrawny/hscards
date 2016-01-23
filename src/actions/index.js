/**
 *
 * Created by thrawn on 15/11/15.
 */

import fetch from 'isomorphic-fetch';
import { routeActions } from 'redux-simple-router'

export const REQUEST_SEARCH = 'REQUEST_SEARCH';
export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';

export const REQUEST_CARD = 'REQUEST_CARD';
export const RECEIVE_CARD = 'RECEIVE_CARD';

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const RECEIVE_LOGIN_SUCCESS = 'RECEIVE_LOGIN_SUCCESS';
export const RECEIVE_LOGIN_FAILURE = 'RECEIVE_LOGIN_FAILURE';

export const REQUEST_LOGOUT = 'REQUEST_LOGOUT';
//export const RECEIVE_LOGOUT = 'RECEIVE_LOGOUT';

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

function requestLogin() {
  return {
    type: REQUEST_LOGIN
  }
}

function receiveLoginFailure(error) {
  return {
    type: RECEIVE_LOGIN_FAILURE,
    statusCode: error.response.status,
    statusText: error.response.statusText
  }
}
function receiveLoginSuccess(email, token) {
  return {
    type: RECEIVE_LOGIN_SUCCESS,
    email,
    token
  }
}

export function login(email, password, redirect='/') {
  return dispatch => {
    dispatch(requestLogin());
    return fetch('/auth/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    })
      .then(response => {
        if (response.status === 403) {
          const error = new Error(response.statusText);
          error.response = response;
          throw error
        }
        return response;
      })
      .then(response => response.json())
      .then(json => {
        dispatch(receiveLoginSuccess(json.email, json.token));
        dispatch(routeActions.push(redirect));
      })
      .catch(error => {
        dispatch(receiveLoginFailure(error))
      })

  }

}

export function logout() {
  return {
    type: REQUEST_LOGOUT
  }
}