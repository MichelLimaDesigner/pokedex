import React, { useEffect, useState } from 'react';
import Pokemon from '../../Components/Pokemon';
import { Link } from 'react-router-dom';
import { DamageCard, Header, PokemonGrid } from './styles';

function TypePage(props){

    const [type, setType] = useState(false);
    const [pokemons, setPokemons] = useState(false);
    const [urlLimit, setUrlLimit] = useState(20);
    const {id} = props.match.params;

    const url = `https://pokeapi.co/api/v2/type/${id}`;

    useEffect( () => {
        fetch(url)
        .then( res => res.json())
        .then( type => {
            setType(type);

            let pokemonsArr = []

            for(let i = 0; i < urlLimit; i++){
                pokemonsArr.push(type.pokemon[i]);
            }

            setPokemons(pokemonsArr);
        });
    }, [urlLimit]);

    function openDamageCard(event){
        event.currentTarget.classList.toggle('open')
    }

    return(
        <div>
            <Header className={type.name}>
                <div className="container">
                    <h1> Type { type.name } </h1>
                    <p> See all types </p>
                </div>
            </Header>

            <div className="container">
                <h3 className="title"> Damages </h3>
                <DamageCard onClick={ (event) => openDamageCard(event) }>
                    <h3> Double damage to </h3>

                    <div className="damage__types">
                        {
                            type ? (
                                type.damage_relations.double_damage_to.map( damage => {
                                    return(
                                        <p key={damage.name}> { damage.name } </p>
                                    )
                                })
                            ) : ''
                        }
                    </div>
                </DamageCard>

                <DamageCard onClick={ (event) => openDamageCard(event) }>
                    <h3> Double damage from </h3>

                    <div className="damage__types" onClick={ (event) => openDamageCard(event) }>
                        {
                            type ? (
                                type.damage_relations.double_damage_from.map( damage => {
                                    return(
                                        <p key={damage.name}> { damage.name } </p>
                                    )
                                })
                            ) : ''
                        }
                    </div>
                </DamageCard>

                <DamageCard onClick={ (event) => openDamageCard(event) }>
                    <h3> Half damage to </h3>

                    <div className="damage__types">
                        {
                            type ? (
                                type.damage_relations.half_damage_to.map( damage => {
                                    return(
                                        <p key={damage.name}> { damage.name } </p>
                                    )
                                })
                            ) : ''
                        }
                    </div>
                </DamageCard>

                <DamageCard onClick={ (event) => openDamageCard(event) }>
                    <h3> Half damage from </h3>

                    <div className="damage__types">
                        {
                            type ? (
                                type.damage_relations.half_damage_from.map( damage => {
                                    return(
                                        <p key={damage.name}> { damage.name } </p>
                                    )
                                })
                            ) : ''
                        }
                    </div>
                </DamageCard>


                <h3 className="title"> Pokemons </h3>
                <PokemonGrid>
                    {
                        pokemons ? pokemons.map( pokemon => {
                            return(
                                <Link to={`/pokemon/${pokemon.pokemon.name}`} key={pokemon.pokemon.name}>
                                    <Pokemon url={ pokemon.pokemon.url } key={pokemon.pokemon.name} />
                                </Link>
                            )
                        }) : ''
                    }
                </PokemonGrid>

                <button className={`btn ${type.name}`} onClick={ () => setUrlLimit(urlLimit + 20) }>
                    <span> Load More </span>
                </button>
            </div>
        </div>
    )
}

export default TypePage;