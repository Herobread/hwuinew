import React from 'react'

import '../Week.css'

export default function Banner(props) {
    var name = ""
    if ( props.color === "red")
        name += " red"

    return (
        <div className={"day-panel small" + name}>
            {props.status}
        </div>
    )
}
