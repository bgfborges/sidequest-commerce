import { ButtonContainer } from './styles'

// Infer the button type from params
type ButtonProps = {
    kind: 'primary' | 'secondary';
    text: string;
    onClick?: () => {};
    disabled?: boolean;
}

export default function Button({ kind, text, onClick, disabled }: ButtonProps) {
    return(
        <ButtonContainer kind={kind} onClick={onClick} disabled={disabled}>
            {text}
        </ButtonContainer>
    )
}