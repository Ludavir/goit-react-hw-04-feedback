import React from "react";
import '../styles/Notification.css'

const Notificacion = () => {
    return (
        <div className="notify">
            <p className="notify">{props.textNotification}</p>
        </div>
    )
}

export default Notificacion 