import styled from 'styled-components';

import BgDark from '../../assets/images/dark.png';
import BgDragon from '../../assets/images/dragon.png';
import BgElectric from '../../assets/images/electric.png';
import BgFighting from '../../assets/images/fighting.png';
import BgFairy from '../../assets/images/fairy.png';
import BgFire from '../../assets/images/fire.png';
import BgFlying from '../../assets/images/flying.png';
import BgGhost from '../../assets/images/ghost.png';
import BgGrass from '../../assets/images/grass.png';
import BgGround from '../../assets/images/ground.png';
import BgIce from '../../assets/images/ice.png';
import BgNormal from '../../assets/images/normal.png';
import BgPoison from '../../assets/images/poison.png';
import BgPsychic from '../../assets/images/psychic.png';
import BgRock from '../../assets/images/rock.png';
import BgSteel from '../../assets/images/steel.png';
import BgWater from '../../assets/images/water.png';

export const Pokemon = styled.div `
    width: 100%;
    padding-top: 4rem;

    .pokemon__bg{
        width: 100%;
        height: 15rem;
        background-color: #d3d3d3;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        top: -1rem;

        &.grass{
            background-image: url(${BgGrass});
        }

        &.bug{
            background-image: url(${BgGrass});
        }

        &.fire{
            background-image: url(${BgFire});
        }

        &.water{
            background-image: url(${BgWater});
        }

        &.poison{
            background-image: url(${BgPoison});
        }

        &.rock{
            background-image: url(${BgRock});
        }

        &.flying{
            background-image: url(${BgFlying});
        }

        &.ground{
            background-image: url(${BgGround});
        }

        &.electric{
            background-image: url(${BgElectric});
        }

        &.steel{
            background-image: url(${BgSteel});
        }

        &.normal{
            background-image: url(${BgNormal});
        }

        &.fighting{
            background-image: url(${BgFighting});
        }

        &.fairy{
            background-image: url(${BgFairy});
        }

        &.psychic{
            background-image: url(${BgPsychic});
        }

        &.ghost{
            background-image: url(${BgGhost});
        }

        &.ice{
            background-image: url(${BgIce});
        }

        &.dark{
            background-image: url(${BgDark});
        }

        &.dragon{
            background-image: url(${BgDragon});
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

        progress{
            appearance: none;
            width: 15rem;
            height: 0.5rem;
            border-radius: 0.5rem;
            overflow: hidden;
            margin-top: 1rem;
            border: none;
            background-color: #fff;
            margin-bottom: 0.5rem;
        }

        progress::-webkit-progress-value{
            background-image: linear-gradient(to left, var(--color-grass-primary), var(--color-grass-secondary));
            box-shadow: inset 0 0 0.3rem #fff;
        }
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

    .pokemon__sprites{
        margin: 3rem auto;
        
        .sprites__content{
            display: flex;
        }

        .pokemon__sprite{
            img{
                width: 180px;
            }
        }
    }

    .pokemon__moves{
        margin: 2rem auto;
    }

    .pokemon__move{
        background-color: white;
        box-shadow: 0 0 0.5rem #d3d3d3;
        margin: 1.5rem auto;
        border-radius: 0.3rem;
        overflow: hidden;
        transition: all .3s ease-out;

        .move__details{
            border-top: solid 0.1rem var(--color-border);
            padding: 1rem;
            
            ul{
                display: grid;
                grid-template-columns: 1fr 1fr;
                list-style: none;
            }

            li{
                text-align: center;
                margin: 1rem auto;
            }

            p{
                text-align: center;
                margin-top: 1rem;
                padding: 1rem;
                line-height: 2;
                border: solid 0.1rem var(--color-border);
                border-radius: 0.3rem;
            }
        }

        .move__border{
            width: 1rem;
            height: 4.5rem;
            float: right;


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

            &.dark{
                background-image: linear-gradient(to bottom, var(--color-dark-primary), var(--color-dark-secondary));
            }

            &.ice{
                background-image: linear-gradient(to bottom, var(--color-ice-primary), var(--color-ice-secondary));
            }

            &.dragon{
                background-image: linear-gradient(to bottom, var(--color-dragon-primary), var(--color-dragon-secondary));
            }

            &.steel{
                background-image: linear-gradient(to bottom, var(--color-steel-primary), var(--color-steel-secondary));
            }
        }

        h4{
            font-size: 1.2rem;
            font-weight: 200;
            text-transform: capitalize;
            padding: 1.5rem 1rem;
        }
    }

`;


export const Stat = styled.div `
    width: 3rem;
    height: 150px;
    background-color: white;
    box-shadow: 0 0 0.5rem #d3d3d3, inset 0 0 0.5rem #f8f8f8;
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
        box-shadow: inset 0 -0.1rem 0.5rem #fff;

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