import React from 'react';
import './heading.styles.scss';

const Heading = ({subheading, heading}) => (
    <div className="headingWrapper">
        <h2>
            {subheading}
        </h2>
        <h1>
            {heading}
        </h1>
    </div>
)

export default Heading;