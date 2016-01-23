/**
 *
 * Created by thrawn on 15/11/15.
 */


import { combineReducers } from 'redux';
import jwtDecode from 'jwt-decode';

import {
  REQUEST_SEARCH,
  RECEIVE_SEARCH,

  RECEIVE_CARD,
  REQUEST_CARD,

  REQUEST_LOGIN,
  RECEIVE_LOGIN_SUCCESS,
  RECEIVE_LOGIN_FAILURE,

  REQUEST_LOGOUT
} from '../actions';


export function search(state = {
  isFetching: false,
  cards: []
}, action) {
  switch(action.type) {
    case REQUEST_SEARCH:
      return  {
        isFetching: true,
        cards: []
      };
    case RECEIVE_SEARCH:
      return {
        isFetching: false,
        cards: action.cards
      };
    default:
      return state;
  }
}

export function card(state = {
  isFetching: false,
  card: {}
}, action) {
  switch (action.type) {
    case REQUEST_CARD:
      return {
        isFetching: true,
        card: {}
      };
    case RECEIVE_CARD:
      return {
        isFetching: false,
        card: action.card
      };
    default:
      return state;
  }
}

export function auth(state = {
  isFetching: false,
  isAuthenticated: false,
  token: null,
  email: null,
  statusText: null,
  statusCode: null
}, action) {
  switch (action.type) {
    case REQUEST_LOGIN:
      return Object.assign({}, state, {
        isFetching: true,
        statusText: null
      });
    case RECEIVE_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        token: action.token,
        email: jwtDecode(action.token).email
      });
    case RECEIVE_LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        token: null,
        email: null,
        statusText: 'Bad username/password',
        statusCode: action.statusCode
      });
    case REQUEST_LOGOUT:
      return Object.assign({}, state, {
        isAuthenticated: false,
        token: null,
        email: null,
      });
    default:
      return state;
  }
}
