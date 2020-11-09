import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import Layout from '../../components/Layout'

const Home = () => {
    return (
        <Layout>
            <Jumbotron styñe={{margin: '5rem', background: '#fff'}} className='text-center'>
                <h1>Bienvenido al Dashboard del Administrador</h1>
                <p>Lorem ipsum </p>
            </Jumbotron>
        </Layout>
    )
}

export default Home
