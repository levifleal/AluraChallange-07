import React from 'react'
import { Card, Container } from 'react-bootstrap'

//img

import imgpix from '../assets/desktop/Ícones/pix.png'
import sustenta from '../assets/desktop/Ícones/sustentabilidade.png'
import trocag from '../assets/desktop/Ícones/trocagratis.png'

const Facilidades = () => {

    //facilidades

    let pix = {
        img: imgpix,
        title:'Pague pelo Pix',
        text:'Ganhe 5% OFF em pagamentos via PIX'
    }
    let troca = {
        img: trocag ,
        title:'Troca Gratis',
        text:'Fique livre para trocar em até 30 dias'
    }
    let sustentabilidade = {
        img: sustenta,
        title:'Sustentabilidade',
        text:'Moda responsável, que respeita o meio ambiente'
    }

  return (
    <>
        <Card className='border rounded-0 text-center mt-2 p-3' data-bs-theme='dark' bg='black' >
            <Card.Title className='fw-medium fs-2 py-4'>
                Conheca todas as nossas facilidades
            </Card.Title>
            <Container>
            <Card.Body className='d-flex 
            align-items-sm-start
            align-items-start
            justify-content-around 
            flex-sm-row 
            flex-column
            p-0'>
                {[
                    pix ,
                    troca ,
                    sustentabilidade
                ].map((item) =>(
                    <Card bg='black' key={item.title} className='d-flex flex-row border-0'>
                        <Card bg='black' className='border-0 p-2 m-1'>
                            <Card.Img style={{width:'72px'}} src={item.img}/>
                        </Card>
                        <Card bg='black' className='border-0 p-1 m-1' style={{maxWidth:'275px'}}>
                            <Card.Title className='text-start px-2 fs-5 text-yellow'>
                                {item.title}
                            </Card.Title>
                            <Card.Body className='p-2'> 
                                <p className='text-start '>{item.text}</p>
                            </Card.Body>
                        </Card>
                    </Card>

            ))}
            </Card.Body>
            </Container>
        </Card>
    </>
  )
}

export default Facilidades