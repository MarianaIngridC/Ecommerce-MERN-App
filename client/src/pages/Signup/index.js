import React from 'react';
import { Form, Container, Button, Row, Col } from "react-bootstrap";
import Layout from "../../components/Layout";
import Input from '../../components/UI/Input';

const Signup = () => {
    return (
        <Layout>
      <Container>
        <Row style={{marginTop: '50px'}}>
          <Col md={{span: 6, offset: 3}}>
            <Form>
                <Row>
                    <Col md={6}>
                        <Input
                            label='First Name'
                            placeholder='Ingresa tu nombre'
                            value=''
                            type='text'
                            onChange={() => {}}
                        />                                
                    </Col>
                    <Col md={6}>
                        <Input
                            label='Last Name'
                            placeholder='Ingresa tu apellido'
                            value=''
                            type='text'
                            onChange={() => {}}
                        />                                
                    </Col>
                </Row>
                <Form.Group>
                    <Form.Label style={{marginLeft: '-31rem'}}>Email</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa tu email" />
                    </Form.Group>
                <Form.Group>
                    <Form.Label style={{marginLeft: '-29rem'}}>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                <Button style={{marginLeft: '-29rem'}} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
    )
}

export default Signup
