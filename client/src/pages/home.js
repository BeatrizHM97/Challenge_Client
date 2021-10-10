import React, {Component} from 'react';
import Service from '../services/service';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      url: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({url: event.target.value});
  }

  handleSubmit(event) {
    const link = new Service();
    const shortcode = link.postShortcode(this.state.url);
    event.preventDefault();
  }

  render(){
    return (
        
      <div className="card text-center py-5">
        <div className="card-body py-auto row">
          <h3>This aplication consist to generate a random shortcode for each specific web site you enter in the form.</h3>
          <form className="py-5 m-auto col-sm-6" onSubmit={this.handleSubmit}>
            <label>Enter an https:// URL:</label>&nbsp;
            <input className="my-2 form-control" type="url" name="url" id="url" value={this.state.url} onChange={this.handleChange} placeholder="https://example.com" pattern="https://.*" size="30" required/>&nbsp;
            <input type="submit" className="btn btn-primary my-3  px-5" value="Generate"/>
          </form>
        </div>
      </div>
    );
  }
}