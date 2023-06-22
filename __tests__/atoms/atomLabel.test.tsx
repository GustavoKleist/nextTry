import AtomLabel from '@/app/components/atoms/AtomLabel';
import {render, screen} from '@testing-library/react'


describe('Render home page test', () => {
    it('should render atom label with label', () => {
        render(<AtomLabel text='oie'/>)
        screen.getByText('oie')
    })
})