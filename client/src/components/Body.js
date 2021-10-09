import React, { Component } from 'react';
//import axios from 'axios';


export default class Body extends Component {

    state = { 
        email: '',
        password: ''
    };

    setEmail = (event) => {
        const email = {email: event.target.value };
        console.log(email);
        this.setState({ email });
    };
    
    setPassword = (event) => {
        const password = {password: event.target.value };
        console.log(password);
        this.setState({ password });
    };
    render() {
        return (
            <>
                <div className="card-header text-end">
                    <p>Challenge</p>
                </div>
                <div className="card-body text-center">
                    <form>
                    <div className="mb-3">
                        <label className="form-label label"> 
                        <input id="email" type="email" onChange={this.setEmail} placeholder="Email"></input>
                        </label>
                    </div>
                    <div className="mb-3">
                        <label className="form-label label">
                        <input id="password" type="password" name="password" onChange={this.setPassword} placeholder="Password"></input>
                        </label>
                    </div>
                    <button onClick={this.login} type="button" className="btn btn-primary">Login</button>
                    </form>
                </div>
            
            </>
        )
    }
}
