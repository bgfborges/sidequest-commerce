import { Container, OrderContent } from './styles'
import Header from "../../components/Header";

export default function Order(){
    return (
        <>
            <Header />
            <Container>
                <div className="content">
                    <OrderContent>
                        <h1>Ordem de Serviço</h1>
                        <p>A ordem de serviço foi submetida. Tudo deu certo. Em breve você receberá seu produto.</p>
                    </OrderContent>
                </div>
            </Container>
        </>
    )
}