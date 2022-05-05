import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ListCategories from '.'

jest.mock('../../services/api') // StoreAPI is now mocked

function setup(jsx) {
    return {
        user: userEvent.setup(),
        ...render(jsx),
    }
}

describe('ListCategories Component', () => {

    it('should renders correctly', () => {

        const categories = [{id: '1', name: 'Test', description: 'Testdesc', thumbnail: '/image' }]
        const products = [{id: '1', name: 'PTest', description: 'PTestdesc', thumbnail: '/Pimage', price: '10', categoryId: '1' }]
    
        const { getByText, getAllByText, debug } = render(
            <ListCategories categories={categories} products={products} />
        )
        
        expect(getAllByText('Test')).toBeTruthy()
        expect(getByText('PTest')).toBeInTheDocument()
        expect(getByText('Testdesc')).toBeInTheDocument()
    
    })

})