import React from 'react'
import {useState} from 'react'
import IndividualItem from '../components/individualItem'
import Novidades from '../components/novidades'
import { Modal } from 'react-bootstrap'
import Produtos from '../components/produtos'

const Items = () => {
  document.title = 'METEORA'
  return (
    <>
    <div className='content'>
        <IndividualItem/>
        <Produtos showText={false} />
        <Novidades/>
    </div>
    </>
  )
}

export default Items