import styled from 'styled-components';

export const SearchContent = styled.div `
    width: 100%;

    figure{
        width: 2rem;
        position: absolute;
        right: 1rem;
        top: 12.5rem;
        display: flex;
        align-items: center;
        color: #696969;
        overflow: hidden;
        transition: all 0.3s ease-out;

        img{
            width: 100%;
        }

        p{
            opacity: 0;
            transform: translateX(2rem);
            transition: all 0.3s ease-out;
        }

        &.active{
            width: auto;
            transition: all 0.3s ease-out;
            /* background-color: #d3d3d3; */

            p{
                opacity: 1;
                transform: translateX(0rem);
                transition: all 0.3s ease-out;
            }
        }
    }
`;