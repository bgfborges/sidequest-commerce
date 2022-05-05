import { Container, OrderContent } from '../../styles/orderStyles'
import Header from "../../components/Header";
import Head from '../../components/Head';

export default function Order(){
    return (
        <>
            <Head title="Ordem de Serviço | Sidequest" />
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