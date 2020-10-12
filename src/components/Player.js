import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './Context';
import Counter from './Counter.js';
import Icon from './Icon.js';

class Player extends PureComponent {

    static propTypes = {
        index: PropTypes.number,
    }

    render() {
        const {
            index
        } = this.props

        return (
            <Consumer>
                { ({ players, actions, highScore}) => (
                    <div className="player">
                        <span className="player-name">
                            <button className="remove-player"
                                onClick={() => actions.removePlayer(players[index].id)}>
                                ✖
                            </button>
                            <Icon isHighScore={highScore === players[index].score } />
                            { players[index].name }
                        </span>

                        <Counter index={index} />
                    </div>
                )}
            </Consumer>
        );
    }
}

export default Player;