import { render, screen, waitFor } from '@testing-library/react'
import Cart from '.'
import { CartContext } from '../../contexts/CartContext'

// Tests with Context API
const customRender = (ui, {providerProps, ...renderOptions}) => {
    return render(
        <CartContext.Provider {...providerProps}>{ui}</CartContext.Provider>,
        renderOptions,
    )
}

describe('Cart Page', () => {

    it('should load initial data', async () => {
        
        const providerProps = {
            value: {
                state: {
                    cart: {
                        cartItems: [
                            {
                                id: '1',
                                title: 'Oculos 1',
                                price: '10',
                                thumbnail: 'http://loremflickr.com/640/480/technics',
                                quantity: 1,
                            },
                            {
                                id: '2',
                                title: 'Oculos 2',
                                price: '10',
                                thumbnail: 'http://loremflickr.com/640/480/technics',
                                quantity: 1,
                            },
                            {
                                id: '3',
                                title: 'Oculos 3',
                                price: '10',
                                thumbnail: 'http://loremflickr.com/640/480/technics',
                                quantity: 1,
                            },
                        ] // Three objects, are three products on the cart
                    }
                }
            }
        }

        // Render the Page
        customRender(<Cart />, {providerProps})

        // Check if the three products was loaded on cart
        await waitFor(() => expect(screen.getByText('Oculos 1')).toBeInTheDocument())
        await waitFor(() => expect(screen.getByText('Oculos 2')).toBeInTheDocument())
        await waitFor(() => expect(screen.getByText('Oculos 3')).toBeInTheDocument())

        // Check if the price total is loading correctly
        const total = `Total: R$${30}.00`; // Total in the provided data (it can be improved with .reduce and native javascript to handle prices)
        await waitFor(() => expect(screen.getByText(total)).toBeInTheDocument())

    })

})