import React from "react";
import { Spinner } from 'react-bootstrap';

import './Loader.css';

const Loader = () => {
    return <Spinner animation='border' role='status' className="loader" style={{width: '100px', height: '100px', display: 'block'}}>
        <span className='sr-only'>Loading...</span>
    </Spinner>
}

export default Loader;