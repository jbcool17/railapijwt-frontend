import React, { Component } from 'react';
import HockeySearchView from './HockeySearchView';
import HockeyDataView from './HockeyDataView';
import HockeyTeamsView from './HockeyTeamsView';
import sortBy from './sortHelpers';

var url = window.location.hostname === 'localhost' ? 'http://localhost:3000/v1' : 'https://floating-tor-40582.herokuapp.com/v1';

class App extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            data: [],
            info: ''
        };

        this.searchTeamNames = this.searchTeamNames.bind(this);
        this.hockeySort = this.hockeySort.bind(this);
        this.getAll = this.getAll.bind(this);
    };
    searchTeamNames(e) {
        this.setState({info: '- Looking up teams...'})
        var teamName = e.target.value.trim();

        if (!teamName) {
            this.setState({ info: '' });
            document.getElementById("hockey-table").style.visibility = "hidden";

            var tableHeaders = document.getElementsByTagName('th');
            for (var i = 0; i < tableHeaders.length; i++){
              tableHeaders[i].style.background = '';
            }

            return
        }

        fetch(url + "/standings/search/" + teamName, { method: 'GET' }).then(function(response) {
            return response.json()
        }).then(function(json) {
            var data = json.data,
                hockeyData = [];

            for (var i = 0; i < data.length; i++) {
                hockeyData.push({ id: data[i].id, team_name: data[i].attributes['team-name'],
                                  games: data[i].attributes.games,
                                  wins: data[i].attributes.wins,
                                  losses: data[i].attributes.losses,
                                  losses_ot: data[i].attributes['losses-ot'],
                                  points: data[i].attributes.points
                               })
            }

            if (hockeyData.length > 0) {
                console.log('Setting Hockey Data: ')
                console.log(hockeyData);
                this.setState({ data: hockeyData, info: "- "+ hockeyData.length + " Team(s) Loaded..." })
                document.getElementById("hockey-table").style.visibility = "";

            } else {
                document.getElementById("hockey-table").style.visibility = "hidden";
                var tableHeaders = document.getElementsByTagName('th');
                for (var k = 0; k < tableHeaders.length; k++){
                  tableHeaders[k].style.background = '';
                }
                this.setState({info: '- Not Found.'})
            }

        }.bind(this)).catch(function(error) {
            console.log('ERROR')
            console.log(error);
        });;
    }
    hockeySort(e){
      var id = e.target.id,
          tableHeaders = document.getElementsByTagName('th'),
          d = sortBy[e.target.id](this.state.data);
      this.setState({data: d});
      console.log("Sorting: " + id)

      for (var l = 0; l < tableHeaders.length; l++){
        tableHeaders[l].style.background = '';
      }
      document.getElementById(id).style.background = "darkblue";
    }
    componentDidMount() {
      document.getElementById("hockey-table").style.visibility = "hidden";
    }
    getAll(){
      console.log("getting all")
      fetch(url + "/standings/search/a", { method: 'GET' }).then(function(response) {
          return response.json()
      }).then(function(json) {
          var data = json.data,
              hockeyData = [];

          for (var i = 0; i < data.length; i++) {
              hockeyData.push({ id: data[i].id, team_name: data[i].attributes['team-name'],
                                games: data[i].attributes.games,
                                wins: data[i].attributes.wins,
                                losses: data[i].attributes.losses,
                                losses_ot: data[i].attributes['losses-ot'],
                                points: data[i].attributes.points
                             })
          }

          if (hockeyData.length > 0) {
              console.log('Setting Hockey Data: ')
              console.log(hockeyData);
              this.setState({ data: hockeyData, info: "- "+ hockeyData.length + " Team(s) Loaded..." })
              document.getElementById("hockey-table").style.visibility = "";

          } else {
              document.getElementById("hockey-table").style.visibility = "hidden";
              var tableHeaders = document.getElementsByTagName('th');
              for (var k = 0; k < tableHeaders.length; k++){
                tableHeaders[k].style.background = '';
              }
              this.setState({info: '- Not Found.'})
          }

      }.bind(this)).catch(function(error) {
          console.log('ERROR')
          console.log(error);
      });
    }
    render() {

        return (
            <div className="Hockey">
              <div className='title'>
                <h2>Hockey API</h2>
              </div>
              <HockeyTeamsView />
              <HockeySearchView getAll={this.getAll} onKeyUp={this.searchTeamNames}/>
              <HockeyDataView data={this.state.data} info={this.state.info} hockeySort={this.hockeySort}/>
            </div>
        );
    }
}

export default App;
