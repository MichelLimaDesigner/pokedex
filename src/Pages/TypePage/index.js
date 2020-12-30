import React, { useEffect, useState, useRef } from 'react';
import Pokemon from '../../Components/Pokemon';
import { Link } from 'react-router-dom';
import ModalTypes from '../../Components/ModalTypes';
import ArrowBtn from '../../Components/ArrowBtn';

import { DamageCard, Header, Moves, PokemonGrid } from './styles';
import ArrowIcon from '../../assets/images/Icons/arrow.svg';

function TypePage(props){

    const [type, setType] = useState(false);
    const [pokemons, setPokemons] = useState(false);
    const [urlLimit, setUrlLimit] = useState(20);
    const [moves, setMoves] = useState(false);
    const [moveDetails, setMoveDetails] = useState(false);

    const {id} = props.match.params;
    const modalTypes = useRef();
    const url = `https://pokeapi.co/api/v2/type/${id}`;

    useEffect( () => {
        fetch(url)
        .then( res => res.json())
        .then( type => {
            setType(type);

            let pokemonsArr = [];
            let moves = [];

            for(let i = 0; i < urlLimit; i++){
                pokemonsArr.push(type.pokemon[i]);
            }

            for(let i = 0; i < 5; i++){
                moves.push(type.moves[i]);
            }

            setMoves(moves);
            setPokemons(pokemonsArr);
        });
    }, [urlLimit]);

    function openDamageCard(event){
        event.currentTarget.classList.toggle('open')
    }

    function saveMoveDetails(url){
        fetch(url)
        .then( res => res.json())
        .then( move => {
            setMoveDetails(move);
        });
    }

    function loadAllMoves(btn){
        setMoves(type.moves);
        btn.classList.add('btn--hidden');
    }

    return(
        <div>
            <Header className={type.name}>
                <ArrowBtn />
                <div className="container">
                    <h1> { type.name } </h1>
                    <p onClick={ () => modalTypes.current.open() }> See all types </p>
                </div>
            </Header>

            <ModalTypes ref={modalTypes} />

            <div className="container">
                <h3 className="title"> Damages </h3>
                <DamageCard onClick={ (event) => openDamageCard(event) }>
                    <div className="damage__header">
                        <h3> Double damage to </h3>

                        <div className={`damage__arrow ${type.name}`}>
                            <img src={ArrowIcon} alt=""/>
                        </div>
                    </div>

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
                    <div className="damage__header">
                        <h3> Double damage from </h3>

                        <div className={`damage__arrow ${type.name}`}>
                            <img src={ArrowIcon} alt=""/>
                        </div>
                    </div>

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
                    <div className="damage__header">
                        <h3> Half damage to </h3>

                        <div className={`damage__arrow ${type.name}`}>
                            <img src={ArrowIcon} alt=""/>
                        </div>
                    </div>

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
                    <div className="damage__header">
                        <h3> Half damage from </h3>

                        <div className={`damage__arrow ${type.name}`}>
                            <img src={ArrowIcon} alt=""/>
                        </div>
                    </div>

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

                <Moves>
                    <h3 className="title"> Moves </h3>
                    {
                        moves ? (
                            moves.map( move => {
                                return(
                                    <div className="pokemon__move" key={move.name} onClick={ () => saveMoveDetails(move.url) }>
                                        <div className={`move__border ${type.name}`}></div>
                                        <h4> { move.name } </h4>
                                        { moveDetails && moveDetails.name === move.name ? (
                                            <div className="move__details">
                                                <ul>
                                                    <li> Type: { moveDetails.type.name } </li>
                                                    <li> Accuracy: { moveDetails.accuracy } </li>
                                                    <li> Power: { moveDetails.power } </li>
                                                    <li> Pp: { moveDetails.pp } </li>
                                                </ul>
                                                <p> { moveDetails.effect_entries[0].effect } </p>
                                            </div>
                                        ) : '' }
                                    </div>
                                )
                            })
                        ) : ''
                    }

                    <button className={`btn ${type.name}`} onClick={ (event) => loadAllMoves(event.currentTarget) }>
                        <span> See all moves </span>
                    </button>
                </Moves>
            </div>
        </div>
    )
}

export default TypePage;