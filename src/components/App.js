import React, {Component} from 'react';
import { Provider } from './Context'
import Header from './Header.js';
import PlayerList from './PlayerList.js'
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
        this.setState( prevState => {
            return prevState.players[index].score += delta    
        });
    }

    handleRemovePlayer = (id) => {
        this.setState( prevState => {
            return {
                players: prevState.players.filter(p => p.id !== id)
            };
        });
    }

    handleAddPlayer = (name) => {
        this.setState( prevState => {
            return {
                players: [
                    ...prevState.players,
                    {
                        name,
                        score: 0,
                        id: this.prevPlayerId += 1
                    }
                ]
            }
        })
    }

    getHighScore = () => {
        const scores = this.state.players.map(({ score }) => score);
        const highScore = Math.max(...scores)
        if (highScore) {
            return highScore;
        } 
        return null;
    };


    render() {
        const highScore = this.getHighScore()
        
        return (
            <Provider value={{
                players: this.state.players,
                actions: {
                    changeScore: this.handleScoreChange,
                    removePlayer: this.handleRemovePlayer,
                    addPlayer: this.handleAddPlayer
                }
            }}>
                <div className="scoreboard">
                    <Header />
                    <PlayerList highScore={highScore} />
                    <AddPlayerForm />
                </div>
            </Provider>
        );
    }
}

export default App;
