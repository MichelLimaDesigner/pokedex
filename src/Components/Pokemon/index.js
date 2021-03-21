import React, { useState, useEffect, Fragment } from 'react';
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
        <PokemonCard className={ pokemon && pokemon.types[0].type.name }>
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