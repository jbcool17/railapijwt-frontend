import React, { Component } from 'react';
import '../styles/HockeyDataView.css';

class HockeyDataView extends Component {
    render() {
        var teamNodes = this.props.data.map(function(r) {
          var date = new Date(r.date);

            return (<tr key={r.id}id={r.id}>
                      <td>{r.team_name}</td>
                      <td>{r.games}</td>
                      <td>{r.wins}</td>
                      <td>{r.losses}</td>
                      <td>{r.losses_ot}</td>
                      <td>{r.points}</td>
                      <td>{date.toString()}</td>
                    </tr>
                );
        })
        return (
            <div className="HockeyDataView">
              <h2>Hockey Data <span className="info">{this.props.info}</span></h2>
               <table id='hockey-table'>
                <thead id='hockey-table-header' >
                  <tr>
                    <th id='teams'onClick={this.props.hockeySort}>Team</th>
                    <th id='games' onClick={this.props.hockeySort}>Games Played</th>
                    <th id='wins' onClick={this.props.hockeySort}>Wins</th>
                    <th id='losses' onClick={this.props.hockeySort}>Losses</th>
                    <th id='losses_ot' onClick={this.props.hockeySort}>OverTime Losses</th>
                    <th id='points' onClick={this.props.hockeySort}>Points</th>
                    <th id='date' onClick={this.props.hockeySort}>Record Created</th>
                  </tr>
                </thead>
                <tbody id='hockey-table-body'>
                  {teamNodes}
                </tbody>
              </table>
            </div>
        );
    }
}

export default HockeyDataView;
