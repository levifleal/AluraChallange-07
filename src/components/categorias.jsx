import React from 'react'
import { Card, Container } from 'react-bootstrap'

//import css
import css from './component.module.css'

//import imgs
import camiseta from '../assets/desktop/Categorias/Categoriacamiseta.png'
import bolsa from '../assets/desktop/Categorias/CategoriaBolsa.png'
import calca from '../assets/desktop/Categorias/Categoriacalça.png'
import calcado from '../assets/desktop/Categorias/CategoriaCalçados.png'
import casaco from '../assets/desktop/Categorias/Categoriacasacos.png'
import oculo from '../assets/desktop/Categorias/Categoriaoculos.png'

const Categorias = () => {

  //items para categorias
  let camisetas = {
    img:camiseta,
    name:'Camisetas'
  }

  let bolsas = {
    img:bolsa,
    name:'Bolsas'
  } 

  let calcados = {
    img:calcado,
    name:'Calcados'
  }

  let calcas = {
    img:calca,
    name:'Calcas'
  }

  let casacos = {
    img:casaco,
    name:'Casacos'
  }

  let oculos = {
    img:oculo,
    name:'Óculos'
  }


  return (
    <> 
    <Container>
      <div className='text-center mt-5 p-3'>
        <h1 className='fw-semibold fs-2'>
          Busque por categoria:
        </h1>
      </div>
      <div className='d-flex flex-wrap justify-content-center'>
        {[
        camisetas ,
        bolsas ,
        calcados ,
        calcas ,
        casacos ,
        oculos , 
        ].map((item) => (
        <Card  style={{maxWidth:'160px'}} bg='black' className="btn p-0 border rounded-0 m-3 card-hover"   key={item.name}>
          <Card.Img className='rounded-0' variant='top' src={item.img}/>
          <Card.Body>
            <Card.Title className='text-center fs-5 m-1 text-light p-0'>
              {item.name}
            </Card.Title>
          </Card.Body>
        </Card>
      )
      )
      }
      </div>
    </Container>
    </>
  )
}

export default Categorias