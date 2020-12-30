import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Pokemon from '../../Components/Pokemon';
import ModalTypes from '../../Components/ModalTypes';

import { Container, Header, TitleSection, Types } from './styles';
import SearchIcon from '../../assets/images/Icons/SearchIcon.svg';
import Grass from '../../assets/images/Types/grass.png';
import Fire from '../../assets/images/Types/fire.png';
import Water from '../../assets/images/Types/water.png';

function Home() {

    const [pokelist, setPokeList] = useState([]);
    const [urlLimit, setUrlLimit] = useState(20);

    const modalTypes = useRef();

    useEffect( () => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=${urlLimit}`)
        .then( res => res.json())
        .then( pokedex => setPokeList(pokedex.results))
    }, [urlLimit]);

    return (
        <div>
            <Header>
                <div className="container">
                    <h1> Pokedex </h1>
                    <input type="text" placeholder="Search" />
                    <figure>
                        <img src={SearchIcon} alt=""/>
                    </figure>
                </div>
            </Header>

            <div className="container">
                <TitleSection>
                    <span>Pokemon types</span>
                    <span onClick={ () => modalTypes.current.open() }>See all</span>
                </TitleSection>
            </div>

            <Types>
                <Link to={`/type/12`}>
                    <div className="type grass">
                        <h3> Grass </h3>
                        <figure>
                            <img src={Grass} alt=""/>
                        </figure>
                    </div>
                </Link>

                <Link to={`/type/10`}>
                    <div className="type fire">
                        <h3> Fire </h3>
                        <figure>
                            <img src={Fire} alt=""/>
                        </figure>
                    </div>
                </Link>

                <Link to={`/type/11`}>
                    <div className="type water">
                        <h3> Water </h3>
                        <figure>
                            <img src={Water} alt=""/>
                        </figure>
                    </div>
                </Link>

                <div className="type--btn" onClick={ () => modalTypes.current.open() }>
                    <h3> See all types</h3>
                </div>
            </Types>

            <ModalTypes ref={modalTypes} />

            <div className="container">
                <TitleSection>
                    Pokemons
                </TitleSection>

                <Container>
                    {
                        pokelist.map( poke => {
                            return (
                                <Link to={`/pokemon/${poke.name}`} key={poke.name}>
                                    <Pokemon url={poke.url} key={poke.name} />
                                </Link>   
                            )
                        })
                    }
                </Container>

                <button className="btn grass" onClick={ () => setUrlLimit(urlLimit + 20) }>
                    <span> Load more </span>
                </button>
            </div>
        </div>
    );
}

export default Home;
