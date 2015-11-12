/**
 *
 * Created by thrawn on 12/11/15.
 */


import Reflux from 'reflux';
import request from 'superagent';
import KEY from './../secret';
import CardActions from './CardActions';



const URL = 'https://omgvamp-hearthstone-v1.p.mashape.com/cards/';

const CardStore = Reflux.createStore({
  listenables: CardActions,
  getInitialState() {
    this.data = {};
    return {
      loading: false,
      data: this.data
    };
  },
  onLoad(name) {
    this._loading();
    console.log('card');
    request
      .get(URL+name)
      .query({collectible: 1})
      .set('X-Mashape-Key', KEY)
      .end(function(err, res) {
        if (!err) {
          this._update(res.body[0]);
        }
        else {
          console.log(err);
          this._update({})
        }
      }.bind(this));
  },
  _update(data) {
    this.data = data;
    this.trigger({
      data: this.data,
      loading: false
    });
  },
  _loading() {
    this.trigger({ loading: true })
  }
});


export default CardStore;