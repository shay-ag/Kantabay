import React from 'react';
import { Card } from 'react-bootstrap';

import './Maid.css';

const Maid = ( { maid } ) => {
    return (
        <Card className='my-3 mx-2 mb-5 p-1'>
            <a href={`/maid/${maid._id}`}>
                <Card.Img src={maid.image} variant='bottom' width="100" height="200"/>
            </a>

            <Card.Body>
                <a href={`/maid/${maid._id}`}>
                    <Card.Title as='div'>
                        <strong>{maid.name}</strong>
                    </Card.Title>
                </a>

                <Card.Text as='div'>
                    <div className='my-3'>
                        {maid.description}
                    </div>
                    <div>
                        Experience: {maid.experience}
                    </div>
                </Card.Text>

                <Card.Text as='div'>
                    Rating: {maid.rating}
                </Card.Text>

            </Card.Body>
        </Card>
    )
}

export default Maid;
