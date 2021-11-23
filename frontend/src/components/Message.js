import React from 'react';
import { Alert } from 'react-bootstrap';

import './Message.css';

const Error = ( {variant, children }) => {
    return <div className="error-div">
        <Alert className="error" variant={variant}>
            {children}
        </Alert>
    </div>
}

Error.defaultProps = {
    variant: 'info'
}

export default Error;