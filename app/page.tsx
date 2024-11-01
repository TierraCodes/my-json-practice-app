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

  let [selectedElement, setSelectedElement]=useState(-1)

  let gameList = games.map((game) => 
    <li key={game.id} 
        onClick={() => setSelectedElement(game.id)}>
        {game.name}
        <span style = {{display: selectedElement == game.id ? "block": "none"}}>
          <p>Release Date: {game.releaseDate}</p>
          <p>Price: {game.price}</p>
        </span>
    </li>);
    
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
