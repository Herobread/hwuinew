import React from 'react'
import './Today.css'
import './Week.css'

function DaySubject(props) {
    return (
        <tr className="day-subject-panel">
            <td className={"day-subject-name " + props.active}>
                {props.name}
            </td>
            <td className={"day-subject-detail " + props.active}>
                {props.cabinet}
            </td>
        </tr>
    )
}

export default class Today extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }

    render() {
        var dayPos = this.state.date.getDay()
        var subjects = []
        var days = []
        var endDate = new Date()
        var startDate = new Date()
        var isActive = ""
        var cabinet = ""

        for (var i = 0; i < 2; i += 1) {
            subjects = []

            for (var ii = 0; ii < table[dayPos].length; ii += 1) {
                endDate.setHours(table[dayPos][ii][2].split(":")[0])
                endDate.setMinutes(table[dayPos][ii][2].split(":")[1])
                endDate.setSeconds(0)
                
                if (ii === table[dayPos].length - 1)
                    endDate.setDate(endDate.getDate() + 1);

                startDate.setHours(table[dayPos][ii][1].split(":")[0])
                startDate.setMinutes(table[dayPos][ii][1].split(":")[1])
                startDate.setSeconds(0)

                if (i === 0 && startDate.getTime() <= this.state.date.getTime() && endDate.getTime() > this.state.date.getTime() ) {
                    isActive = "active"
                    var temp = (endDate.getTime() - this.state.date.getTime())/1000

                    var hours = parseInt(temp/3600)
                    if ( hours > 0 )
                        hours = hours + ":"
                    else
                        hours = ""

                    var minutes = parseInt(temp/60) - 60*parseInt(temp/3600)
                    if ( minutes < 10 )
                        minutes = "0" + minutes

                    var seconds = parseInt(temp%60)
                    if ( seconds < 10 )
                        seconds = "0" + seconds

                    cabinet = hours + minutes + ":" + seconds

                    subjects.push(<DaySubject name={table[dayPos][ii][0]} cabinet={cabinet} active={isActive}/>)
                }
                else {
                    isActive = ""
                    cabinet = table[dayPos][ii][3]
                    
                    if ( table[dayPos][ii][0] !== "Break" && table[dayPos][ii][0] !== "Dinner" && table[dayPos][ii][0] !== "Lunch" && table[dayPos][ii][0] !== '"Free" time' ) {
                        subjects.push(<DaySubject name={table[dayPos][ii][0]} cabinet={cabinet} active={isActive}/>)
                    }
                }
            }

            var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ]
            days.push(<div className="day-panel"><h2>{weekDays[this.state.date.getDay()+ i]}</h2><table>{subjects}</table></div>)


            dayPos === 6 ? dayPos = 0 : dayPos = dayPos + 1
        }

        return (
            <div className="week-container">
                {days}
            </div>
        )
    }
}

