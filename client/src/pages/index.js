import React, {Component} from 'react';
import Service from '../services/service';


export default class SignIn extends Component {

  constructor(props){
    super(props);
    this.state = { 
      email: '',
      password: '', 
      token: ''
    };
    this.login = this.login.bind(this);
  }

  setEmail = (event) => {
      const email = event.target.value ;
      this.setState({ email });
  };

  setPassword = (event) => {
      const password = event.target.value;
      this.setState({ password });
  };

  login() {
    const link = new Service();
    const res = link.login(this.state.email, this.state.password);
    const promise = Promise.resolve(res);
    let result = [];
    promise.then((value) => {
      result = value;
      let token = result.token;
      sessionStorage.setItem('token', JSON.stringify(token));
      this.setState({token});
      if (this.state.token) {
          this.props.history.push('/home');
      }
    });
  };

  render() {
    return (
      <div className="card py-5">
        <div className="card-body text-center py-5 row">
            <h1 className="mb-5">Login Page</h1>
            <form className="mx-auto col-sm-6" >
              <div className="mb-3">
                  <input className="form-control" id="email" type="email" onChange={this.setEmail} placeholder="Email" required></input>
              </div>
              <div className="mb-3">
                <input className="form-control" id="password" type="password" name="password" onChange={this.setPassword} placeholder="Password" required></input>
              </div>
              <div className="mb-3">
                <button type="button" onClick={this.login} className="btn btn-primary px-5">Login</button>
              </div>
            </form>
        </div>
      </div>
    );
  }
}