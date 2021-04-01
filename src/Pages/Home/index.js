import React, { useEffect, useState } from 'react';
import Pokemon from '../../Components/Pokemon';
import { HomePage, Stat } from './styles';

function Home(){

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [pokemons, setPokemons] = useState();
    const [selectPokemon, setSelectPokemon] = useState();
    const [selectPokemonMoves, setSelectPokemonMoves] = useState();

    useEffect( () => {
        
        fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
        .then( res => res.json() )
        .then( list => {
            setPokemons(list.results);
        } )

    }, []);


    function select(pokemon, moves){

        setIsSidebarOpen(true);
        setSelectPokemon(pokemon);
        setSelectPokemonMoves(moves);

    }


    function deselect(element){

        if( element.id === "pokemonContent"){

            setIsSidebarOpen(false);

        }

    }


    return(
        <HomePage className={ isSidebarOpen ? "home--grid" : '' } >
            <HomePage.Container id="pokemonContent" onClick={ event => deselect(event.target) }>

                <HomePage.Header>
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
                                        select={ select }
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

                        <div>
                            {/* <ArrowBtn /> */}
                            <div className={`pokemon__bg ${selectPokemon.types[0].type.name} `}></div>
                            

                            <figure className="pokemon__image">
                                <img src={selectPokemon.sprites.other['official-artwork'].front_default} alt={selectPokemon.name}/>
                            </figure>

                            <div className="container">
                                <div className={ `pokemon__header ` }>
                                    <p className="pokemon__name"> { selectPokemon.name } <span> Nº { selectPokemon.id } </span> </p>
                                    <progress value={selectPokemon.stats[0].base_stat} max={selectPokemon.stats[0].base_stat}></progress>
                                    <p> Hp {selectPokemon.stats[0].base_stat} / { selectPokemon.stats[0].base_stat } </p>

                                    <div className="pokemon__types">
                                        { selectPokemon.types.map( type => {
                                            return(
                                                <span key={type.type.name}> { type.type.name } </span>
                                                )
                                            })
                                        }
                                    </div>

                                    <div className="pokemon__numbers">
                                        <p> <span> Height: </span> {selectPokemon.height / 10} m </p>
                                        <p> <span> Weight: </span> {selectPokemon.weight / 10} Kg </p>
                                    </div>
                                </div>
                            </div>

                            <div className="container">

                                <h3 className="title"> Stats </h3>
                                <div className="pokemon__stats">
                                    { selectPokemon.stats.map( stat => {
                                        return(
                                            <div className={`pokemon__stat`} key={stat.stat.name}>
                                                <Stat value={stat.base_stat}>
                                                    <div className={`stat__value ${stat.stat.name}`}>{stat.base_stat}</div>
                                                </Stat>
                                                <p className="stat__name"> { stat.stat.name } </p>
                                            </div>
                                        )
                                    }) }
                                </div>

                                <div className="pokemon__sprites">
                                    <h3 className="title"> Sprites </h3>

                                    <div className="sprites__content">
                                        <figure className="pokemon__sprite">
                                            <img src={selectPokemon.sprites['front_default']} alt=""/>
                                        </figure>
                                        <figure className="pokemon__sprite">
                                            <img src={selectPokemon.sprites['back_default']} alt=""/>
                                        </figure>
                                    </div>
                                </div>

                                <div className="pokemon__moves">
                                    <h3 className="title"> Moves </h3>
                                    {
                                        selectPokemonMoves ? (
                                            selectPokemonMoves.map( move => {
                                                return(
                                                    <div className="pokemon__move" key={move.move.name} >
                                                        <div className={`move__border ${selectPokemon.types[0].type.name}`}></div>
                                                        <h4> { move.move.name } </h4>
                                                        {/* moveDetails && moveDetails.name === move.move.name ? (
                                                            <div className="move__details">
                                                                <ul>
                                                                    <li> Type: { moveDetails.type.name } </li>
                                                                    <li> Accuracy: { moveDetails.accuracy } </li>
                                                                    <li> Power: { moveDetails.power } </li>
                                                                    <li> Pp: { moveDetails.pp } </li>
                                                                </ul>
                                                                <p> { moveDetails.effect_entries[0].effect } </p>
                                                            </div>
                                                        ) : '' */}
                                                    </div>
                                                )
                                            })
                                        ) : ''
                                    }

                                    <button className={`btn ${selectPokemon.types[0].type.name}`} >
                                        <span> See all moves </span>
                                    </button>
                                </div>

                                { console.log(selectPokemon) }
                            </div>

                        </div>

                    </HomePage.Sidebar>
                )
            }
        </HomePage>
    )
}

export default Home;