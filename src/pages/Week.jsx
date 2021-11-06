import React from 'react'
import './Week.css'

function DaySubject(props) {
    return (
        <tr className="day-subject-panel">
            <td className="day-subject-name">
                {props.name}
            </td>
            <td className="day-subject-detail">
                {props.cabinet}
            </td>
        </tr>
    )
}

function DayPane(props) {
    var dayPos = props.day
    var eventList = []

    for (var i = 0; i < table[dayPos].length; i += 1) {
        if (table[dayPos][i][0] !== "Break" && table[dayPos][i][0] !== "Dinner" && table[dayPos][i][0] !== "Lunch" && table[dayPos][i][0] !== '"Free" time') {
            if (table[dayPos][i][0] === table[dayPos][i + 2][0]) {
                eventList.push(
                    <DaySubject className="day-task" name={"2x " + table[dayPos][i][0]} start={table[dayPos][i][1]} end={table[dayPos][i][2]} cabinet={table[dayPos][i][3]} />
                    )
                i += 2
            }
            else {
                eventList.push(
                    <DaySubject className="day-task" name={table[dayPos][i][0]} start={table[dayPos][i][1]} end={table[dayPos][i][2]} cabinet={table[dayPos][i][3]} />
                )
            }
        }
    }

    return eventList
}

export default function Week() {
    var dayList = []
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    for (var i = 1; i < 7; i += 1) {
        dayList.push(
            <div className="day-panel">
                <h2>{days[i]}</h2>
                <table>
                    <DayPane day={i} />
                </table>
            </div>
        )
    }

    return (
        <div className="week-container">
            {dayList}
        </div>
    )
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
