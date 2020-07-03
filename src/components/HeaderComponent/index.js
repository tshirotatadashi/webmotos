import React from 'react'
import logo from '../../assets/svg/webmotors.svg'
import './style.css'

export default function HeaderComponent() {
  return (
    <header className='app-header'>
      <img src={logo} className='app-logo' alt='logo' />
    </header>
  )
}
