import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle `    
    body, html{
        width: 100%;
        min-height: 100vh;
        padding: 0;
        margin: 0;
        background-color: var(--background-body);
    }


    *{
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
        padding: 0;
        margin: 0;
    }

    :root{
        // Pokemon types background colors
        --background-grass: to bottom, #63DF38, #2ED573;
        --background-fire: to bottom, #FFB142, #FF5252;
        --background-water: to bottom, #33D9B2, #34ACE0;
        --background-bug: to bottom, #ACE730, #439710;
        --background-flying: to bottom, #81ECEC, #6799B6;
        --background-normal: to bottom, #FFDA79, #FFB142;
        --background-poison: to bottom, #DD54E9, #4E0E76;
        --background-electric: to bottom, #F0FF40, #F5DF12;
        --background-ground: to bottom, #F8C84C, #AD6A0B;
        --background-fighting: to bottom, #D37147, #CA1E1E;
        --background-psychic: to bottom, #CD84F1, #706FD3;
        --background-rock: to bottom, #C4C4C4, #696969;
        --background-fairy: to bottom, #FC90D1, #F1848B;
        --background-ghost: to bottom, #B245BB, #2B0443;
        --background-dark: to bottom, #942E20, #2C0303;
        --background-ice: to bottom, #C8EEEE, #87CDAB;
        --background-dragon: to bottom, #F8E434, #D01C19;
        --background-steel: to bottom, #EDEFD6, #99988A;

        // Others colors
        --background-body: #F8F8F8;
        --color-txt: #696969;
        --color-title: #363636;
        --color-border: #EAEAEA;

    }

    /*====================================
    Pokemon types background colors classes
    =====================================*/

    .grass {
        background-image: linear-gradient(var(--background-grass));
    }

    .fire {
        background-image: linear-gradient(var(--background-fire));
    }

    .water {
        background-image: linear-gradient(var(--background-water));
    }

    .bug {
        background-image: linear-gradient(var(--background-bug));
    }

    .flying {
        background-image: linear-gradient(var(--background-flying));
    }

    .normal {
        background-image: linear-gradient(var(--background-normal));
    }

    .poison {
        background-image: linear-gradient(var(--background-poison));
    }

    .electric {
        background-image: linear-gradient(var(--background-electric));
    }

    .ground {
        background-image: linear-gradient(var(--background-ground));
    }

    .fighting {
        background-image: linear-gradient(var(--background-fighting));
    }

    .psychic {
        background-image: linear-gradient(var(--background-psychic));
    }

    .rock {
        background-image: linear-gradient(var(--background-rock));
    }

    .fairy {
        background-image: linear-gradient(var(--background-fairy));
    }

    .ghost {
        background-image: linear-gradient(var(--background-ghost));
    }

    .dark {
        background-image: linear-gradient(var(--background-dark));
    }

    .ice {
        background-image: linear-gradient(var(--background-ice));
    }

    .dragon {
        background-image: linear-gradient(var(--background-dragon));
    }

    .steel {
        background-image: linear-gradient(var(--background-steel));
    }


    /*====================================
                    Container
    =====================================*/

    .container{
        width: 70%;
        margin: auto;
    }

    @media only screen and (max-width: 800px){
        .container{
            width: 90%;
        }
    }
`;