import styled from 'styled-components';

export const ErrorPage = styled.div `
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    h1{
        color: var(--color-dark-primary);
        font-size: 6rem;
        text-align: center;
    }

    h3{
        font-weight: 200;
        text-align: center;
    }

    a{
        width: 100%;
    }

    .btn{
        margin-top: 3rem;
    }
`;