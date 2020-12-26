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
            top: 11.2rem;

            img{
                width: 100%;
            }
        }
    }
`;