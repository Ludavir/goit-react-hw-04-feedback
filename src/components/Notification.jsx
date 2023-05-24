import React from "react";
import PropTypes from 'prop-types';
import '../styles/Notification.css'

const Notificacion = ({textNotification}) => {
    return (
        <div className="notify">
            <p className="notify">{textNotification}</p>
        </div>
    )
}

Notificacion.propTypes = {
    textNotification : PropTypes.string.isRequired,
}

export default Notificacion 