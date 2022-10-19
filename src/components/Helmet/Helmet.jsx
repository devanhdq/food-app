import React from 'react';

const Helmet = (props) => {
    document.title = "AQ_Food | " + props.title
    return (
        <div>
            {props.children}
        </div>
    );
};

export default Helmet;