import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Pages/Home';
import PokemonPage from './Pages/PokemonPage';
import TypePage from './Pages/TypePage';

function Router(){
    return(
        <BrowserRouter >
            <Switch >
                <Route exact path="/" component={Home} />
                <Route exact path="/pokemon/:id" component={PokemonPage} />
                <Route exact path="/type/:id" component={TypePage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;