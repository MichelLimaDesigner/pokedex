import React, { useState, useEffect, Fragment } from 'react';
import { Card } from './styles';


function Pokemon(props){
    const [poke, setPoke] = useState(false);

    useEffect( () => {
        fetch(props.url)
        .then( res => res.json())
        .then( pokedex => setPoke(pokedex))
    }, [props.url]);

    return(
        <Fragment>
            { poke ? (
                <Card >
                    <figure className="card__image">
                        <img src={poke.sprites.other['official-artwork'].front_default} alt={poke.name}/>
                    </figure>
                    <p> { poke.name } </p>
                    <p> Nº { poke.id } </p>
                    
                    {
                        poke.types.map( type => {
                            return(
                                <p key={type.type.name}> { type.type.name } </p>
                            )
                        })
                    }
                </Card>
            ): '' }
        </Fragment>
    )
}

export default Pokemon