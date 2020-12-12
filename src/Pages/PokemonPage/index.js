import React, { useEffect, useState } from 'react';
import {Pokemon, Stat} from './styles.js';

function PokemonPage(props){
    const [pokemon, setPokemon] = useState(false);
    const {id} = props.match.params;
    
    useEffect( () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then( res => res.json())
        .then( pokedex => setPokemon(pokedex))
        .catch( error => console.log(error))
    }, [id]);
    
    return(
        <div>
            {
                pokemon ? (
                    <Pokemon>
                        <div className={`pokemon__bg ${pokemon.types[0].type.name} `}></div>

                        <figure className="pokemon__image">
                            <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name}/>
                        </figure>

                        <div className="container">
                            <div className="pokemon__header">
                                <p className="pokemon__name"> { pokemon.name } <span> Nº { pokemon.id } </span> </p>
                                <progress value={pokemon.stats[0].base_stat} max={pokemon.stats[0].base_stat}></progress>
                                <p> {pokemon.stats[0].base_stat} / { pokemon.stats[0].base_stat } </p>

                                <div className="pokemon__types">
                                    { pokemon.types.map( type => {
                                        return(
                                            <span key={type.type.name}> { type.type.name } </span>
                                            )
                                        })
                                    }
                                </div>

                                <div className="pokemon__numbers">
                                    <p> <span> Height: </span> {pokemon.height / 10} m </p>
                                    <p> <span> Weight: </span> {pokemon.weight / 10} Kg </p>
                                </div>
                            </div>
                        </div>

                        <div className="pokemon__body">
                            <div className="container">
                                <nav className="pokemon__menu">
                                    <ul>
                                        <li> Stats </li>
                                        <li> Evolution </li>
                                        <li> Moves </li>
                                    </ul>
                                </nav>

                                <div className="pokemon__stats">
                                    { pokemon.stats.map( stat => {
                                        return(
                                            <div className={`pokemon__stat`} key={stat.stat.name}>
                                                {/* <progress value={stat.base_stat} max={150}></progress> */}
                                                <Stat value={stat.base_stat}>
                                                    <div className={`stat__value ${stat.stat.name}`}>{stat.base_stat}</div>
                                                </Stat>
                                                <p className="stat__name"> { stat.stat.name } </p>
                                            </div>
                                        )
                                    }) }
                                </div>
                            </div>
                        </div>
                    </Pokemon>
                    ) : ''
                }
        </div>
    )
}

export default PokemonPage