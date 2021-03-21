import React, { useEffect, useState } from 'react';
import Pokemon from '../../Components/Pokemon';
import { HomePage } from './styles';

function Home(){

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [pokemons, setPokemons] = useState();

    useEffect( () => {
        
        fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
        .then( res => res.json() )
        .then( list => {
            setPokemons(list.results);
        } )

    }, []);

    return(
        <HomePage className={ isSidebarOpen ? "home--grid" : '' } >
            <HomePage.Container >

                <HomePage.Header >
                    <div className="container">
                        <HomePage.Search >
                            <input type="text" placeholder="Search pokemons" />
                        </HomePage.Search>
                    </div>
                </HomePage.Header>

                <div className="container">
                    <HomePage.Pokemons >
                        {
                            pokemons && pokemons.map( pokemon => {
                                return(
                                    <Pokemon
                                        key={ pokemon.name }
                                        url={ pokemon.url }
                                    />
                                )
                            })
                        }
                    </HomePage.Pokemons>
                </div>
            </HomePage.Container>

            {
                isSidebarOpen && (
                    <HomePage.Sidebar >

                    </HomePage.Sidebar>
                )
            }
        </HomePage>
    )
}

export default Home;