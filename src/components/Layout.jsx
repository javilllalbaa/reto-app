import React from 'react'
import { LayoutContainer } from '../theme';
import Header from './Header'
import Footer from './Footer'   

function Layout(props) {
    return (
        <LayoutContainer>
            <Header></Header>
            <main>
                {props.children}
            </main>
            <Footer></Footer>
        </LayoutContainer>
    )
}

export default Layout
