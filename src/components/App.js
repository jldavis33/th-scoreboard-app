import React, {Component} from 'react';
import Header from './Header.js';
import Player from './Player.js';
import AddPlayerForm from './AddPlayerForm.js';

class App extends Component {
    state = {
        players: [
            {
                name: "Guil",
                score: 0,
                id: 1
            },
            {
                name: "Treasure",
                score: 0,
                id: 2
            },
            {
                name: "Ashley",
                score: 0,
                id: 3
            },
            {
                name: "James",
                score: 0,
                id: 4
            }
        ]
    };


    // player id counter
    prevPlayerId = 4;

    handleScoreChange = (delta, index) => {        
        this.setState( (prevState) => {
            return prevState.players[index].score += delta    
        });
    }

    handleRemovePlayer = (id) => {
        this.setState(prevState => {
            return {
                players: prevState.players.filter(p => p.id !== id)
            };
        });
    }

    handleAddPlayer = (name) => {
        this.setState({
            players: [
                ...this.state.players,
                {
                    name,
                    score: 0,
                    id: this.prevPlayerId += 1
                }
            ]
        })

    }

    render() {
        return (
            <div className="scoreboard">
                <Header
                    title="Scoreboard"
                    players={this.state.players}
                />

                {/* Players list */}
                {this.state.players.map( (player, index) =>
                    <Player
                        name={player.name}
                        score={player.score}
                        id={player.id}
                        key={player.id.toString()}
                        index={index}
                        changeScore={this.handleScoreChange}
                        removePlayer={this.handleRemovePlayer}
                    />
                )}

                <AddPlayerForm 
                    addPlayer={this.handleAddPlayer}
                />
            </div>
        );
    }
}

export default App;
