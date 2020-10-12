import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './Context';

const Counter = ({ index }) => {
    return (
        <Consumer>
            { ({ actions, players }) => {
                return (
                    <div className="counter">
                        <button className="counter-action decrement" onClick={() => actions.changeScore(-1, index)}> - </button>
                        <span className="counter-score">{ players[index].score }</span>
                        <button className="counter-action increment" onClick={() => actions.changeScore(+1, index)}> + </button>
                    </div>
                )
            }}
        </Consumer>
    )
}

Counter.propTypes = {
    index: PropTypes.number,
}

export default Counter;