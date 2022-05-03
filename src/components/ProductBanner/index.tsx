import Img from 'next/image'
import { useContext, useEffect, useState } from 'react';
import Button from '../Button'
import ListUsersExperience from '../ListUsersExperience'
import { Container, ProductImageContent, ProductInfoContent, BannerButtons } from './styles'
import { CartContext } from '../../contexts/CartContext'

interface ProductBanner {
    title: string;
    image: string;
    description: string;
    price: string;
    category: string;
    id: string;
}

export default function ProductBanner(product: ProductBanner){

    const { state, dispatch } = useContext(CartContext);
    const [isProductOnCart, setIsProductOnCart] = useState(false);

    const addProductToCart = async () => {
        // It's very basic, so we are not checking the Stock, what we could do here
        dispatch({ type: 'CART_ADD_ITEM', payload: {...product, quantity: 1} })
    }

    // For good practice, make an unacloped function to check product on the cart

    useEffect(() => {
        const productOnCart = !!state.cart.cartItems.find(item => item.id === product.id )

        setIsProductOnCart(productOnCart);
    }, [state, product.id])

    return (
        <Container>
            <div className="content">
            <ProductInfoContent>
                    <span>✨ Featured</span>
                    <h1>{product.title}</h1>
                    <small><strong>Categorias: </strong>{product.category}</small>
                    <p><span>{product.price}</span></p>
                    <p>{product.description}</p>

                    <BannerButtons>
                        <Button kind="primary" text='One Click Purchase' />
                        <Button kind="secondary" text={isProductOnCart ? 'Ver Carrinho' : 'Adicionar ao Carrinho'} onClick={addProductToCart} disabled={isProductOnCart} />
                        <span>Produto Adicionado</span>
                    </BannerButtons>

                    <ListUsersExperience />
                </ProductInfoContent>
                <ProductImageContent>
                    <Img src={product.image} alt="Girl with Virtual Reality Glasses" layout='fill' objectFit='contain' />
                </ProductImageContent>
            </div>
        </Container>
    )
}