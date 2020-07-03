import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRequest } from '../../store/modules/vehicles/actions'
import './style.css'
const PAGES = 3

export default function VehiclesList({ filterOptions }) {
  const dispatch = useDispatch()
  const vehicles = useSelector(state => state.vehicles.list)
  const [selectedPage, setSelectedPage] = useState(1)
  const [vehiclesList, setVehiclesList] = useState([])

  useEffect(() => {
    let list = vehicles
    if (!filterOptions?.newVehicle) {
      list = list.filter(vehicle => vehicle.KM > 0)
    }
    if (!filterOptions?.usedVehicle) {
      list = list.filter(vehicle => vehicle.KM === 0)
    }
    if (filterOptions?.make) {
      list = list.filter(vehicle => vehicle?.Make === filterOptions.make.Name)
    }
    if (filterOptions?.model) {
      list = list.filter(vehicle => vehicle?.Model === filterOptions.model.Name)
    }
    if (filterOptions?.version) {
      list = list.filter(vehicle => vehicle?.Version === filterOptions.version.Name)
    }
    if (filterOptions?.year) {
      list = list.filter(vehicle => vehicle.YearFab === filterOptions.year)
    }
    if (filterOptions?.price && filterOptions.price > 0) {
      list = list.filter(vehicle => parseInt(vehicle.Price) <= filterOptions.price * 10000)
    }
    setVehiclesList(list)
  }, [filterOptions, vehicles])

  const List = () => {
    return vehiclesList.map(item => {
      const { ID, Image, Make, Model, Version, Price, YearFab, YearModel, KM } = item
      return (
        <li key={ID} className='vehicle-item'>
          <div className='vehicle-image'>
            <img src={Image} alt={`${Make} ${Model}`} />
          </div>

          <h1 className='vehicle-title'>
            <span>{Make}</span>
            <span>{Model}</span>
          </h1>
          <p className='vehicle-version'>{Version}</p>
          <p className='vehicle-Price'>
            <span>R$</span>
            {Price}
          </p>
          <span>
            {YearFab}/{YearModel}
          </span>
          <span>{KM} Km</span>
        </li>
      )
    })
  }

  const Pages = () => {
    const pageList = []
    for (let page = 1; page <= PAGES; page++) {
      pageList.push(
        <li
          key={page}
          className={selectedPage === page ? 'selected-page' : ''}
          onClick={() => {
            setSelectedPage(page)
            dispatch(getRequest(page))
            window.scrollTo(0, 0)
          }}
        >
          {page}
        </li>
      )
    }
    return vehicles.length > 0 ? <ul className='list-pages'>{pageList}</ul> : <></>
  }

  return (
    <>
      <ul className='vehicles-list'>
        <List />
      </ul>
      <Pages />
    </>
  )
}
