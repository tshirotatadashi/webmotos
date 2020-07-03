import React from 'react'
import './style.css'

export default function ButtonComponent({ label, className = '', onClick }) {
  return (
    <button className={`app-button ${className}`} onClick={onClick}>
      {label}
    </button>
  )
}
