import './App.css';
import CardList from './components/card-list/card-list.component'
import React, { Component } from 'react'
import SearchBox from './components/search-box/search-box.component'

export class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchMonster: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users/').then(response => response.json()).then(users => this.setState({ monsters: users }))
    }

    handleChange = (e) => {
        this.setState({ searchMonster: e.target.value })
    }

    render() {
        const { monsters, searchMonster } = this.state;
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchMonster.toLowerCase())
        )
        return ( 
            <div className="container mx-auto px-10 py-10">
                <h1 className="text-7xl flex justify-center mb-4 text-green-500 font-extrabold">Monster Bigbused</h1>
                <div className="flex justify-center mb-4">
                    <SearchBox placeholder="search a monster" handleChange={this.handleChange} />
                </div>
                <div className="App grid grid-cols-4 gap-8">
                    <CardList monsters={filteredMonsters} />
                </div>
            </div>
        )
    }
}

export default App


