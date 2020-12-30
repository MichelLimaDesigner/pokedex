import styled, { keyframes } from 'styled-components';

const anime = keyframes `
    from {
        transform: rotate(0deg);
    }

    to{
        transform: rotate(360deg);
    }
`;

export const LoaderContent = styled.div `
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .loader{
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        border: solid 0.3rem var(--color-border);
        border-right: solid 0.3rem #696969;
        animation: ${anime} 1s linear infinite;
    }
`;