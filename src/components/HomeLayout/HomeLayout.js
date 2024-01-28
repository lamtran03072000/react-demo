import React, { Component } from 'react';
import Header from './Header';

export default class HomeLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="d-flex">
          <div className="w-50"></div>
          <div className="w-50"></div>
        </div>
      </div>
    );
  }
}
