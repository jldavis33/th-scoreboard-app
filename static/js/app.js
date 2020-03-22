// React Component
// ...note: components are required to have "capital" name
function Header(props) { // note: `props` parameter receives attributes from a React element
    return (
        <header>
            <h1>{props.title}</h1>
            <span className="stats">Players: {props.totalPlayers}</span>
        </header>
    );
}

// Note: Same component as "Arrow Function"
// ...parenthesis after arrow is optional
// const Header = () => (
//   <header>
//     <h1>Scoreboard</h1>
//     <span className="stats">Players: 1</span>
//   </header>
// );


function Player(props) {
    return (
        <div className="player">
            <span className="player-name">
                <button className="remove-player" onClick={ () => props.removePlayer(props.id) }>✖</button>
                {props.name}
            </span>

            {/* You can use other components within your component */}
            <Counter />
        </div>
    );
}

class Counter extends React.Component {
    // TODO: study class

    // constructor() {
    //   super()
    //   this.state = {  // must be named "state"
    //     score: 0
    //   };
    // }
    //...or the following
    state = {
        score: 0
    }

    incrementScore = () => {
        this.setState(prevState => {
            return {
                score: prevState.score + 1
            }
        });
    }

    decrementScore = () => {
        if (this.state.score > 0)
            // this.setState({
            //   score: this.state.score - 1
            // });
            // NOTE:  pass previous state as updates to state are async
            //...the callback function passed here was written for example of a normal function
            //...vs. the above => function
            this.setState(function (prevState) {
                const updatedScore = {
                    score: prevState.score - 1
                }
                return updatedScore
            });
    }

    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
                <span className="counter-score">{this.state.score}</span>
                <button className="counter-action increment" onClick={this.incrementScore}> + </button>
                {/* <button className="counter-action increment" onClick={this.incrementScore.bind(this)}> + </button> */}
                {/* <button className="counter-action increment" onClick={() => this.incrementScore()}> + </button> */}
            </div>
        );
    }
}

class App extends React.Component {
    state = {
        players: [
            {
                name: 'Josh',
                id: 1
            },
            {
                name: 'Tom',
                id: 2
            },
            {
                name: 'Jeff',
                id: 3
            },
            {
                name: 'Dan',
                id: 4
            }
        ]
    }

    handleRemovePlayer = (id) => {
        this.setState( prevState => {
            return {
                players: prevState.players.filter( p => p.id !== id)
            }
        });
    }

    render = () => {
        return (
            <div className="scoreboard">
                <Header
                    title="Scoreboard"
                    totalPlayers={this.state.players.length}
                />

                {/* Players list */}
                {this.state.players.map((player) => (
                    <Player
                        name={player.name}
                        id={player.id}
                        key={player.id.toString()}
                        removePlayer={this.handleRemovePlayer}
                    />
                ))}
            </div>
        )
    }
}


// Mount to the DOM
ReactDOM.render(
    <App />, // Note: JSX tag matches function "App(), include space"
    document.getElementById('root')
);

// "state" is only available to class created componenets