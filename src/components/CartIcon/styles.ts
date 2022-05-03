import styled from 'styled-components'

export const Container = styled.div`
    padding: 20px;
    position: relative;

    svg {
        width: 20px;
        height: 20px;
    }

    span {
        position: absolute;
        background: var(--pink-900);
        font-size: 0.8rem;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        top: 5px;
        right: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;