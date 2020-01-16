import React, { Component } from 'react';
import axios from 'axios';

import State from '../global-state';

import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputEmail: '',
      inputPassword: '',
      invalidCredentials: false,
      invalidPassword: false
    };

    this.authenticate = this.authenticate.bind(this);
    this.register = this.register.bind(this);
  }

  updateEmailInputValue(evt) {
    this.setState({
      inputEmail: evt.target.value
    });
  }

  updatePasswordInputValue(evt) {
    this.setState({
      inputPassword: evt.target.value
    });
  }

  authenticate = (event) => {
    event.preventDefault();
    console.info(`Trying to authenticate user with email: ${this.state.inputEmail}`);

    axios
      .post('http://localhost:3001/api/authenticate', {email: this.state.inputEmail, password: this.state.inputPassword})
      .then(response => {
          State.setUser(response.data);
          this.props.history.push('/projects');
      }).catch(error => {
        error.response.status === 401 ?
          this.setState(previousState => {
            return {
              invalidPassword: true
            }
          }) : 
          this.setState(previousState => {
            return {
              invalidCredentials: true
            }
          });
      });
  }

  register = (event) => {
    event.preventDefault();
    this.props.history.push('/register');
  }

  render() {
    const invalidCredentials = this.state.invalidCredentials;
    const invalidPassword = this.state.invalidPassword;

    let errorMessage;

    if (invalidCredentials) {
        errorMessage = <div className="alert alert-danger" role="alert">Email and password are invalid!</div>;
    }

    if (invalidPassword) {
        errorMessage = <div className="alert alert-warning" role="alert">Wrong password! Please try again!</div>;
    }

    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card card-signin my-5">
                <div className="card-body">
                  <h5 className="card-title text-center">Bugsbunny Portal</h5>
                  {errorMessage}
                  <form className="form-signin">
                    <div className="form-label-group">
                      <input type="email" id="inputEmail" 
                             className="form-control" 
                             placeholder="Email address"
                             value = { this.state.inputEmail } onChange = { event => this.updateEmailInputValue(event) } 
                             required autoFocus />
                      <label htmlFor="inputEmail">Email address</label>
                    </div>
      
                    <div className="form-label-group">
                      <input type="password" id="inputPassword" 
                             className="form-control" 
                             placeholder="Password" 
                             value = { this.state.inputPassword } onChange = { event => this.updatePasswordInputValue(event) } 
                             required />
                      <label htmlFor="inputPassword">Password</label>
                    </div>
      
                    <button className="btn btn-lg btn-primary btn-block text-uppercase" onClick = {this.authenticate}>Sign in</button>
                    <hr className="my-4" />
                    <button className="btn btn-lg btn-google btn-block text-uppercase" onClick = {this.register}>Register</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
    );
  }
}

export default Login;