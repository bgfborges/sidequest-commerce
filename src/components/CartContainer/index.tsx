import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import Button from '../Button';
import { Container, InputQuantity, ProductListContainer, ProductListItems, ResumeInfo, ProductInfo, ProductImage } from './styles'
import { MdBookmarkRemove } from 'react-icons/md'

export default function CartContainer(){

    const {state} = useContext(CartContext);
    const [products, setProducts] = useState([])

    useEffect(() => {
        let products = state.cart.cartItems;
        setProducts(products)
    }, [])

    console.log(products);

    return(
        <Container>
            <div className="content">
                <ProductListContainer>
                    <h1><span>Cart</span> {'>'} Produtos</h1>
                    <div>
                        <ProductListItems>
                            {products.map( product => <li key={product.id}>
                                <ProductInfo>
                                    <ProductImage src={product.image} />
                                    <h2>{product.title}</h2>
                                </ProductInfo>
                                <InputQuantity>
                                    <input type="number" value={product.quantity} />
                                    <MdBookmarkRemove />
                                </InputQuantity>
                            </li> ) }
                        </ProductListItems>
                        <ResumeInfo>
                            <div>
                                <ul>
                                    <li>Subtotal: R$10,00</li>
                                    <li>Disconto: R$10,00</li>
                                    <li>Total: R$10,00</li>
                                </ul>
                            </div>
                            <Button text='Finalizar Compra' kind="primary" />
                        </ResumeInfo>
                    </div>
                </ProductListContainer>
            </div>
        </Container>
    )
}