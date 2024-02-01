import React from 'react'
import { Form, FormCheck } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import produtosDb from '../db'

const IndividualItem = () => {
    

    const {item} = useParams();
    

    

    function  searchProduct(item){
        for(let i = 0;i < produtosDb.length;i++){
            if(item == produtosDb[i].name){
                 let product = produtosDb[i]
            return product
            }
            console.log('passou')
        }
    }

    let product = searchProduct(item);
    document.title = `METEORA`
    console.log(item)

  return (
    <>
        <div className='d-flex flex-column flex-sm-row p-5 mx-auto border-1 shadow-lg border-secondary border my-4'
        style={{maxWidth:'700px'}}>
                <img src={product.img} alt="" />
            <div className='px-4'>
                <div className='border-bottom border-2 border-black'>
                <h1 className='fw-bold fs-6 mb-4 py-2'> {product.title} </h1>
                <p className='fw-normal mb-4'>  {product.desc} </p>
                </div>
                <div>
                <h1 className=' fs-5 my-3'> {product.price} </h1>
                <p className='text-secondary border-secondary border-bottom border-1 py-3 mb-3 fw-light'> vendido e entregue por Alura</p>
                </div>
                <Form className=' border-bottom border-1 border-secondary'>
                    <Form.Label className='fw-bold'>
                        Cores:
                    </Form.Label>
                    <Form.Group className='d-flex'>
                            {product.cores.map((cor,idx) =>(
                            <FormCheck className='d-flex flex-column py-3'
                            inline
                            key={idx}
                            id={idx}
                            >
                               <FormCheck.Input className='m-auto
                               radio' style={{'--bs-form-check-bg':`var(--${cor.replace(/\s/g,'')})`}} type='radio' name='grupo1'/> 
                               <FormCheck.Label>{cor}</FormCheck.Label>
                            </FormCheck>
                            ))}
                    </Form.Group>
                </Form>
                <Form>
                    <Form.Label className='fw-bold mt-3'>
                        Tamanho:
                    </Form.Label>
                    <Form.Group className='d-flex'>
                            {product.tamanho.map((size,idx) =>(
                            <FormCheck className='d-flex flex-column py-3'
                            key={idx}
                            id={idx}
                            >
                               <FormCheck.Input className='m-auto radio-size' 
                                type='radio' name='grupo1'/> 
                               <FormCheck.Label>{size}</FormCheck.Label>
                            </FormCheck>
                            ))}
                    </Form.Group>
                </Form>
                <button className='btn btn-loja rounded-0 text-light'>
                    Adicionar na Sacola
                </button>
            </div>
        </div>
    </>
  )
}

export default IndividualItem