import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap'
// import axios from 'axios';

import './MaidScreen.css';
import Maid from '../components/Maid';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { listMaids } from '../actions/maidActions';
// import maids from '../maids';

const MaidScreen = () => {

    const dispatch = useDispatch();

    const maidList = useSelector( state => state.maidList );
    const { loading, error, maids } = maidList

    useEffect( () => {
        dispatch(listMaids())
    }, [dispatch])

    // const [maids, setMaids] = useState([]);
    
    // useEffect( () => {
    //     const fetchMaids = async () => {
    //         const { data } = await axios.get('/api/maids');

    //         setMaids(data);
    //     }

    //     fetchMaids();
    // }, [])

    return (
        <Container>
            <Row>
                <h1 className="title">Maids in <span>Kanta</span>Bay<span>...</span></h1>
            </Row>
            { loading ? 
                <Loader />
                : error ? (
                    <Message variant='danger'>{error}</Message>
                )
                : 
                (
                <Row className="content-box">
                {maids.map( (maid) => {
                    return (
                        <Col sm={12} md={6} lg={4} xl={3}>
                            <Maid maid={maid} />
                        </Col>
                    )
                })}
                </Row>
            ) 
            }
            
        </Container>
    )
}

export default MaidScreen
