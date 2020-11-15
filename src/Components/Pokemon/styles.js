import styled from 'styled-components';

export const Card = styled.div `
    width: 100%;
    padding: 1rem 0;
    border-radius: 0.3rem;
    display: block;
    background-color: white;
    text-align: center;
    color: var(--color-text-in-gradient);
    box-shadow: var(--shadow);
    border-radius: 0.8rem;
    transition: all 0.1s ease-out;
    overflow: hidden;

    :hover{
        transform: scale(1.1);
    }

    .card__image{
        width: 6rem;
        height: 6rem;
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

    &.grass{
        background-image: linear-gradient(to bottom, var(--color-grass-primary), var(--color-grass-secondary));
    }

    &.fire{
        background-image: linear-gradient(to bottom, var(--color-fire-primary), var(--color-fire-secondary));
    }

    &.water{
        background-image: linear-gradient(to bottom, var(--color-water-primary), var(--color-water-secondary));
    }

    &.bug{
        background-image: linear-gradient(to bottom, var(--color-bug-primary), var(--color-bug-secondary));
    }

    &.flying{
        background-image: linear-gradient(to bottom, var(--color-flying-primary), var(--color-flying-secondary));
    }

    &.normal{
        background-image: linear-gradient(to bottom, var(--color-normal-primary), var(--color-normal-secondary));
    }

    &.poison{
        background-image: linear-gradient(to bottom, var(--color-poison-primary), var(--color-poison-secondary));
    }

    &.electric{
        background-image: linear-gradient(to bottom, var(--color-electric-primary), var(--color-electric-secondary));
    }

    &.ground{
        background-image: linear-gradient(to bottom, var(--color-ground-primary), var(--color-ground-secondary));
    }

    &.fighting{
        background-image: linear-gradient(to bottom, var(--color-fighting-primary), var(--color-fighting-secondary));
    }

    &.psychic{
        background-image: linear-gradient(to bottom, var(--color-psychic-primary), var(--color-psychic-secondary));
    }

    &.rock{
        background-image: linear-gradient(to bottom, var(--color-rock-primary), var(--color-rock-secondary));
    }

    &.fairy{
        background-image: linear-gradient(to bottom, var(--color-fairy-primary), var(--color-fairy-secondary));
    }

    &.ghost{
        background-image: linear-gradient(to bottom, var(--color-ghost-primary), var(--color-ghost-secondary));
    }

`;