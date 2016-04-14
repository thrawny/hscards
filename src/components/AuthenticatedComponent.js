/**
 *
 * Created by thrawn on 23/01/16.
 */

import React from 'react';
import {connect} from 'react-redux';
import { routerActions } from 'react-router-redux'

export default function requireAuthentication(Component) {

  class AuthenticatedComponent extends React.Component {

    componentWillMount() {
      if (!this.props.isAuthenticated) {
        //let redirectAfterLogin = this.props.location.pathname;
        this.props.dispatch(routerActions.push('/'));
      }
    }

    componentWillReceiveProps(nextProps) {
      if (!nextProps.isAuthenticated) {
        this.props.dispatch(routerActions.push('/'));
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
