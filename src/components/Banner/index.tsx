import { Container, InfoContent, ImageContent, BannerButtons } from './styles'
import Img from 'next/image'
import Button from '../Button'
import ListUsersExperience from '../ListUsersExperience'
import { Link as Anchor, animateScroll as scroll } from "react-scroll";
import Link from 'next/link';

export default function Banner(){

    return(
        <Container>
            <div className='content'>
                <InfoContent>
                    <span>👋 Welcome!</span>
                    <h1>Nós Transformamos Comer e Beber em Jogo.</h1>
                    <p>Adquira agora o equipamento necessário para ter sua experiência por Delivery.</p>

                    <BannerButtons>
                        <Anchor
                        activeClass="active"
                        to="categories"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}                    
                        >
                            <Button kind="primary" text='Ver Produtos' />
                        </Anchor>
                        <Link href="https://github.com/bgfborges/sidequest-commerce"><a><Button kind="secondary" text='Saiba Mais' /></a></Link>
                    </BannerButtons>

                    <ListUsersExperience text="Veja como é a Experiência" />
                </InfoContent>
                <ImageContent>
                    <Img src="/images/banner-vr.svg" alt="Girl with Virtual Reality Glasses" layout='fill' objectFit='contain' />
                </ImageContent>
            </div>
        </Container>
    )
}