import Img from 'next/image'
import Button from '../Button'
import ListUsersExperience from '../ListUsersExperience'
import { Container, ProductImageContent, ProductInfoContent, BannerButtons } from './styles'

interface ProductBanner {
    title: string;
    image: string;
    description: string;
    price: string;
    category: string;
}

export default function ProductBanner({title, image, description, price, category}: ProductBanner){
    return (
        <Container>
            <div className="content">
            <ProductInfoContent>
                    <span>✨ Featured</span>
                    <h1>{title}</h1>
                    <small><strong>Categorias: </strong>{category}</small>
                    <p><span>{price}</span></p>
                    <p>{description}</p>

                    <BannerButtons>
                        <Button kind="primary" text='Comprar Agora' />
                        <Button kind="secondary" text='Adicionar ao Carrinho' />
                    </BannerButtons>

                    <ListUsersExperience />
                </ProductInfoContent>
                <ProductImageContent>
                    <Img src={image} alt="Girl with Virtual Reality Glasses" layout='fill' objectFit='contain' />
                </ProductImageContent>
            </div>
        </Container>
    )
}