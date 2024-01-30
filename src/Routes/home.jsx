import React from 'react'
import BannerCarrosel from '../components/bannerCarrosel'
import Categorias from '../components/categorias'
import Facilidades from '../components/facilidades'
import Produtos from '../components/produtos'
import Novidades from '../components/novidades'

const Home = () => {
  document.title = 'Home | METEORA'
  return (
   <>
   <div className='content'>
    <BannerCarrosel/>
    <Categorias/>
    <Produtos showText={true} />
    <Facilidades/>
    <Novidades/>
   </div>
   </>
  )
}

export default Home