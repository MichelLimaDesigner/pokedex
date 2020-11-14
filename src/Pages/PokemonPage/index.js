import React, { useEffect, useState } from 'react';

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
        <div className="container">
            {
                pokemon ? (
                    <div>
                        <p> { pokemon.name } </p>
                        <p> id: { pokemon.id } </p>
                        { pokemon.types.map( type => {
                            return(
                                <p key={type.type.name}> { type.type.name } </p>
                            )
                        }) }

                        <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name}/>

                        <p> Altura: {pokemon.height / 10} metros </p>
                        <p> Peso: {pokemon.weight / 10} Kg </p>

                        { pokemon.stats.map( stat => {
                            return(
                                <p key={stat.stat.name}> { stat.stat.name }: {stat.base_stat} </p>
                            )
                        }) }
                    </div>
                    ) : ''
                }
        </div>
    )
}

export default PokemonPage