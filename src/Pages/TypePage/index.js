import React, { useEffect, useState } from 'react';
import Pokemon from '../../Components/Pokemon';
import { Link } from 'react-router-dom';
import { Container } from '../Home/styles';

function TypePage(props){

    const [type, setType] = useState(false);
    const [pokemons, setPokemons] = useState(false);
    const {id} = props.match.params;

    const url = `https://pokeapi.co/api/v2/type/${id}`;

    useEffect( () => {
        fetch(url)
        .then( res => res.json())
        .then( type => {
            setType(type);

            let pokemonsArr = []

            for(let i = 0; i < 20; i++){
                pokemonsArr.push(type.pokemon[i]);
            }

            setPokemons(pokemonsArr);
        });
    }, []);

    return(
        <div className="container">
            <Container>
                <h1> { type.name } </h1>
                {
                    pokemons ? pokemons.map( pokemon => {
                        return(
                            <Link to={`/pokemon/${pokemon.pokemon.name}`} key={pokemon.pokemon.name}>
                                <Pokemon url={ pokemon.pokemon.url } key={pokemon.pokemon.name} />
                            </Link>
                        )
                    }) : ''
                }
            </Container>
        </div>
    )
}

export default TypePage;