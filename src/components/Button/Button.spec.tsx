import { render } from '@testing-library/react'
import Button from '.'

describe('Button Component', () => {

    it('should renders correctly', () => {
    
        const { getByText } = render(
            <Button kind='primary' text='testing' simpleDisabled={true} onClick={() => alert('testing')} />
        )
    
        expect(getByText('testing')).toBeInTheDocument()
    
    })
    
    it('kind should renders correctly', () => {
        
        const { getByText } = render(
            <Button kind='primary' text='testing' />
        )
    
        expect(getByText('testing')).toHaveAttribute('kind', 'primary')
    
    })

})