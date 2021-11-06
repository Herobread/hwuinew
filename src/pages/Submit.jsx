import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import './Week.css'
import './Submit.css'

class Submit extends Component {
    state = {
        status: 'fill'
    }

    constructor(props) {
        super(props)

        this.state = {
            taskName: '',
            taskDescription: '',
            taskDate: ''
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault()
        this.setState({ redirect: "loading" })
        var date = new Date()
        var res = ''
        var id = date.getTime()
        fetch("http://localhost:5001/hwui2-937f7/us-central1/app/api/create", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                name: this.state.taskName,
                description: this.state.taskDescription,
                date: this.state.taskDate
            })
        }).then(function(response) {
            console.log(response);

            // fetch won`t crash if it got something
            if ( response.status === 200)
                res= "ok"
            else
                res = "error"
        }).then(p => {
            if ( res === "ok")
                this.setState({ redirect: "ok" })
            else
                this.setState({ redirect:"error"})
        })// so we add another one if it gets nothing
        .catch(rejected => {
                this.setState({ redirect:"error"})
                console.log(rejected);
        }); 
    }

    render() {
        
        const { taskName, taskDescription, taskDate } = this.state

        var redir = ''
        if (this.state.redirect === "ok")
            redir = <Redirect to='/thanks' />
        else if ( this.state.redirect === "error")
            redir = <Redirect to='/error' />

        return (
            <div className="day-panel bottom-padding">
                {redir}
                <h2>Add homework</h2>
                <form onSubmit={this.submitHandler} className="form">
                    <div>
                        <label>Subject name</label>
                        <input className="input" type="text" name="taskName" value={taskName} onChange={this.changeHandler} required />
                    </div>
                    <div>
                        <label>Subject description</label>
                        <input className="input" type="text" name="taskDescription" value={taskDescription} onChange={this.changeHandler} required />
                    </div>
                    <div>
                        <label>Date</label>
                        <input className="input" type="text" name="taskDate" value={taskDate} onChange={this.changeHandler} placeholder="DD/MM/YYYY" required />
                    </div>
                    <div>
                        <button className="button" type="submit" disabled={this.state.redirect==="loading"?true:false} style={this.state.redirect==="loading"?{cursor: 'not-allowed'}:{ cursor: 'pointer' }}>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Submit
