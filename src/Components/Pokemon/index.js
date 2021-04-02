import React, { useState, useEffect, Fragment } from 'react';
import { PokemonCard } from './styles';

function Pokemon({url, select}){

    const [pokemon, setPokemon] = useState();
    const [moves, setMoves] = useState();

    useEffect( () => {
        
        fetch(url)
        .then( res => res.json() )
        .then( pokemon => {
            setPokemon(pokemon);
        } )

    }, [url]);


    /*====================================
    Return pokemon data to show on sidebar
    =====================================*/

    function returnPokemonSelected(){

        let moves = [];

        for(let i = 0; i < 5; i++){
            moves.push(pokemon.moves[i]);
        }

        setMoves(moves);

        select(pokemon, moves);
        
    }
    

    return(
        <PokemonCard className={ pokemon && pokemon.types[0].type.name } onClick={ returnPokemonSelected }>
            {
                pokemon && (
                    <Fragment >
                        <p className="card__id"> Nº { pokemon.id } </p>
                        <figure className="card__image">
                            <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name}/>
                        </figure>
                        <p className="card__name"> { pokemon.name } </p>
                        
                        <div className="card__types">
                            {
                                pokemon.types.map( type => {
                                    return(
                                        <p key={type.type.name}> { type.type.name } </p>
                                        )
                                })
                            }
                        </div>
                    </Fragment>
                )
            }
        </PokemonCard>
    )
}

export default Pokemon;