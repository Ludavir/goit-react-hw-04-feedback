import React from "react";
import "../styles/States.css"
import PropTypes from 'prop-types';


const Statistics = ({good, neutral, bad, total, positiveTotal}) => {
    return (
        <div className="container-stats">
            <h2>Statistics</h2>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {positiveTotal}</p>
        </div>
    )
}

Statistics.propTypes = {
    good : PropTypes.number.isRequired,
    neutral : PropTypes.number.isRequired,
    bad : PropTypes.number.isRequired,
    total : PropTypes.number.isRequired,
    positiveTotal : PropTypes.string.isRequired,
}


export default Statistics