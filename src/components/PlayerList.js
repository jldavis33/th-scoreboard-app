import React from 'react';
import Player from './Player';

const PlayerList = ({players, handleRemovePlayer, handleScoreChange, highScore}) => {

    return (
        <React.Fragment>
            {/* Players list */}
            {players.map((player, index) =>
                <Player
                    name={player.name}
                    score={player.score}
                    isHighScore={highScore === player.score}
                    id={player.id}
                    key={player.id.toString()}
                    index={index}
                    changeScore={handleScoreChange}
                    removePlayer={handleRemovePlayer}
                />
            )}
        </React.Fragment>
    )
}

export default PlayerList;