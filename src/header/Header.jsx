import './Header.css'
import React from 'react'

export default function Header(props) {

    return (
        <div id="content-panel">
            <div id="header-panel">
                <div id="header-number">{props.date}</div>
                <div id="header-month">{props.title}</div>
            </div>
        </div>
    )
}