import styled, { keyframes } from 'styled-components';


const anime = keyframes `
    from{
        opacity: 0;
        transform: translateY(5rem);
    }

    to{
        opacity: 1;
        transform: translateY(0);
    }
`;

export const PokemonCard = styled.div `
    width: 100%;
    padding: 1rem 0;
    border-radius: 0.5rem;
    display: block;
    text-align: center;
    color: var(--color-text);
    box-shadow: var(--shadow);
    transition: all 0.1s ease-out;
    overflow: hidden;
    opacity: 0;
    animation: ${anime} 0.3s ease-out 0.5s forwards;
    cursor: pointer;

    &.selected{
        /* border: solid 0.2rem #228AB7; */
        box-shadow: 0 0 1rem rgba(0,0,0, .4);
    }

    .card__image{
        width: 8rem;
        height: 8rem;
        text-align: center;
        margin: 1rem auto;
        background-color: rgba(255,255,255, .4);
        border-radius: 50%;
        transition: all 0.3s linear;

        img{
            width: 110%;
            margin-left: -0.3rem;
        }
    }

    .card__name{
        font-weight: 600;
        font-size: 1.2rem;
        margin: 0.5rem auto;
        text-transform: capitalize;
    }

    .card__id{
        font-weight: 200;
    }

    .card__types{
        width: 80%;
        display: flex;
        justify-content: space-around;
        margin: 0.5rem auto;
        font-weight: 200;
    }
`;