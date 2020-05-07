import React from 'react';
import {Link} from 'react-router-dom';

const Game = ({game, deleteGame}) => {
    return (
    <div className='game_container'>
      <Link className='game_link' to={`/Games/${game.id}`}>
        <button><h4>{game.name}</h4></button>
      </Link>
      <button onClick={() => deleteGame(game.id)} className='delete'>
        Supprimer
      </button>
    </div>
  );
}

export default Game;
