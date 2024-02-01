import React from 'react'
import { Card, CardTitle, CloseButton, Container } from 'react-bootstrap'
import { useRouteError } from 'react-router-dom'

export default function ErrorPage(){
    const error = useRouteError()
    console.error(error)
  return (
    <div id='error-page'>
        <Container className='p-5'>
        <Card className='rounded-0'>
            <Card.Header className='d-flex justify-content-between'>
                <CardTitle className='px-4'>
                    Ops... Ocoreu um erro
                </CardTitle>
                <a href="/"><CloseButton/></a>
            </Card.Header>
            <Card.Body>
                <p className='p-2'>
                    Pedimos perdao pelo ocorido
                </p>
                <p className='p-2 text-danger'>
                    
                    {error.data}
                </p>
            </Card.Body>
        </Card>
        </Container>
    </div>
  )
}
