import React, { useState } from 'react'
import { Card, Container, Offcanvas } from 'react-bootstrap'
import produtosDb from '../db'



const Produtos = (props) => {
    const [show, setShow] = useState(props.showText);


    

  return (
    <>
            <div hidden={!show} id='text' className=' border-0 text-center py-4'>
                <h1 className='fs-5 fw-bold'>
                    Produtos que estão bombando
                </h1>
            </div>
            <div className='d-flex flex-wrap justify-content-center m-auto mb-5 'style={{maxWidth:'1200px'}}>
                {
                produtosDb.map((item) => (
                    <Card key={item.title} className='border-gray rounded-0 m-2 card-hover2' style={{maxWidth:'350px'}} >
                        <Card.Img className=' border rounded-0' style={{height:'100%'}} src={item.img}/>
                        <Card.Body>
                            <Card.Title className='fw-bold fs-4'>
                                {item.title}
                            </Card.Title>
                            <Card.Text className='fw-light py-3'>
                                {item.desc}
                            </Card.Text>
                            <Card.Text className='fw-bold'>
                                {item.price}
                            </Card.Text>
                            <Card.Link  href={item.path} className='btn btn-primary mt-3 rounded-0 px-4 btn-loja'>
                                Ver mais
                            </Card.Link>
                        </Card.Body>
                    </Card>
                ))}
            </div>
    </>
  )
}

export default Produtos