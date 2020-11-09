import React, { useState,useEffect } from "react";
import { Form, Container, Button, Row, Col } from "react-bootstrap";
import { isUserLoggedIn, login } from "../../actions";
import Layout from "../../components/Layout";
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../components/UI/Input';
import { Redirect } from "react-router-dom";


const Signin = (props) => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('');
  const [ error, setError ] = useState('')
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if(!auth.authenticate){
      dispatch(isUserLoggedIn())
    }
    }, [])

  const userLogin = (e) => {
    e.preventDefault()
    const user = {
      email, password
    }
    dispatch(login(user))
  }
  // verify if the user is already authenticate. if true then redirect to home page
  if(auth.authenticate){
    return <Redirect to={'/'}/>
  }
  return (
    <Layout>
      <Container>
        <Row style={{marginTop: '50px'}}>
          <Col md={{span: 6, offset: 3}}>
            <Form onSubmit={userLogin}>
              <Input
                label='Email'
                placeholder='Ingresa tu Email'
                value={email}
                type='email'
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                label='Password'
                placeholder='Ingresa tu Contraseña'
                value={password}
                type='password'
                onChange={(e) => setPassword(e.target.value)}
              />  
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Signin;
