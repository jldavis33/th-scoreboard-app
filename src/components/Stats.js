import React from 'react'

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

export default Stats;