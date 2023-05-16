import React from "react";
import '../styles/Notification.css'

class Notificacion extends React.Component {
    render () {
        return (
            <div className="notify">
                <p className="notify">{this.props.textNotification}</p>
            </div>
        )
    }
}

export default Notificacion 