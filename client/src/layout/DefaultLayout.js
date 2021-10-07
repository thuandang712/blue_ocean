import React from 'react'
import { Header } from './package/Header'
import { Footer } from './package/Footer'

export const DefaultLayout = () => {
    return (
        <div>
            <Header />
            Main Page
            <Footer />
        </div>
    )
}
