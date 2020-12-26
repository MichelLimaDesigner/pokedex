import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pokemon from '../../Components/Pokemon';

import { Container, Header } from './styles';
import SearchIcon from '../../assets/images/Icons/SearchIcon.svg';

function Home() {

    const [pokelist, setPokeList] = useState([]);

    useEffect( () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
        .then( res => res.json())
        .then( pokedex => setPokeList(pokedex.results))
    }, []);

    return (
        <div>
            <Header>
                <div className="container">
                    <h1> Pokedex </h1>
                    <input type="text" placeholder="Search"/>
                    <figure>
                        <img src={SearchIcon} alt=""/>
                    </figure>
                    <a href=""> See all types </a>
                </div>
            </Header>

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
        </div>
    );
}

export default Home;
