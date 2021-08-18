import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LogoG81 from '../assets/G81.svg'
import { Container } from '../styles/Home'

const Home: NextPage = () => {
    return (
        <Container>
            <h1>Hello World!</h1>
            <LogoG81 />
        </Container>
    )
}

export default Home
