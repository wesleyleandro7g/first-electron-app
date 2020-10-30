import React from 'react'

import Layout from '../../componets/Layout'
import Header from '../../componets/Header'

import { Container, Text } from './styles'

const Home = () => {    
    return(
        <Layout>
            <Header />
            <Container>
                <Text>Hello React</Text>
            </Container>
        </Layout>
    )
}

export default Home