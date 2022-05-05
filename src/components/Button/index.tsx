import { ButtonContainer } from './styles'

// Infer the button type from params
type ButtonProps = {
    kind: 'primary' | 'secondary';
    text: string;
    onClick?: () => void;
    disabled?: boolean;
    simpleDisabled?: boolean;
}

export default function Button({ kind, text, onClick, simpleDisabled }: ButtonProps) {
    return(
        <ButtonContainer kind={kind} onClick={onClick} simpleDisabled={simpleDisabled}>
            {text}
        </ButtonContainer>
    )
}