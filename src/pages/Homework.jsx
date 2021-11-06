import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'
import Banner from './banner/Banner'
import './Week.css'

export default class Homework extends Component {
    state = {
        loading: true,
        data: ""
    }

    async componentDidMount() {
        try {
            const url = "http://localhost:5001/hwui2-937f7/us-central1/app/api/read"
            const response = await fetch(url)
            const data = await response.json()

            this.setState({ loading: false })
            this.setState({ data: data })
        } catch (error) {
            this.setState({ loading: "error" })
        }
    }

    render() {
        var homework = []

        try {
            const data = this.state.data
            var date = new Date()
            var firstTime = 1

            for (var i = 0; i < 7; i += 1) {
                var empty = 1
                var dayHwData = []
                dayHwData.push(<h2>{date.toLocaleDateString("en-US", { weekday: 'long' })+ ", " + date.getDate()}</h2>)

                var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
                var month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)
                var today = day + "/" + month + "/" + date.getFullYear()
                for (var ii = 0; ii < data.length; ii += 1) {
                    // console.log(today + "--" + data[ii]["date"])
                    if (today === data[ii]["date"] && data[ii]["verified"]==="1") {
                        dayHwData.push(<div><span className="highlight">{data[ii]["name"]}</span>{": " + data[ii]["description"]}</div>)
                        empty = 0
                    }
                }
                if ( firstTime && empty) {
                    dayHwData.push(<div>No data for that day, if you want you can <Link to="/submit" className="highlight">suggest</Link>.</div>)
                    firstTime = 0
                }
                homework.push(<div className="day-panel">{dayHwData}</div>)
                date.setDate(date.getDate() + 1)
            }

            // console.log(homework)
        } catch (error) {

        }

        var banner = []
        if ( this.state.loading === true ) {
            banner = <Banner color="gray" status="Loading..."/>
        } else if ( this.state.loading === "error" ) {
            banner = <Banner color="red" status="Error: failed to get data from api"/>
        }

        return (
            <div>
                {banner}
                {homework}
                {/* {this.state.data[0]["name"]} */}
            </div>
        )
    }
}
