import React from 'react';
import Header from './Header.js';
import PlayerList from './PlayerList.js'
import AddPlayerForm from './AddPlayerForm.js';

const App = () => {
    return (
        <div className="scoreboard">
            <Header />
            <PlayerList />
            <AddPlayerForm />
        </div>
    );
}

export default App;
