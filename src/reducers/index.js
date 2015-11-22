/**
 *
 * Created by thrawn on 15/11/15.
 */


import { combineReducers } from 'redux';

import {
  REQUEST_SEARCH,
  RECEIVE_SEARCH,
  RECEIVE_CARD,
  REQUEST_CARD,
} from '../actions';


function searchResults(state = {
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

function cardResult(state = {
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

const rootReducer = combineReducers({
  searchResults,
  cardResult
});

export default rootReducer;
