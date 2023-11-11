import React from 'react'

import './app.scss'

import Footer from './layout/footer'
import Header from './layout/header'
import Content from './layout/content'
import BreadCrumb from './components/breadcrumb'

const App: React.FC = () => {
    return (
        <div className='app'>
            <Header />
            <BreadCrumb />
            <Content />
            <Footer />
        </div>
    )
}

export default App
