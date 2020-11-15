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
                <Card className={poke.types[0].type.name}>
                    <p className="card__id"> Nº { poke.id } </p>
                    <figure className="card__image">
                        <img src={poke.sprites.other['official-artwork'].front_default} alt={poke.name}/>
                    </figure>
                    <p className="card__name"> { poke.name } </p>
                    
                    <div className="card__types">
                        {
                            poke.types.map( type => {
                                return(
                                    <p key={type.type.name}> { type.type.name } </p>
                                )
                            })
                        }
                    </div>
                </Card>
            ): '' }
        </Fragment>
    )
}

export default Pokemon