import React, { Component } from 'react';
import HockeySearchView from './HockeySearchView';
import HockeyDataView from './HockeyDataView';
import GraphView from './GraphView';
import sortBy from '../utilities/sortHelpers';
import viewHelpers from '../utilities/viewHelpers';
import dataHelpers from '../utilities/dataHelpers';

var url = window.location.hostname === 'localhost' ? 'http://localhost:3000/v1' : 'https://floating-tor-40582.herokuapp.com/v1';

class App extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            data: [],
            info: '',
            teams: []
        };

        this.searchTeamNames = this.searchTeamNames.bind(this);
        this.hockeySort = this.hockeySort.bind(this);
        this.getAll = this.getAll.bind(this);
        this.listChange = this.listChange.bind(this);
    };
    componentWillMount(){
      this.setState({info: '- Getting Teams List...'})
      fetch(url + "/standings/teams", { method: 'GET' }).then(function(response) {
          return response.json()
      }).then(function(data) {
          this.setState({teams: data, info: ''});
          viewHelpers.showById('teamList');
      }.bind(this)).catch(function(error) {
          console.log(error);
      });
    }
    searchTeamNames(e) {
        this.setState({info: '- Looking up teams...'})
        var teamName = e.target.value.trim();

        if (!teamName) {
            this.setState({ info: '' });
            viewHelpers.hideById('hockey-table');

            var tableHeaders = document.getElementsByTagName('th');
            for (var i = 0; i < tableHeaders.length; i++){
              tableHeaders[i].style.background = '';
            }

            return
        }

        var getUrl = url + "/standings/search/" + teamName;
        fetch(getUrl, { method: 'GET' }).then(function(response) {
            return response.json()
        }).then(function(json) {
            var data = json.data,
                hockeyData = dataHelpers.handleData(data);

            if (hockeyData.length > 0) {
                console.log('Setting Hockey Data: ')
                console.log(hockeyData);
                this.setState({ data: hockeyData, info: "- "+ hockeyData.length + " Team(s) Loaded..." })
                viewHelpers.showById('hockey-table');

            } else {
                viewHelpers.hideById('hockey-table');
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
      viewHelpers.hideById('hockey-table');
      viewHelpers.hideById('teamList');
    }
    getAll(){
      this.setState({info: '- Getting All Standings...'})
      console.log("getting all...")
      fetch(url + "/standings/search/a", { method: 'GET' }).then(function(response) {
          return response.json()
      }).then(function(json) {
          var data = json.data,
              hockeyData = dataHelpers.handleData(data);

          if (hockeyData.length > 0) {
              console.log('Setting Hockey Data: ')
              console.log(hockeyData);
              this.setState({ data: hockeyData, info: "- "+ hockeyData.length + " Team(s) Loaded..." })
              viewHelpers.showById('hockey-table');

          } else {
              viewHelpers.hideById('hockey-table');
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
    listChange(e){
      var index = e.nativeEvent.target.selectedIndex,
          teamName = encodeURI(e.nativeEvent.target[index].text),
          team = e.nativeEvent.target[index].text;

      this.setState({info: '- Getting All Standings for ' + team})
      fetch(url + "/standings/teams?name=" + teamName, { method: 'GET' }).then(function(response) {
          return response.json()
      }).then(function(json) {
          var data = json.data,
              hockeyData = dataHelpers.handleData(data);

          if (hockeyData.length > 0) {
              console.log('Setting Hockey Data: ')
              console.log(hockeyData);
              this.setState({ data: hockeyData, info: "- "+ hockeyData.length + " Team(s) Loaded..." })
              viewHelpers.showById('hockey-table');
              viewHelpers.showById('teamList');
          } else {
              viewHelpers.hideById('hockey-table');
              viewHelpers.hideById('teamList')
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
              <HockeySearchView listChange={this.listChange}
                                teams={this.state.teams}
                                getAll={this.getAll}
                                onKeyUp={this.searchTeamNames} />
              <HockeyDataView data={this.state.data} info={this.state.info} hockeySort={this.hockeySort}/>
              <GraphView graphData={this.state.data}/>
            </div>

        );
    }
}

export default App;
