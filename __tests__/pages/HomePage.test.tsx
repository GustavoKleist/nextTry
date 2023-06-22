import Home from '@/app/page'
import {render, screen} from '@testing-library/react'

describe('Render home page test', ()=> {

    it('Should have home page rendered', ()=> {
        render(<Home />)
        screen.getByText('Hey I am a new page, now automatically deployed')
        screen.getByText('oie')
    })
})