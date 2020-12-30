import React, { useState } from 'react';
import { SearchContent } from './styles';

import SearchIcon from '../../assets/images/Icons/SearchIcon.svg';
import { Link } from 'react-router-dom';

function Search(){

    const [search, setSearch] = useState('');

    function teste(value){
        setSearch(value);
    }

    return(
        <SearchContent>
            <input type="text" placeholder="Search" onInput={ (event) => teste(event.target.value) } />


            <Link to={`/pokemon/${search}`}>
                <figure className={ search ? 'active' : '' }>
                    <img src={SearchIcon} alt=""/>
                    <p>Search</p>
                </figure>
            </Link>
        </SearchContent>
    )
}

export default Search;