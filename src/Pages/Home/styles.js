import styled from 'styled-components';

export const HomePage = styled.main `
    width: 100%;
    min-height: 100vh;
    transition: all 0.3s ease-out;
    
    &.home--grid{
        display: grid;
        grid-template-columns: 70% 30%;
        transition: all 0.3s ease-out;
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
    width: 30%;
    height: 100vh;
    position: fixed;
    right: 0;
    top: 0;
    overflow-y: scroll;
    background-color: var(--background-sidebar);
    box-shadow: var(--sidebar-shadow);
    transition: all 0.3s ease-out;

    .pokemon__bg{
        width: 100%;
        height: 15rem;
        background-color: #d3d3d3;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        top: -1rem;
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
                width: 150px;
            }
        }
    }

    .pokemon__moves{
        margin: 2rem auto;
    }

    .pokemon__move{
        background-color: var(--background-body);
        box-shadow: 0 0 0.5rem #d3d3d3;
        margin: 1.5rem auto;
        border-radius: 0.3rem;
        overflow: hidden;
        transition: all .3s ease-out;
        cursor: pointer;

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
                line-height: 2;
                border-radius: 0.3rem;
            }
        }

        .move__border{
            width: 1rem;
            height: 3.2rem;
            float: right;
        }

        h4{
            font-size: 1rem;
            font-weight: 200;
            text-transform: capitalize;
            padding: 1rem;
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
            background-image: linear-gradient( var(--background-grass) );
        }

        &.attack{
            background-image: linear-gradient( var(--background-fire) );
        }

        &.defense{
            background-image: linear-gradient( var(--background-water) );
        }

        &.special-attack{
            background-image: linear-gradient(var(--background-fighting));
        }

        &.special-defense{
            background-image: linear-gradient(to bottom, #34ACE0, #228AB7);
        }

        &.speed{
            background-image: linear-gradient( var(--background-electric) );
        }
    }
`;