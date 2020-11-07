import React, { useState, useEffect } from 'react';
import Pokemon from './Components/Pokemon';

import { Container } from './app-styles';


function App() {

    const [pokelist, setPokeList] = useState([]);

    useEffect( () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=12")
        .then( res => res.json())
        .then( pokedex => setPokeList(pokedex.results))
    }, []);

    console.log(pokelist)

  return (
      <div className="container">
        <Container>
            {
                pokelist.map( poke => {
                    return <Pokemon url={poke.url} key={poke.name} />
                })
            }
        </Container>
    </div>
  );
}

export default App;
