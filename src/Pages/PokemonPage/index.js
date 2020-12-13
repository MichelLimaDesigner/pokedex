import React, { useEffect, useState } from 'react';
import {Pokemon, Stat} from './styles.js';

function PokemonPage(props){
    const [pokemon, setPokemon] = useState(false);
    const [moves, setMoves] = useState(false);
    const {id} = props.match.params;
    
    useEffect( () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then( res => res.json())
        .then( pokedex => {
            setPokemon(pokedex);

            let moves = [];

            for(let i = 0; i < 5; i++){
                moves.push(pokedex.moves[i]);
            }

            setMoves(moves);
        })
        .catch( error => console.log(error))
    }, [id]);
    
    return(
        <div>
            { console.log(moves) }
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
                                <p> Hp {pokemon.stats[0].base_stat} / { pokemon.stats[0].base_stat } </p>

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

                        <div className="container">

                            <h3 className="title"> Stats </h3>
                            <div className="pokemon__stats">
                                { pokemon.stats.map( stat => {
                                    return(
                                        <div className={`pokemon__stat`} key={stat.stat.name}>
                                            <Stat value={stat.base_stat}>
                                                <div className={`stat__value ${stat.stat.name}`}>{stat.base_stat}</div>
                                            </Stat>
                                            <p className="stat__name"> { stat.stat.name } </p>
                                        </div>
                                    )
                                }) }
                            </div>

                            <div className="pokemon__moves">
                                <h3 className="title"> Moves </h3>
                                {
                                    moves ? (
                                        moves.map( move => {
                                            return(
                                                <div className="pokemon__move">
                                                    <div className={`move__border ${pokemon.types[0].type.name}`}></div>
                                                    <h4> { move.move.name } </h4>
                                                </div>
                                            )
                                        })
                                    ) : ''
                                }

                                <button className={`btn ${pokemon.types[0].type.name}`}>
                                    <span> See all moves </span>
                                </button>
                            </div>

                        </div>

                    </Pokemon>
                    ) : ''
                }
        </div>
    )
}

export default PokemonPage