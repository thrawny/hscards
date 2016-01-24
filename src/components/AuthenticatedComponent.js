/**
 *
 * Created by thrawn on 23/01/16.
 */

import React from 'react';
import {connect} from 'react-redux';
import { routeActions } from 'redux-simple-router'

export default function requireAuthentication(Component) {

  class AuthenticatedComponent extends React.Component {

    componentWillMount() {
      if (!this.props.isAuthenticated) {
        //let redirectAfterLogin = this.props.location.pathname;
        this.props.dispatch(routeActions.push('/'));
      }
    }

    componentWillReceiveProps(nextProps) {
      if (!nextProps.isAuthenticated) {
        this.props.dispatch(routeActions.push('/'));
      }
    }

    render () {
      return (
        <div>
          {this.props.isAuthenticated === true
            ? <Component {...this.props}/>
            : <div>You cant be here. This is a bug.</div>
          }
        </div>
      )

    }
  }

  return connect(state => state.auth)(AuthenticatedComponent);

}
