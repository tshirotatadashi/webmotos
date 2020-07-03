import React, { useState } from 'react'
import HeaderComponent from '../../components/HeaderComponent'
import FilterComponent from '../../components/FilterComponent'
import VehiclesList from '../../components/VehiclesList'

export default function Home() {
  const [filterOptions, setFilterOptions] = useState({ newVehicle: true, usedVehicle: true })
  return (
    <>
      <HeaderComponent />
      <main className='main'>
        <FilterComponent filterOptions={filterOptions} setFilterOptions={setFilterOptions} />
        <VehiclesList filterOptions={filterOptions} />
      </main>
    </>
  )
}
