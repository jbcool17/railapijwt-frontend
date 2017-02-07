import React, { Component } from 'react';
import { LineChart } from 'react-chartkick';

class GraphView extends Component {
  render() {
    var data = this.props.graphData.map(function(d){
      var date = new Date(d.date)
      var test = {}
      test[date] = d.points
      return {'name': d.team_name, "data": test}
    });
    console.log(data)
    // data = [{"team":d.team_name, "data": {new Date(d.date): d.points } }];

    return (
      <div className="GraphView">
          <h2>Graph</h2>
          <LineChart data={data} library={{backgroundColor: "#eee"}} legend={true} xtitle="Date" ytitle="Points" />
      </div>
    );
  }
}

export default GraphView;
