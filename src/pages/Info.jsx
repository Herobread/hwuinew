import './Week.css'

import React from 'react'

export default function Info(props) {
    return (
        <div className="day-panel">
            <p style={{textAlign:"center"}}>{props.data}</p>
        </div>
    )
}
