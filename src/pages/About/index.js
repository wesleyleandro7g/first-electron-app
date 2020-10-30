import React from 'react'

import Layout from '../../componets/Layout'
import Header from '../../componets/Header'

import { Container, Text } from './styles'

const About = () => {
    return(
        <Layout>
            <Header />
            <Container>
                <Text>Hello Electron</Text>
            </Container>
        </Layout>
    )
}

export default About