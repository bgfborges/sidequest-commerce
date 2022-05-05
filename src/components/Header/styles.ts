import styled from 'styled-components'

interface ContainerProps {
    scroll: boolean;
}

// It's a good practice to call Container all the component main div
export const Container = styled.header<ContainerProps>`
    width: 100%;
    padding: 10px;
    position: fixed;
    z-index: 100;
    background: ${ props => props.scroll && 'linear-gradient( to right, var(--black), var(--pink-900))'};

    img {
        width: 100px;
    }

    .content {
        display: flex;
        justify-content: space-between;
        align-items: center;

        div {
            display: flex;
            align-items: center;
        }
    }
`;

export const Logo = styled.div`
    width: 150px;

    @media (max-width: 720px){
        display: none !important;
    }
`;

export const Menu = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    align-items: center;

    li {
        padding: 10px 20px;
        border-radius: 3px;
        transition: 100ms;

        &:hover {
            background: var(--pink-900);
        }
    }

    & + button {
        margin-left: 30px;
    }
`;