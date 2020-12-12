import styled from 'styled-components';

import BgGrass from '../../assets/images/grass.png';
import BgFire from '../../assets/images/fire.png';
import BgWater from '../../assets/images/water.png';

export const Pokemon = styled.div `
    width: 100%;
    padding-top: 4rem;

    .pokemon__bg{
        width: 100%;
        height: 15rem;
        background-color: #d3d3d3;
        background-position: center;
        position: absolute;
        top: -1rem;

        &.grass{
            background-image: url(${BgGrass});
        }

        &.fire{
            background-image: url(${BgFire});
        }

        &.water{
            background-image: url(${BgWater});
        }
    }

    .pokemon__header{
        background-color: white;
        border-radius: 0.5rem;
        box-shadow: var(--shadow);
        text-align: center;
        position: relative;
        top: -4rem;
        padding: 4.5rem 0 2rem 0;
    }

    .pokemon__image{
        width: 10rem;
        margin: auto;
        position: relative;
        z-index: 99;

        img{
            width: 100%;
        }
    }

    .pokemon__name{
        font-size: 1.6rem;
        font-weight: 600;
        position: relative;
        text-transform: capitalize;

        span{
            font-size: 1rem;
            font-weight: 200;
            position: absolute;
            top: -1rem;
        }
    }

    .pokemon__types{
        display: flex;
        justify-content: center;
        margin: 1.5rem auto;
        font-weight: 400;
        font-size: 1.4rem;
        text-transform: capitalize;

        span{
            margin: 0 1rem;
        }
    }

    .pokemon__body{
        background-color: white;
        box-shadow: var(--shadow);

        .pokemon__menu{
            font-size: 1.2rem;
            padding: 1rem 0;
            margin-bottom: 2rem;
            border-bottom: solid 0.1rem var(--color-border);

            ul{
                list-style: none;
                display: flex;
                justify-content: space-between;
            }
        }
    }

    .pokemon__numbers{
        display: flex;
        justify-content: space-around;
        align-items: center;

        span{
            font-size: 0.9rem;
            display: block;
            margin-bottom: 0.5rem;
        }
    }

    .pokemon__stats{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        padding: 1rem 0;

        .pokemon__stat{
            width: 100%;
            margin: 1rem auto;
            text-align: center;

            .stat__name{
                font-size: 0.9rem;
                margin-top: 1rem;
                text-transform: capitalize;
            }
        }
    }

`;


export const Stat = styled.div `
    width: 3rem;
    height: 150px;
    background-color: #f8f8f8;
    box-shadow: inset 0 0 0.5rem #d3d3d3;
    position: relative;
    margin: auto;
    border-radius: 5px;
    overflow: hidden;

    .stat__value{
        width: 100%;
        height: ${ props => props.value }px;
        position: absolute;
        bottom: 0;
        color: white;
        padding-top: 0.5rem;

        &.hp{
            background-image: linear-gradient(to bottom, var(--color-bug-primary), var(--color-bug-secondary));
        }

        &.attack{
            background-image: linear-gradient(to bottom, var(--color-fire-primary), var(--color-fire-secondary));
        }

        &.defense{
            background-image: linear-gradient(to bottom, var(--color-water-primary), var(--color-water-secondary));
        }

        &.special-attack{
            background-image: linear-gradient(to bottom, var(--color-fighting-primary), var(--color-fighting-secondary));
        }

        &.special-defense{
            background-image: linear-gradient(to bottom, #34ACE0, #228AB7);
        }

        &.speed{
            background-image: linear-gradient(to bottom, var(--color-grass-primary), var(--color-grass-secondary));
        }
    }
`;