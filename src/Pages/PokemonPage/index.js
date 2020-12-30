import React, { useEffect, useState } from 'react';
import ArrowBtn from '../../Components/ArrowBtn/index.js';
import {Pokemon, Stat} from './styles.js';

function PokemonPage(props){
    const [pokemon, setPokemon] = useState(false);
    const [moves, setMoves] = useState(false);
    const [moveDetails, setMoveDetails] = useState(false);
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

    function saveMoveDetails(url){
        fetch(url)
        .then( res => res.json())
        .then( move => {
            setMoveDetails(move);
        });
    }

    function loadAllMoves(btn){
        setMoves(pokemon.moves);
        btn.classList.add('btn--hidden');
    }
    
    return(
        <div>
            {
                pokemon ? (
                    <Pokemon>
                        <ArrowBtn />
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

                            <div className="pokemon__sprites">
                                <h3 className="title"> Sprites </h3>

                                <div className="sprites__content">
                                    <figure className="pokemon__sprite">
                                        <img src={pokemon.sprites['front_default']} alt=""/>
                                    </figure>
                                    <figure className="pokemon__sprite">
                                        <img src={pokemon.sprites['back_default']} alt=""/>
                                    </figure>
                                </div>
                            </div>

                            <div className="pokemon__moves">
                                <h3 className="title"> Moves </h3>
                                {
                                    moves ? (
                                        moves.map( move => {
                                            return(
                                                <div className="pokemon__move" key={move.move.name} onClick={ event => saveMoveDetails(move.move.url) }>
                                                    <div className={`move__border ${pokemon.types[0].type.name}`}></div>
                                                    <h4> { move.move.name } </h4>
                                                    { moveDetails && moveDetails.name === move.move.name ? (
                                                        <div className="move__details">
                                                            <ul>
                                                                <li> Type: { moveDetails.type.name } </li>
                                                                <li> Accuracy: { moveDetails.accuracy } </li>
                                                                <li> Power: { moveDetails.power } </li>
                                                                <li> Pp: { moveDetails.pp } </li>
                                                            </ul>
                                                            <p> { moveDetails.effect_entries[0].effect } </p>
                                                        </div>
                                                    ) : '' }
                                                </div>
                                            )
                                        })
                                    ) : ''
                                }

                                <button className={`btn ${pokemon.types[0].type.name}`} onClick={ (event) => loadAllMoves(event.currentTarget) }>
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