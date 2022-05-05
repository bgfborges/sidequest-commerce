import styled from 'styled-components'

// Pass params to the button

interface ButtonProps {
    kind: 'primary' | 'secondary';
    simpleDisabled?: boolean;
}

export const ButtonContainer = styled.button<ButtonProps>`
    border: 0;
    padding: 20px 50px;
    border-radius: 5px;
    font-weight: 600;
    transition: all ease 100ms;

    &:hover {
        filter: brightness(1.1);
        transform: scale(1.02);
    }

    /* background: ${props => props.kind === 'primary' ? 'linear-gradient(to right, var(--pink-900), var(--pink-700))' : 'white'}; */
    color: ${props => props.kind === 'primary' ? 'var(--white)' : 'var(--black)'};

    background: ${props => props?.simpleDisabled ? 'var(--gray-900)' : props.kind === 'primary' ? 'linear-gradient(to right, var(--pink-900), var(--pink-700))' : 'white'};
    color: ${props => props?.simpleDisabled && '#444444'};

`;