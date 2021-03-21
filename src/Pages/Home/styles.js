import styled from 'styled-components';

export const HomePage = styled.main `
    width: 100%;
    min-height: 100vh;
    
    &.home--grid{
        display: grid;
        grid-template-columns: 70% 30%;
    }
`;


HomePage.Container = styled.div `
    width: 100%;
    min-height: 100vh;
    margin: auto;
`;


HomePage.Header = styled.header `
    width: 100%;
    height: 10rem;
    background-color: #d3d3d3;
    position: relative;
`;


HomePage.Search = styled.div `
    width: 70%;
    height: 100%;
    position: absolute;

    input{
        width: 100%;
        height: 3rem;
        background-color: white;
        border-radius: 0.3rem;
        border: solid 0.1rem var(--color-border);
        padding: 1rem;
        position: absolute;
        top: 8rem;
    }
`;


HomePage.Pokemons = styled.div `
    width: 80%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    margin: 2rem auto;
`;


HomePage.Sidebar = styled.div `
    width: 100%;
    height: 100vh;
    border: solid 0.1rem blue;
`;