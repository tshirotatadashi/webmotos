import React from 'react'
import './style.css'

export default function LinkButton({ label, className = '', onClick }) {
  return (
    <button className={`link-button ${className}`} onClick={onClick}>
      {label}
    </button>
  )
}
