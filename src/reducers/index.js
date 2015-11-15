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
  SEARCH,
  SELECT_CARD
} from '../actions';


function search(state = '', action) {
  switch (action.type) {
    case SEARCH:
      return action.text;
    default:
      return state;
  }
}

function searchResults(state = {
  isFetching: false,
  cards: []
}, action) {
  switch(action.type) {
    case REQUEST_SEARCH:
      return {
        isFetching: true,
        cards: state.cards.slice()
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

function selectCard(state = '', action) {
  switch (action.type) {
    case SELECT_CARD:
      return action.name;
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
  search,
  searchResults,
  selectCard,
  cardResult
});

export default rootReducer;
