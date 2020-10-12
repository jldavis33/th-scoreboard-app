import React from 'react';
import Player from './Player';
import { Consumer } from './Context';
import PropTypes from 'prop-types';

const PlayerList = (props) => {
    return (
        <Consumer>
            { context => (
                <React.Fragment>
                    {/* Players list */}
                    {context.players.map((player, index) =>
                        <Player
                            name={player.name}
                            score={player.score}
                            isHighScore={props.highScore === player.score}
                            id={player.id}
                            key={player.id.toString()}
                            index={index}
                        />
                    )}
                </React.Fragment>
            )}
        </Consumer>
    )
}

PlayerList.propTypes = {
    highScore: PropTypes.number,
}

export default PlayerList;