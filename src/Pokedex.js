import React, { Component } from 'react';
import Pokemon from './Pokemon';

export default class Pokedex extends Component {
  constructor() {
    super();

    this.state = {
      pokemonType: '',
    }

    this.handleFilterByFire = this.handleFilterByFire.bind(this);
  }

  handleFilterByFire() {
    console.log('Fogo!') 
  }

  render() {
    return (
    <>
      <div className="pokedex">
        {this.props.pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
      </div>
      <button className="button" onClick={this.handleFilterByFire}>Fire</button>
    </>
    );
  }
}
