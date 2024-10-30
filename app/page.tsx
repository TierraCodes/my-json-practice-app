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

  let gameList = games.map((game) => 
    <li key={game.id} onClick={() => handleClick(game.releaseDate, game.price)}>{game.name}</li>);

  const handleClick = (date, cost) => {
    isClicked = true
    releaseDate = date
    price = cost
  }

  let isClicked = false
  let price = '0'
  let releaseDate = 'NA'

  return (
    <div>
      <h1>List of Cool Games:</h1>
      <aside>Click a title for more info!</aside>
      <ul>
        {isClicked ? gameList + ` - Release Date: ${releaseDate} - Price: ${price}`: gameList}
      </ul>
    </div>
  );
}