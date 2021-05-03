import { useEffect, useState } from 'react';
import '../style/main.css'
import Button from './Button';
import Card from './Card'
import SearchBar from './SearchBar';


const Main = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    ambilData();
  },[]);
  
  const ambilData = async() => {
    let data = await fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Indonesia');
    let response = await data.json();
    setTeams(response.teams)
  }

  return (
    <main className="container">
      {teams.map(team => (
        <Card
          key={team.idTeam}
          image={team.strTeamBadge}
          name={team.strTeam}
        />
      ))}
    </main>
  );
}

export default Main;