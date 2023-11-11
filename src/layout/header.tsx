import React from 'react'

import './header.scss'

import LogoOCA from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'

const Header: React.FC = () => {
    const navigate = useNavigate()

    const handleClickLogo = () => {
        navigate('/')
    }

    return (
        <header>
            <img src={LogoOCA} alt="logo" onClick={handleClickLogo} />
        </header>
    )
}

export default Header