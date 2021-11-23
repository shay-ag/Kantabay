import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './RegisterScreen.css';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { register } from '../actions/userActions';

const RegisterScreen = ({ location, history }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState(null);

    const dispatch = useDispatch();

    const userRegister = useSelector(state => state.userRegister);
    const { loading, error, userInfo } = userRegister;

    const redirect = location.search ? location.search.split('=')[1] : '/';

    useEffect( () => {
        if(userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect]);

    const submitHandler = (e) => {
        e.preventDefault();

        if(password !== confirmPassword){
            setMessage('Passwords do not match');
        } else{
            dispatch(register(name, email, password));
        }
    }

    return (            
        <Container className="main-container">
            <Row>
                <h1 className="title">Signup in <span>Kanta</span>Bay<span>...</span></h1>
            </Row>

            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}

            <Row className="content-box signup-form">
                <Row>
                <Col lg={6} md={12} sm={12}>
                <Form onSubmit={submitHandler}>
                    <Row>
                        <Col>
                            <Form.Group controlId='name'>
                                <Form.Label>Your Name:</Form.Label>
                                <Form.Control 
                                type="text" 
                                placeholder="Enter Your Full Name Here" 
                                value={name}
                                onChange={ (e) => setName(e.target.value)} 
                                required/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId='email'>
                                <Form.Label>Your Email:</Form.Label>
                                <Form.Control 
                                type="email" 
                                placeholder="Enter Your Email Here" 
                                value={email}
                                onChange={ (e) => setEmail(e.target.value)} 
                                required/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId='password'>
                                <Form.Label>Your Password:</Form.Label>
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
                        <Col>
                            <Form.Group controlId='confirmPassword'>
                                <Form.Label>Confirm Your Password:</Form.Label>
                                <Form.Control 
                                type="password" 
                                placeholder="Confirm Your Password Here" 
                                value={confirmPassword}
                                onChange={ (e) => setConfirmPassword(e.target.value)} 
                                required/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="end-btn">
                        <Button type="submit" variant="outline-light" className="contact-end-btn letter-spacing">Sign Up</Button>                                    
                        </Col>
                    </Row>
                </Form>
                <Row>
                    <Col className="py-3">
                    <p>Have an account already?
                        <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}><span> Sign In</span></Link>
                    </p>
                    </Col>
                </Row>
                </Col>
                <Col lg={6} md={12} sm={12} >
                    <div className="img-register hover01"><Image src="/images/home.png" rounded fluid/></div>
                </Col>
                </Row>
            </Row>
        </Container>
    )
}

export default RegisterScreen;
