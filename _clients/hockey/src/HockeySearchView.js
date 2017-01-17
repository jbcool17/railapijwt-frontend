import React, { Component } from 'react';

class HockeySearchView extends Component {

  render() {
    return (
      <div className="HockeySearchView">
          <h2>Hockey Search</h2>
          <input onKeyUp={this.props.onKeyUp} type="text" id="teamNames" placeholder="Enter Team Name"/>
          <button onClick={this.props.getAll}>Get All</button>
      </div>
    );
  }
}

export default HockeySearchView;
