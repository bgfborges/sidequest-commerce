import { render } from '@testing-library/react'
import CartIcon from '.'
import { CartContext, CartProvider } from '../../contexts/CartContext'


// Tests with Context API
const customRender = (ui, {providerProps, ...renderOptions}) => {
    return render(
        <CartContext.Provider {...providerProps}>{ui}</CartContext.Provider>,
        renderOptions,
    )
}

describe('CartIcon Component', () => {

    it('should renders correctly', () => {
    
        const { getByText } = render(
            <CartProvider><CartIcon /></CartProvider>
        )

        expect(getByText('0')).toBeInTheDocument()
    
    })
    
    it('should renders with 3 products', () => {

        const providerProps = {
            value: {
                state: {
                    cart: {
                        cartItems: [{}, {}, {}] // Three objects, are three products on the cart
                    }
                }
            }
        }

        const { getByText } = customRender(<CartIcon />, {providerProps})

        expect(getByText('3')).toBeInTheDocument()
    
    })

})