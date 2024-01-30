import React from 'react'
import { useState } from 'react';
import { Card, Container, Form, Button,Modal  } from 'react-bootstrap'

import * as formik from 'formik';
import * as yup from 'yup';

import check from '../assets/check.svg'
import { validateYupSchema } from 'formik/dist';



const Novidades = () => {
  const [show, setShow] = useState();
  const { Formik } = formik;

  

  const schema = yup.object().shape({
    email: yup.string().email().required()
  })

  function handleSubmit(){
    setShow(true)
  }


  const handleHide = () => setShow(false)

  return (
    <>
    <Formik
      validationSchema={schema}
      onSubmit={handleSubmit}
      initialValues={{
        email:'',
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Container className='my-5'>
        <Card className='border-black border-2 rounded-0' style={{maxWidth:'720px',margin:'0 auto'}}>
            <Card.Text className='text-center fw-light fs-5 py-4 px-5'>
            Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? Cadastre-se!
            </Card.Text>
            <Form noValidate onSubmit={handleSubmit} className='d-flex py-4 align-items-center justify-content-center'>
                <Form.Group controlId='emailValidation'
                >
                  <Form.Control
                    type='email'  
                    placeholder='Digite seu E-Mail' 
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                    className='border-secondary  rounded-0 position-relative'
                    style={{maxWidth:'456px'}}
                    />
                  <Form.Control.Feedback type="invalid" >
                    {errors.username}
                  </Form.Control.Feedback>
                </Form.Group>
                <Button className='btn-loja rounded-0 mb-auto' type='submit'>
                  Enviar
                </Button>

                <Modal data-bs-theme='dark' style={{'--bs-modal-border-radius':'0'}} show={show} onHide={handleHide}>
                  <Modal.Header style={{'backgroundColor':'black','--bs-modal-inner-border-radius':'0'}} closeButton>
                    <Modal.Title  className='d-flex text-light'>
                      <img className='px-2' src={check} alt="" />
                      Email cadastrado com sucesso!</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className='py-4' style={{'backgroundColor':'white','--bs-modal-inner-border-radius':'0'}}>Em breve você receberá novidades exclusivas da Meteora</Modal.Body>
                </Modal>
            </Form>
        </Card>
    </Container>
      )}
    </Formik>
    </>
  )
}

export default Novidades