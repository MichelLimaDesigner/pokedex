import React, { useState } from 'react';
import { HomePage } from './styles';

function Home(){

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return(
        <HomePage className={ isSidebarOpen ? "home--grid" : '' } >
            <HomePage.Container >

                <HomePage.Header >
                    <div className="container">
                        <HomePage.Search >
                            <input type="text" placeholder="Search pokemons" />
                        </HomePage.Search>

                        <HomePage.Pokemons ></HomePage.Pokemons>
                    </div>
                </HomePage.Header>

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