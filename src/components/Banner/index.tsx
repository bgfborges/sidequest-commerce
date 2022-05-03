import { Container, InfoContent, ImageContent, BannerButtons } from './styles'
import Img from 'next/image'
import Button from '../Button'
import ListUsersExperience from '../ListUsersExperience'

export default function Banner(){
    return(
        <Container>
            <div className='content'>
                <InfoContent>
                    <span>👋 Welcome!</span>
                    <h1>Nós Transformamos Comer e Beber em Jogo.</h1>
                    <p>Adquira agora o equipamento necessário para ter sua experiência por Delivery.</p>

                    <BannerButtons>
                        <Button kind="primary" text='Ver Produtos' />
                        <Button kind="secondary" text='Saiba Mais' />
                    </BannerButtons>

                    <ListUsersExperience />
                </InfoContent>
                <ImageContent>
                    <Img src="/images/banner-vr.svg" alt="Girl with Virtual Reality Glasses" layout='fill' objectFit='contain' />
                </ImageContent>
            </div>
        </Container>
    )
}