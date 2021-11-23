import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
    return (
        <Nav className='justify-content-center mb-4'>
            <Nav.Item>
                {
                    step1 ? (
                        <LinkContainer to='/login'>
                            <Nav.Link>Sign In</Nav.Link>
                        </LinkContainer>
                    ): <Nav.Link className="checkout" disabled>Sign In</Nav.Link>
                }
            </Nav.Item>
            <Nav.Item>
                {
                    step2 ? (
                        <LinkContainer to='/shipping'>
                            <Nav.Link>Location</Nav.Link>
                        </LinkContainer>
                    ): <Nav.Link disabled>Location</Nav.Link>
                }
            </Nav.Item>
            <Nav.Item>
                {
                    step3 ? (
                        <LinkContainer to='/booking'>
                            <Nav.Link>Booking</Nav.Link>
                        </LinkContainer>
                    ): <Nav.Link disabled>Booking</Nav.Link>
                }
            </Nav.Item>
        </Nav>
    )
}

export default CheckoutSteps
