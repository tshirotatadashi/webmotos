import React, { useState, useEffect } from 'react'
import './style.css'

export default function Select({ label, placeholder = '', value, opitons = [], onChange, className = '', disabled }) {
  const [selected, setSelected] = useState(0)
  useEffect(() => {
    if (value) setSelected(value)
    else setSelected(0)
  }, [value])

  const SelectOptions = () => {
    const list = opitons.map((item, key) => (
      <option key={key + 1} value={item.ID}>
        {item.Name}
      </option>
    ))
    list.unshift(
      <option key={0} value={0}>
        {placeholder}
      </option>
    )
    return list
  }
  return (
    <div className={`select-wrapper ${className}`}>
      <label>{label}</label>
      <select
        value={selected}
        disabled={disabled}
        className='select-drop'
        onChange={({ target }) => {
          onChange(target.value)
          setSelected(target.value)
        }}
      >
        <SelectOptions />
      </select>
    </div>
  )
}
