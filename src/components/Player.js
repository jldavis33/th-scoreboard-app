import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './Context';
import Counter from './Counter.js';
import Icon from './Icon.js';

class Player extends PureComponent {

    static propTypes = {
        name: PropTypes.string,
        score: PropTypes.number,
        index: PropTypes.number,
        id: PropTypes.number,
    }

    render() {
        const {
            name,
            score,
            index,
            id
        } = this.props

        return (
            <Consumer>
                { context => (
                    <div className="player">
                        <span className="player-name">
                            <button className="remove-player" onClick={() => context.actions.removePlayer(id)}>✖</button>
                            <Icon isHighScore={context.highScore === score} />
                            {name}
                        </span>

                        <Counter score={score} index={index} />
                    </div>
                )}
            </Consumer>
        );
    }
}

export default Player;