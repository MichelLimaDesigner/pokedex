import React, { useState, useEffect } from 'react';
import { PokemonCard } from './styles';

function Pokemon({url}){

    const [pokemon, setPokemon] = useState();

    useEffect( () => {
        
        fetch(url)
        .then( res => res.json() )
        .then( pokemon => {
            setPokemon(pokemon);
        } )

    }, [url]);

    return(
        <PokemonCard >
            {
                pokemon && (
                    <h1> { pokemon.name } </h1>
                )
            }
        </PokemonCard>
    )
}

export default Pokemon;