import React from 'react'
import { useHistory } from 'react-router-dom'

import { Container, Content, Title, Button } from './styles'

const Header = () => {
    const history = useHistory()

    function handleNavigation(page) {
        history.push(page)
    }

    return(
        <Container>            
            <Title>Fucking Header</Title>
            <Content>
                <Button onClick={() => handleNavigation('/')} >React</Button>
                <Button onClick={() => handleNavigation('/electron')} >Electron</Button>
            </Content>
        </Container>
    )
}

export default Header