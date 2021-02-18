import React, { Component } from 'react';
import Button from './Button';
import Pokemon from './Pokemon';

export default class Pokedex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: this.props.pokemons,
      index: 0,
    }

    this.nextPokemon = this.nextPokemon.bind(this);
    this.handleClearFilter = this.handleClearFilter.bind(this);
  };

  nextPokemon() {
    if (this.state.index < this.state.pokemons.length - 1) {
      this.setState((prevState, _props) => ({
        ...prevState,
        index: prevState.index + 1,
      }))
    } else {
      this.setState((prevState, _props) => ({
        ...prevState,
        index: 0,
      }))
    }
  };

  getAllPokemonTypes() {
    const { pokemons } = this.props;
    return [...new Set(pokemons.reduce((types, { type }) => [...types, type], []))]
  }

  handleFilterByType(type) {
    this.setState({
      pokemons: this.props.pokemons,
      index: 0,
    })
    this.setState((prevState, _props) => ({
      ...prevState,
      pokemons: prevState.pokemons.filter(pokemon => pokemon.type === type),
    }))
  }

  handleClearFilter() {
    this.setState({
      pokemons: this.props.pokemons,
      index: 0,
    })
  }

  render() {
    const pokemonsTypes = this.getAllPokemonTypes();
    const { index } = this.state;
    return (
    <>
      <div className="pokedex">
        {this.state.pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)[index]}
      </div>
      <div className="btn">
        {pokemonsTypes.map(type => <Button key={type} type={type} onClick={() => this.handleFilterByType(type)} />)}
      </div>
       <Button type={'All'} onClick={this.handleClearFilter}/>
       <button className="btn" onClick={this.nextPokemon}>Próximo Pokemon</button>
    </>
    );
  }
}
