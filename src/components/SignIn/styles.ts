import styled from 'styled-components';

export const Container = styled.button`
    border: 0;
    padding: 10px 30px;
    background-color: var(--white);
    border-radius: 5px;

    @media (max-width: 720px){
        padding: 10px 20px;
    }
`;