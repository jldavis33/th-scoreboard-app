import React, { Component } from 'react';

const ScoreboardContext = React.createContext();

class Provider extends Component {
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
        return (
            <ScoreboardContext.Provider value={{
                players: this.state.players,
                highScore: this.getHighScore(),
                actions: {
                    changeScore: this.handleScoreChange,
                    removePlayer: this.handleRemovePlayer,
                    addPlayer: this.handleAddPlayer,
                }
            }}>
                { this.props.children}
            </ScoreboardContext.Provider>
        )
    }
}

export default Provider;
export const Consumer = ScoreboardContext.Consumer;
