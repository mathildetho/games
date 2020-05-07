import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Game from './Game';
import './GameList.css';

const GameList = () => {
    const [games, setGames] = useState([]);
    useEffect(() => {
        axios.get('https://wild-games.herokuapp.com/api/v1')
            .then(res => res.data)
            .then(data => setGames(data))
    }, [])

    
    const [rating, setRating] = useState(false);
    const filterRating = () => {
        setRating(!rating);
      };


    const deleteGame = (id) => {
        const filterGame = games.filter(game => game.id !== id);
        setGames(filterGame)
    }

    return (
        <div className='games'>
            <button className='filterbutton' onClick={() => filterRating()} >Click to show {rating ? ' all games' : ' the best games'}</button>
           <div className='games_container'>
                {games.filter(game => !rating || game.rating > 4.5).map(game => (
                    <Game 
                        key={game.id}
                        game={game}
                        deleteGame={deleteGame}  
                    />
                ))}
            </div>
        </div>
    );
}

export default GameList;
