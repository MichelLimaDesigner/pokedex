import React from 'react';
import { Link } from 'react-router-dom';
import { ErrorPage } from './styles';

function Error(){
    return(
        <ErrorPage>
            <div className="container">
                <h1> 404 </h1>
                <h3> Page not found </h3>

                <Link to='/'>
                    <button className="btn dark">
                        <span> Go home </span>
                    </button>
                </Link>
            </div>
        </ErrorPage>
    )
}

export default Error;