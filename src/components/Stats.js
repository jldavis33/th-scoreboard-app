import React from 'react';
import PropTypes from 'prop-types';

const Stats = ({players}) => {
    const playerCount = players.length;

    const totalPoints = players.reduce((scoreCount, player) => {
        return scoreCount + player.score
    }, 0);

    return (
        <table className="stats">
            <tbody>
                <tr>
                    <td>Players:</td>
                    <td>{ playerCount }</td>
                </tr>
                <tr>
                    <td>Total Points:</td>
                    <td>{ totalPoints }</td>
                </tr>
            </tbody>
        </table>
    );
}


Stats.propTypes = {
    players: PropTypes.arrayOf(PropTypes.shape({  // use `.shape` to type-check the properties in the object(s)
        score: PropTypes.number
    }))
}

export default Stats;