import React, { Component } from 'react';
import {Form, Button, FormLabel, FormControl} from 'react-bootstrap'
export default class ContactForm extends Component {
  render() {
    return (
        <Form className='bg-light text-dark p-5 border shadow'>
            <div className="row">
                <Form.Group className='mb-3 col-lg-6' controlId='firstName'>
                    <FormLabel className='w-100 text-start text-capitalize'>Frist name</FormLabel>
                    <FormControl type='text' />
                </Form.Group>
                <Form.Group className='mb-3 col-lg-6' controlId='secondName'>
                    <FormLabel className='w-100 text-start text-capitalize'>Second name</FormLabel>
                    <FormControl type='text' />
                </Form.Group>
            </div>
            <Form.Group className='mb-3' controlId='emailAddress'>
                <FormLabel className='w-100 text-start text-capitalize'>Email address</FormLabel>
                <FormControl type='email' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='textarea'>
                <FormLabel className='w-100 text-start text-capitalize'>Message</FormLabel>
                <FormControl as ='textarea' rows={3}/>
            </Form.Group>
            <Button variant='primary' type='submit'>Submit</Button>
        </Form>
    )
  }
}
