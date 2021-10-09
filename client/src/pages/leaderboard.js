import React, { Component, useEffect, useState} from 'react';
import Service from '../services/service';

const link = new Service();
const links = link.getLinks();
const promise = Promise.resolve(links);
let result = [];
promise.then((value) => {
  result = value;
  console.log(result);
});

const tableStyle = {
  border: '1px solid black',
  borderCollapse: 'collapse',
  textAlign: 'center',
  width: '100%'
}

const tdStyle = {
  border: '1px solid #85C1E9',
  background: 'white',
  padding: '5px'
};

const thStyle = {
  border: '1px solid #3498DB',
  background: '#3498DB',
  color: 'white',
  padding: '5px'
};

export default class Leaderboard extends Component {
  state = { 
    data: [{links}]
  };

  render(){
    return (
      <div className="card text-center py-5">  
        <div className="card-body py-auto">
          <h3>Here you can find the top 20 of most visited websites in the application</h3>
          <div className="my-5">
            <table style={tableStyle}>
              <tbody>
                <tr>
                  <th style={thStyle}>URL</th>
                  <th style={thStyle}>Visits</th>
                  <th style={thStyle}>Shortcode</th>
                </tr>
                {result.map(({ _id, url, visits, shortcode }) => (
                  <tr key={_id}>
                    <td style={tdStyle}><a href={url}>{url}</a></td>
                    <td style={tdStyle}>{visits}</td>
                    <td style={tdStyle}>{shortcode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}