/// schedule
var table = [
    [
        ["Chill", "00:00", "00:00", " "]
    ],
    [
        ['"Free" time', "00:00", "08:35", " "],
        ["Astronomy/World liturature", "08:35", "09:20", "121"],
        ["Break", "09:20", "09:30", " "],
        ["Ukrainian language", "09:30", "10:15", "121/323"],
        ["Break", "10:15", "10:25", " "],
        ["Ukrainian language", "10:25", "11:10", "121/323"],
        ["Lunch", "11:10", "11:25", " "],
        ["P.E.", "11:25", "12:10", "Gym"],
        ["Break", "12:10", "12:20", " "],
        ["English", "12:20", "13:05", "214/317"],
        ["Break", "13:05", "13:15", " "],
        ["Algebra", "13:15", "14:00", "121"],
        ["Dinner", "14:00", "14:10", " "],
        ['"Free" time', "14:10", "00:00", " "]
    ],
    [
        ['"Free" time', "00:00", "08:35", " "],
        ["Geometry", "08:35", "09:20", "121"],
        ["Break", "09:20", "09:30", " "],
        ["Geometry", "09:30", "10:15", "121"],
        ["Break", "10:15", "10:25", " "],
        ["P.E.", "10:25", "11:10", "Gym"],
        ["Lunch", "11:10", "11:25", " "],
        ["Ukrainian literature", "11:25", "12:10", "121"],
        ["Break", "12:10", "12:20", " "],
        ["Ukrainian literature", "12:20", "13:05", "121"],
        ["Break", "13:05", "13:15", " "],
        ["Informatics", "13:15", "14:00", "105a/104"],
        ["Break", "14:00", "14:10", " "],
        ["Informatics", "14:10", "14:55", "105a/104"],
        ["Dinner", "14:55", "15:05", " "],
        ['"Free" time', "15:05", "00:00", " "]
    ],
    [
        ['"Free" time', "00:00", "08:35", " "],
        ["Geography", "08:35", "09:20", "318"],
        ["Break", "09:20", "09:30", " "],
        ["Geometry/Physics", "09:30", "10:15", "121/lab11"],
        ["Break", "10:15", "10:25", " "],
        ["Geometry/Physics", "10:25", "11:10", "121/lab11"],
        ["Lunch", "11:10", "11:25", " "],
        ["Physics/Geometry", "11:25", "12:10", "lab11/121"],
        ["Break", "12:10", "12:20", " "],
        ["Physics/Geometry", "12:20", "13:05", "lab11/121"],
        ["Break", "13:05", "13:15", " "],
        ["Biology", "13:15", "14:00", "121"],
        ["Break", "14:00", "14:10", " "],
        ["World history", "14:10", "14:55", "121"],
        ["Dinner", "14:55", "15:05", " "],
        ['"Free" time', "15:05", "00:00", " "]
    ],
    [
        ['"Free" time', "00:00", "08:35", " "],
        ["English", "08:35", "09:20", "214/317"],
        ["Break", "09:20", "09:30", " "],
        ["Physics", "09:30", "10:15", "121"],
        ["Break", "10:15", "10:25", " "],
        ["Physics", "10:25", "11:10", "121"],
        ["Lunch", "11:10", "11:25", " "],
        ["Algebra", "11:25", "12:10", "121"],
        ["Break", "12:10", "12:20", " "],
        ["Algebra", "12:20", "13:05", "121"],
        ["Break", "13:05", "13:15", " "],
        ["P.E.", "13:15", "14:00", "Gym"],
        ["Dinner", "14:00", "14:10", " "],
        ['"Free" time', "14:10", "00:00", " "]
    ],
    [
        ['"Free" time', "00:00", "08:35", " "],
        ["Ukrainian history", "08:35", "09:20", "121"],
        ["Break", "09:20", "09:30", " "],
        ["Physics / Algebra", "09:30", "10:15", "208/121"],
        ["Break", "10:15", "10:25", " "],
        ["Physics / Algebra", "10:25", "11:10", "208/121"],
        ["Lunch", "11:10", "11:25", " "],
        ["Algebra / Physics", "11:25", "12:10", "121/208"],
        ["Break", "12:10", "12:20", " "],
        ["Algebra / Physics", "12:20", "13:05", "121/208"],
        ["Dinner", "13:05", "13:15", " "],
        ['"Free" time', "13:15", "00:00", " "]
    ],
    [
        ['"Free" time', "00:00", "08:35", " "],
        ["Physics", "08:35", "09:20", "121"],
        ["Break", "09:20", "09:30", " "],
        ["Physics", "09:30", "10:15", "121"],
        ["Break", "10:15", "10:25", " "],
        ["IT", "10:25", "11:10", "103/104"],
        ["Lunch", "11:10", "11:25", " "],
        ["Ukrainian protection", "11:25", "12:10", "121"],
        ["Break", "12:10", "12:20", " "],
        ["Chemistry", "12:20", "13:05", "303"],
        ["Break", "13:05", "13:15", " "],
        ["English", "13:15", "14:00", "214/317"],
        ["Dinner", "14:00", "14:10", " "],
        ['"Free" time', "14:10", "00:00", " "]
    ]
]