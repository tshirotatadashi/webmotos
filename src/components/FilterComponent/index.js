import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import SelectComponent from '../SelectComponent'
import LinkButton from '../LinkButton'
import ButtonComponent from '../ButtonComponent'
import { getRequest } from '../../store/modules/vehicles/actions'
import { getMake, getModel, getVersion } from '../../services/getFilters'
import filterIcon from '../../assets/svg/filter_icon.svg'
import arrowIcon from '../../assets/svg/arrow_down.svg'
import { ragius, year, price } from '../../constants/filterValues'
import './style.css'

export default function Filter({ filterOptions, setFilterOptions }) {
  const dispatch = useDispatch()
  const [makeOptions, setMakeOptions] = useState([])
  const [modelOptions, setModelOptions] = useState([])
  const [versionOptions, setVersionOptions] = useState([])

  useEffect(() => {
    getMake().then(data => setMakeOptions(data))
  }, [])

  function setFilterType(type, value) {
    setFilterOptions({ ...filterOptions, [type]: value })
  }
  return (
    <div className='filter-wrapper'>
      <img
        className='filter-icon'
        alt='filter icon'
        src={filterIcon}
        onClick={() => document.documentElement.classList.add('filter-actived')}
      />
      <div className='filter'>
        <div className='type-box'>
          <input
            type='checkbox'
            defaultChecked={filterOptions?.newVehicle}
            onClick={() => setFilterOptions({ ...filterOptions, newVehicle: !filterOptions?.newVehicle })}
          />
          <label>Novos</label>
          <input
            type='checkbox'
            defaultChecked={filterOptions?.usedVehicle}
            onClick={() => setFilterOptions({ ...filterOptions, usedVehicle: !filterOptions?.usedVehicle })}
          />
          <label>Usados</label>
        </div>
        <SelectComponent
          className='filter-select radius'
          label='Raio:'
          value={filterOptions?.radius}
          opitons={ragius()}
          onChange={id => setFilterType('radius', id)}
        />
        <SelectComponent
          className='filter-select make'
          label='Marca:'
          placeholder='Todas'
          value={filterOptions?.make?.ID}
          opitons={makeOptions}
          onChange={id => {
            setFilterType(
              'make',
              makeOptions.find(({ ID }) => ID === +id)
            )
            getModel(id).then(data => setModelOptions(data))
          }}
        />
        <SelectComponent
          className='filter-select model'
          label='Modelo:'
          placeholder='Todos'
          value={filterOptions?.model?.ID}
          opitons={modelOptions}
          onChange={id => {
            setFilterType(
              'model',
              modelOptions.find(({ ID }) => ID === +id)
            )
            getVersion(id).then(data => setVersionOptions(data))
          }}
          disabled={modelOptions.length < 1}
        />
        <SelectComponent
          className='filter-select year'
          label='Ano desejado:'
          placeholder='Todos'
          value={filterOptions?.year}
          opitons={year()}
          onChange={id => setFilterType('year', id)}
        />
        <SelectComponent
          className='filter-select price'
          label='Faixa de preço:'
          placeholder='Todos'
          value={filterOptions?.price}
          opitons={price}
          onChange={id => setFilterType('price', id)}
        />
        <SelectComponent
          className='filter-select version'
          label='Versão:'
          placeholder='Todas'
          value={filterOptions?.version?.ID}
          opitons={versionOptions}
          onChange={id =>
            setFilterType(
              'version',
              versionOptions.find(({ ID }) => ID === +id)
            )
          }
          disabled={versionOptions.length < 1}
        />
        <img
          className='close-icon'
          src={arrowIcon}
          alt='close icon'
          onClick={() => document.documentElement.classList.remove('filter-actived')}
        />
      </div>
      <LinkButton
        label='Limpar filtros'
        className='clear-filter'
        onClick={() => {
          setModelOptions([])
          setVersionOptions([])
          setFilterOptions({ newVehicle: true, usedVehicle: true })
        }}
      />
      <ButtonComponent
        className='search-filter'
        label='Ver Ofertas'
        onClick={() => {
          dispatch(getRequest(1))
        }}
      />
    </div>
  )
}
