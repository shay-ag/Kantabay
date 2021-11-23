import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './LoginScreen.css';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { login } from '../actions/userActions';

const LoginScreen = ({ location, history }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const { loading, error, userInfo } = userLogin;

    const redirect = location.search ? location.search.split('=')[1] : '/';

    useEffect( () => {
        if(userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect]);

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(login(email, password));
    }

    return (            
        <Container className="main-container">
        <Row>
            <h1 className="title">Sign in <span>Kanta</span>Bay<span>...</span></h1>
        </Row>

        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}

        <Row className="content-box">
        <Form className="signup-form" onSubmit={submitHandler}>
        
            <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                    <Form.Group controlId='email'>
                        <Form.Label>Your Email:</Form.Label>
                        <Form.Control 
                        type="email" 
                        placeholder="Enter Your Email Here"
                        value={email}
                        onChange={ (e) => setEmail(e.target.value)} 
                        required />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                    <Form.Group controlId='password'>
                        <Form.Label>Password:</Form.Label>
                        <Form.Control 
                        type="password" 
                        placeholder="Enter Your Password Here" 
                        value={password}
                        onChange={ (e) => setPassword(e.target.value)} 
                        required/>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col className="end-btn">
                <Button type="submit" variant="outline-light" className="contact-end-btn letter-spacing">Sign In</Button>                                    
                </Col>
            </Row>
            <Row>
                <Col className="py-3">
                <p>New Customer?
                    <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}><span> Sign Up</span></Link>
                </p>
                </Col>
            </Row>
        </Form>
        </Row>
    </Container>
    )
}

export default LoginScreen;
