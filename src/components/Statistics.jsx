import React from "react";
import "../styles/States.css"
import PropTypes from 'prop-types';


const Statistics = (props) => {
    return (
        <div className="container-stats">
        <h2>Statistics</h2>
        <p>Good: {props.good}</p>
        <p>Neutral: {props.neutral}</p>
        <p>Bad: {props.bad}</p>
        <p>Total: {props.total}</p>
        <p>Positive feedback: {props.positiveTotal}</p>
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