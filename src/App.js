import React, { useState, useEffect } from 'react';
import './App.css';


function Test(props){
    const [poke, setPoke] = useState(false);

    useEffect( () => {
        fetch(props.url)
        .then( res => res.json())
        .then( pokedex => setPoke(pokedex))
    }, []);

    return(
        <div>
            { poke ? (
                <p> { poke.sprites.other['official-artwork'].front_default } </p>
            ): '' }
        </div>
    )
}


function App() {

    const [pokelist, setPokeList] = useState([]);

    useEffect( () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
        .then( res => res.json())
        .then( pokedex => setPokeList(pokedex.results))
    }, []);

    console.log(pokelist)

  return (
    <div className="App">
        {
            pokelist.map( poke => {
                return <Test url={poke.url} />
            })
        }
    </div>
  );
}

export default App;
