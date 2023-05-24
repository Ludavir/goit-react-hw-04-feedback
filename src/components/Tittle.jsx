import React from "react";
import PropTypes from 'prop-types';

const TittleMain = ({textTittle}) => {
    return (
        <div className="text-tittle">
            <h1>{textTittle}</h1>
        </div>
    )
}

TittleMain.propTypes = {
    textTittle : PropTypes.string.isRequired,
}

export default TittleMain