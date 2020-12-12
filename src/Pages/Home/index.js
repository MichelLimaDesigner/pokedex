import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pokemon from '../../Components/Pokemon';

import { Container } from './styles';

function Home() {

    const [pokelist, setPokeList] = useState([]);

    useEffect( () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
        .then( res => res.json())
        .then( pokedex => setPokeList(pokedex.results))
    }, []);

  return (
      <div className="container">
        <Container>
            {
                pokelist.map( poke => {
                    return (
                        <Link to={`/pokemon/${poke.name}`} key={poke.id}>
                            <Pokemon url={poke.url} key={poke.name} />
                        </Link>   
                    )
                })
            }
        </Container>
    </div>
  );
}

export default Home;
