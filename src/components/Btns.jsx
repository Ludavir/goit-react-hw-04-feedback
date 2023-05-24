import React from "react";
import '../styles/Btns.css'
import PropTypes from 'prop-types';

const Btns = ({textBtn, manajerClickGood, manajerClickNeutral, manajerClickBad}) => {
    return (
        <div className="container-btn">
        <button onClick={manajerClickGood}>{textBtn[0]}</button>
        <button onClick={manajerClickNeutral}>{textBtn[1]}</button>
        <button onClick={manajerClickBad}>{textBtn[2]}</button>
    </div>
    )
}

Btns.propTypes = {
    textBtn : PropTypes.array.isRequired,
}

export default Btns