'use client'

import { useState, useEffect } from "react";


export default function Home() {

  let [games, setGames] = useState([]);

  useEffect(() => {
    fetch("games.json")
      .then(response => response.json())
      .then(data => {
        setGames(data.games)
      })
  }, []);

  let gameList = games.map((game) => <li key={game.id} onClick={() => handleClick(game.name)}>{game.name}</li>)

  const handleClick = (game) => {
    alert(`${game} was clicked`)
  }

  return (
    <div>
      <h1>List of Cool Games:</h1>
      <aside>Click a title for more info!</aside>
      <ul>
        {gameList}
      </ul>
    </div>
  );
}
