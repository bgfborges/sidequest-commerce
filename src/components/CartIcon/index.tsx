import { useContext, useEffect, useState } from 'react'
import { BsFillCartFill } from 'react-icons/bs'
import { CartContext } from '../../contexts/CartContext'
import { Container } from './styles'

type Cart = {
    cart: {
        cartItems: []
    }
}

export default function CartIcon() {

    const { state } = useContext(CartContext);

    const [cartItems, setCartItems] = useState<Cart>({ cart: { cartItems: [] } });

    useEffect(() => {
        setCartItems(state)
    }, [state])

    return(
        <Container>
            <BsFillCartFill />
            <span>{cartItems.cart.cartItems.length}</span>
        </Container>
    )
}