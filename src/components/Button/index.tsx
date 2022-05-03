import { ButtonContainer } from './styles'

// Infer the button type from params
type ButtonProps = {
    kind: 'primary' | 'secondary';
    text: string;
}

export default function Button({ kind, text }: ButtonProps) {
    return(
        <ButtonContainer kind={kind}>
            {text}
        </ButtonContainer>
    )
}