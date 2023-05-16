import React from "react";
import '../styles/Btns.css'
import PropTypes from 'prop-types';

class Btns extends React.Component {
    render () {
        return (
            <div className="container-btn">
                <button onClick={this.props.manajerClickGood}>{this.props.textBtn[0]}</button>
                <button onClick={this.props.manajerClickNeutral}>{this.props.textBtn[1]}</button>
                <button onClick={this.props.manajerClickBad}>{this.props.textBtn[2]}</button>
            </div>
        )
    }
}

Btns.propTypes = {
    textBtn : PropTypes.array.isRequired,
}

export default Btns