/**
 * Created by thrawn on 23/01/16.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchProfileData } from '../actions'

class ProfilePage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProfileData())

  }
  render() {
    return (
      <div>{this.props.data}</div>
    )
  }
}


export default connect(state => state.profile)(ProfilePage);