import React, { PureComponent } from 'react';
import Counter from './Counter.js';

class Player extends PureComponent {
    render() {
        const {
            name,
            score,
            index,
            changeScore,
            removePlayer,
            id
        } = this.props

        return (
            <div className="player">
            <span className="player-name">
                <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
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