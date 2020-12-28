import styled from 'styled-components';
import Bg from '../../assets/images/bgHome.svg';

export const Container = styled.div `
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

export const Header = styled.header`
    width: 100%;
    height: 18rem;
    background-image: url(${Bg});
    background-size: auto;
    background-repeat: no-repeat;
    background-attachment: fixed;
    
    .container{
        position: relative;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        color: white;
        padding-bottom: 2rem;

        h1{
            text-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.5);
        }

        figure{
            width: 2rem;
            position: absolute;
            right: 1rem;
            top: 12.5rem;

            img{
                width: 100%;
            }
        }
    }
`;

export const Types = styled.div `
    width: 95%;
    margin: 1rem 0 2rem auto;
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    overflow-x: scroll;
    padding: 1rem 0;

    .type{
        width: 12rem;
        height: 4rem;
        margin-right: 1rem;
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

export const TitleSection = styled.h3 `
    width: 100%;
    padding: 1rem 0;
    border-bottom: solid 1px var(--color-border);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
`;