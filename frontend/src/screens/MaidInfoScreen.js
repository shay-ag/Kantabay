import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image, Button} from 'react-bootstrap';
import axios from 'axios';

import Rating from '../components/Rating';
// import maids from '../maids';
import './MaidInfoScreen.css';

const MaidInfoScreen = ( {match, history} ) => {

    const [ maid, setMaid ] = useState({});

    useEffect( () => {
        const fetchMaid = async () => {
            const { data } = await axios.get(`/api/maids/${match.params.maidid}`);

            setMaid(data);
        }
        fetchMaid();
    });

    // const maid = maids.find( (maid) => {
    //     return (
    //         maid._id === match.params.maidid
    //     )
    // } )

    const bookingHandler = () => {
        history.push('/login?redirect=shipping');
    }

    return (
        <Container className="main-container">
        <Row>
            <h1 className="title"><span>Kanta</span>Bay Maid<span>Info</span>...</h1>
        </Row>
        <Row className="content-box">
            <Row>
                <Col md={6}>
                    <div className='maid-img'><Image src={maid.image} alt={maid.name} fluid width="200" height="200" rounded/></div>
                    <div className='maid-name'>{maid.name}</div>
                    <div className="text-align-center">
                    <i className="fab fa-whatsapp maid-icon"></i>
                    <i className="fas fa-envelope maid-icon"></i>
                    <i className="fas fa-phone maid-icon"></i>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="maid-info-field">Description:</div> <div className="maid-info">{maid.description}</div><br />
                    <div className="maid-info-field">Address:</div> <div className="maid-info">{maid.address}</div><br />
                    <div className="maid-info-field">PinCode:</div> <div className="maid-info">{maid.pincode}</div><br />
                    <div className="maid-info-field">Contact Number:</div> <div className="maid-info">+91 {maid.number}</div><br />
                    <div className="maid-info-field">Gender:</div> <div className="maid-info">{maid.gender}</div><br />
                    <div className="maid-info-field">Experience:</div> <div className="maid-info">{maid.experience}</div><br />
                    <div className="maid-info-field">Expected Salary:</div> <div className="maid-info">{maid.expected_salary}</div><br />
                    <div className="maid-info-field">Available:</div> <div className="maid-info">{maid.available ? 'Yes' : 'No' }</div><br />
                    <div className="maid-info-field">Rating:</div><div className="maid-info"><Rating value={maid.rating} /></div><br />
                    <br />
                    <Button type="button" variant="outline-light" className="home-end-btn book-btn letter-spacing" onClick={bookingHandler}>Book {maid.name}</Button>
                    <Link to='/maids'>
                    <Button  variant="outline-light" className="home-end-btn one letter-spacing" >Go Back</Button>
                    </Link>
                </Col>
            </Row>
        </Row>
        </Container>
    )
}

export default MaidInfoScreen;
