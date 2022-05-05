import { render } from '@testing-library/react'
import Button from '.'

test('if button renders correctly', () => {
    
    const { debug } = render(
        <Button kind='primary' text='testing' simpleDisabled={true} onClick={() => alert('testing')} />
    )

    debug()

})