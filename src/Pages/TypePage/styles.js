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

export const Header = styled.header `
    width: 100%;
    background-color: #d3d3d3;
    text-align: center;
    padding: 2rem 1rem;
    margin-bottom: 2rem;
    color: white;
    text-transform: capitalize;
    background-position: center;

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

    h1{
        text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
        margin: 1rem auto;
    }

    p{
        text-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.5);
    }
`;

export const DamageCard = styled.div `
    width: 100%;
    background-color: white;
    box-shadow: var(--shadow);
    margin: 1.5rem auto;
    border-radius: 0.3rem;
    overflow: hidden;

    .damage__header{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    h3{
        font-weight: 200;
        padding: 1rem;
    }

    .damage__arrow{
        width: 3rem;
        height: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;

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

        img{
            transition: all 0.3s ease-out;
        }
    }

    .damage__types{
        height: 0px;
        overflow: hidden;
        transition: all 0.3s ease-out;

        p{
            border-bottom: solid 1px var(--color-border);
            padding-bottom: 0.5rem;
            margin: 2rem auto;
            text-transform: capitalize;
        }
    }

    &.open{
        .damage__header{
            border-bottom: solid 1px var(--color-border);
        }

        .damage__arrow{
            img{
                transform: rotate(180deg);
                transition: all 0.3s ease-out;
            }
        }

        .damage__types{
            height: auto;
            padding: 1rem;
            transition: all 0.3s ease-out;
        }
    }
`;

export const PokemonGrid = styled.div `
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    margin: 2rem 0;

    @media (min-width: 600px){
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
    }
`;

export const Moves = styled.div `
    margin: 2rem auto;

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