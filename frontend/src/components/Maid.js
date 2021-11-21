import React from 'react';
import { Card } from 'react-bootstrap';

import './Maid.css';
import Rating from './Rating';

const Maid = ( { maid } ) => {
    return (
        <Card className='my-3 mx-2 mb-5'>
            <a href={`/maids/${maid._id}`}>
                <Card.Img src={maid.image} variant='bottom' width="100" height="200"/>
            </a>

            <Card.Body className="card-body">
                <a href={`/maids/${maid._id}`}>
                    <Card.Title as='div'>
                        <strong className="card-title">{maid.name}</strong>
                    </Card.Title>
                </a>

                <Card.Text as='div' className="card-text">
                    <div className='my-3'>
                        {maid.description}
                    </div>
                    <div>
                        <span>Experience:</span> <br />{maid.experience}
                    </div>
                </Card.Text>

                <Card.Text as='div' className="card-text">
                    <div>
                        <span>Rating:</span> <br />
                    </div>
                    <Rating value={maid.rating} />
                </Card.Text>

            </Card.Body>
        </Card>
    )
}

export default Maid;
