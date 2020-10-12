import React from 'react';
import Player from './Player';
import { Consumer } from './Context';

const PlayerList = () => {
    return (
        <Consumer>
            { context => {            
                return (
                    <React.Fragment>
                        {/* Players list */}
                        {context.players.map((player, index) =>
                            <Player
                                name={player.name}
                                score={player.score}
                                isHighScore={context.highScore === player.score}
                                id={player.id}
                                key={player.id.toString()}
                                index={index}
                            />
                        )}
                    </React.Fragment>
            )}}
        </Consumer>
    )
}

export default PlayerList;