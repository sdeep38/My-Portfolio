import React from 'react'

export default function TimeLine() {

    const items = [
        {
            name: 'Step 1',
            isCompleted: true
        },
        {
            name: 'Step 2',
            isCompleted: true
        },
        {
            name: 'Step 3',
            isCompleted: false
        },
        {
            name: 'Step 4',
            isCompleted: false
        }
    ]

    const totalItems = items.length
    const noOfActiveItems = items.filter(item => item.isCompleted).length
    const progressBarWidth = totalItems > 1 ? (noOfActiveItems - 1) / (totalItems - 1) * 100 : 0

    return (
        <div className="timeline">
            <div className="timeline-progress" style={{ width: `${progressBarWidth}%` }}></div>
            <div className="timeline-items">
                {items.map((item, index) => {
                    return <div key={index} className={'timeline-item' + (item.isCompleted ? ' completed' : '')}><div className="timeline-content">{item.name}</div></div>
                })}
            </div>
        </div>
    )
}
