import Header from "../../components/Header";
import Head from "../../components/Head";
import { useContext, useEffect, useRef, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import Button from '../../components/Button';
import { Container, InputQuantity, ProductListContainer, ProductListItems, ResumeInfo, ProductInfo, ProductImage, EndItemControls, ExcludeIcon } from '../../styles/cartStyles'
import { MdBookmarkRemove } from 'react-icons/md'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { StoreAPI } from "../../services/api";

export default function Cart() {

    const {state, dispatch} = useContext(CartContext)
    const [products, setProducts] = useState([])
    const [total, setTotal] = useState<string>();
    const router = useRouter()

    const storeApi = new StoreAPI()

    const updateCartItems = () => {
        let products = state.cart.cartItems;
        setProducts(products)
    }

    // Update the Cart Items and Total
    useEffect(() => {
        updateCartItems()
        
        // This because the first call need to be from the state
        const total = new Intl.NumberFormat('es-US', {
            style: 'currency',
            currency: 'BRL',
            currencyDisplay: 'narrowSymbol'
        }).format(state.cart.cartItems.reduce((a, c) => a + Number(c.quantity) * Number(c.price.replace(/[^0-9.-]+/g,"")), 0))

        setTotal(total);
    }, [])


    const handleInputQuantityChange = (product, e) => {
        const quantity = e.target.value;
        product.quantity = quantity;
        products.forEach(item => item.id === product.id ?? (product.quantity = quantity) )
        dispatch({ type: 'CART_ADD_ITEM', payload: {...product, quantity} })

        getTotal()
    }
    
    const handleExcludeItem = (id) => {
        dispatch({ type: 'CART_REMOVE_ITEM', payload: id })

        getTotal()
    }

    const handleSubmitCart = async () => {
        // Send data to the server API
        await storeApi.postOrder({
            clientId: 'uuid-fake-id',
            products: products,
            discounts: null,
            coupons: null,
            total: total
          })

        router.push('/order')
    }

    const getTotal = () => {

        const total = new Intl.NumberFormat('es-US', {
            style: 'currency',
            currency: 'BRL',
            currencyDisplay: 'narrowSymbol'
        }).format(products.reduce((a, c) => a + Number(c.quantity) * Number(c.price.replace(/[^0-9.-]+/g,"")), 0))
        console.log(products);
        setTotal( total );
    }

    return (
        <>
            <Head title="Carrinho | Finalize agora sua compra"/>
            <Header />
            <Container>
                <div className="content">
                    <ProductListContainer>
                        <h1><span>Cart</span> {'>'} Produtos</h1>
                        <div>
                            <ProductListItems>
                                {products.map( (product, i) => 
                                    <li key={product.id}>
                                        <Link href={`/category/${product.categoryId}/product/${product.id}`}>
                                            <a href={`/category/${product.categoryId}/product/${product.id}`}>
                                                <ProductInfo>
                                                    <ProductImage src={product.image} />
                                                    <div>
                                                        <h2>{product.title}</h2>
                                                        <small>{product.price} x {product.quantity}</small>
                                                    </div>
                                                </ProductInfo>
                                            </a>
                                        </Link>
                                        <EndItemControls>
                                            <InputQuantity>
                                                <input type="number" min="1" value={product.quantity} onChange={(e) => handleInputQuantityChange(product, e)} />
                                            </InputQuantity>
                                            <ExcludeIcon>
                                                <MdBookmarkRemove onClick={() => handleExcludeItem(product.id)} />
                                            </ExcludeIcon>
                                        </EndItemControls>
                                    </li>
                                )}
                            </ProductListItems>
                            <ResumeInfo>
                                <div>
                                    <ul>
                                        <li>Resumo ({products.reduce((a, c) => a + Number(c.quantity), 0)} Items)</li>
                                        <li>Coupon: R$0</li>
                                        <li>Discount: R$0</li>
                                        <li>{`Total: ${total}`}</li>
                                    </ul>
                                </div>
                                <Button text='Finalizar Compra' kind="primary" onClick={handleSubmitCart} />
                            </ResumeInfo>
                        </div>
                    </ProductListContainer>
                </div>
            </Container>
        </>
    )
} 