import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './GameDetail.css';

const GameDetail = (props) => {
    const [game, setGame] = useState([]);
    useEffect(() => {
        const idgame = props.match.params.id;
        axios.get('https://wild-games.herokuapp.com/api/v1')
            .then(res => res.data)
            .then(data => setGame(data.filter(game => game.id == idgame)))
    }, [])

    const released = new Date(game.map(g=>g.released))
    
    const handlereturn = () => {
        props.history.goBack()
    }

    return (
    <div className='game'>
        <button onClick={() => handlereturn()}>retour</button>
        {game.map(g => (
            <div className="game_detail" key={g.id}>
                <img className='game_img' src={g.background_image} alt={g.name} />
                    <div className='game_text'>
                        <h4>{g.name} ({released.toLocaleDateString()})</h4>
                        <h5>{g.rating}/5</h5>
                        <div className='genre'>
                            {g.genres.map(genre => (
                                <p key={genre.id}>{genre.name} : {genre.games_count}</p>
                            ))}
                        </div>
                    </div>
                    <div className="video">
                        <video src={g.clip.clip} width='100%'  height='100%' controls />
                    </div>
                <div className='game_screen'>
                        {g.short_screenshots.filter(screen => screen.image !== g.background_image).map(screen => (
                            <img key={screen.id} src={screen.image} alt={`screenshot ${screen.id}`} />
                        ))}
                </div>
            </div>
        ))}
    </div>
  );
}

export default GameDetail;
