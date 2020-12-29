import styled, { keyframes } from 'styled-components';

export const Container = styled.div `
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
`;

const modalAnime = keyframes `
    from{
        opacity: 0;
        transform: translateY(5rem);
    }

    to{
        opacity: 1;
        transform: translateY(0);
    }
`;

export const Modal = styled.div `
    width: 90%;
    max-height: 35rem;
    background-color: white;
    box-shadow: var(--shadow);
    padding: 3rem 1.5rem;
    position: relative;
    z-index: 99;
    text-align: center;
    overflow-y: scroll;
    border-radius: 0.3rem;
    opacity: 0;
    animation: ${modalAnime} 0.3s ease-out forwards;

    h1{
        margin: 2rem auto;
    }

    .modal__grid{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1rem;
    }

    .type{
        width: 100%;
        height: 4rem;
        display: inline-table;
        background-color: white;
        box-shadow: var(--shadow);
        color: white;
        border-radius: 0.3rem;
        padding: 1rem;

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

        h3{
            font-weight: 200;
            float: left;
        }

        figure{
            width: 5rem;
            height: 5rem;
            background-color: rgba(255, 255, 255, 0.6);
            border-radius: 50%;
            float: right;

            img{
                margin-top : -0.5rem;
                margin-left: -0.5rem;
            }
        }
    }
`;

const lightboxAnime = keyframes `
    from{
        opacity: 0;
    }

    to{
        opacity: 1;
    }
`;

export const Lightbox = styled.div `
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, .8);
    position: absolute;
    opacity: 0;
    animation: ${lightboxAnime} 0.3s ease-out forwards;
`;