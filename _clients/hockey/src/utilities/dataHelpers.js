var dataHelpers = {
    handleData: function(data){
      var hockeyData = [];
      for (var i = 0; i < data.length; i++) {
          hockeyData.push({ id: data[i].id, team_name: data[i].attributes['team-name'],
                            games: data[i].attributes.games,
                            wins: data[i].attributes.wins,
                            losses: data[i].attributes.losses,
                            losses_ot: data[i].attributes['losses-ot'],
                            points: data[i].attributes.points,
                            date: data[i].attributes.date
                         })
      }

      return hockeyData;
    }
}

export default dataHelpers;
