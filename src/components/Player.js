import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter.js';
import Icon from './Icon.js';

class Player extends PureComponent {

    static propTypes = {
        name: PropTypes.string,
        score: PropTypes.number,
        isHighScore: PropTypes.bool,
        index: PropTypes.number,
        changeScore: PropTypes.func,
        removePlayer: PropTypes.func,
        id: PropTypes.number,
    }

    render() {
        const {
            name,
            score,
            isHighScore,
            index,
            changeScore,
            removePlayer,
            id
        } = this.props

        return (
            <div className="player">
                <span className="player-name">
                    <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
                    <Icon isHighScore={isHighScore} />
                    { name }
                </span>
        
                <Counter 
                    score={score}
                    index={index}
                    changeScore={changeScore}    
                />
            </div>
        );
    }
}

export default Player;