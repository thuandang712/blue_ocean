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

import { TabContent } from 'react-bootstrap'

export const DefaultLayout = () => {
    return (
        <div className='default-layout'>
            <header className="header">
            <Header />
            </header>
            
            <content>
            Main Page
            </content>
            

            <footer className="footer">
                <Footer />
            </footer>
            
        </div>
    )
}

