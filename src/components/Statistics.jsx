import React from "react";
import "../styles/States.css"
import PropTypes from 'prop-types';


class Statistics extends React.Component {
    render () {
        return (
            <div className="container-stats">
                <h2>Statistics</h2>
                <p>Good: {this.props.good}</p>
                <p>Neutral: {this.props.neutral}</p>
                <p>Bad: {this.props.bad}</p>
                <p>Total: {this.props.total}</p>
                <p>Positive feedback: {this.props.positiveTotal}</p>
            </div>
        )
    }
}

Statistics.propTypes = {
    good : PropTypes.number.isRequired,
    neutral : PropTypes.number.isRequired,
    bad : PropTypes.number.isRequired,
    total : PropTypes.number.isRequired,
    positiveTotal : PropTypes.string.isRequired,
}


export default Statistics