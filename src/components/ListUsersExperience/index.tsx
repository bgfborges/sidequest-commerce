import { Container } from './styles'
import Img from 'next/image'

export default function ListUsersExperience(){
    return(
        <Container>
            <li><Img src="/images/user-1.png" alt="Gabriel Dantas" width={32} height={32} objectFit='contain' /></li>
            <li><Img src="/images/user-2.png" alt="Gabriel Dantas" width={32} height={32} objectFit='contain' /></li>
            <li><Img src="/images/user-3.png" alt="Gabriel Dantas" width={32} height={32} objectFit='contain' /></li>
            <li><Img src="/images/user-4.png" alt="Gabriel Dantas" width={32} height={32} objectFit='contain' /></li>
            <li>Veja como nossos clientes usam</li>
        </Container>
    )
}