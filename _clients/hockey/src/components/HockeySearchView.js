import React, { Component } from 'react';

class HockeySearchView extends Component {
  render() {
    var teams = this.props.teams.map(function(team){
      return (<option key={team} id={team}>{team}</option>)
    });
    return (
      <div className="HockeySearchView">
          <h2>Hockey Search</h2>
          <p>Data Updated Daily</p>
          <input onKeyUp={this.props.onKeyUp} type="text" id="teamNames" placeholder="Enter Team Name"/>
          <button onClick={this.props.getAll}>Get All</button>
          <select onChange={this.props.listChange} id='teamList'>
            <option>Get All Dates for Specific Team</option>
            {teams}
          </select>
      </div>
    );
  }
}

export default HockeySearchView;
