import React, {Component} from 'react';
  
export default class SignIn extends Component {
  state = { 
    email: '',
    password: ''
  };

  setEmail = (event) => {
      const email = {email: event.target.value };
      this.setState({ email });
  };

  setPassword = (event) => {
      const password = {password: event.target.value };
      this.setState({ password });
  };
  render() {
    return (
      <div className="card py-5">
        <div className="card-body text-center py-5 row">
            <h1 className="mb-5">Login Page</h1>
            <form className="mx-auto col-sm-6">
              <div className="mb-3">
                  <input className="form-control" id="email" type="email" onChange={this.setEmail} placeholder="Email"></input>
              </div>
              <div className="mb-3">
                <input className="form-control" id="password" type="password" name="password" onChange={this.setPassword} placeholder="Password"></input>
              </div>
              <div className="mb-3">
                <button onClick={this.login} type="button" className="btn btn-primary px-5">Login</button>
              </div>
            </form>
        </div>
      </div>
    );
  }
}
