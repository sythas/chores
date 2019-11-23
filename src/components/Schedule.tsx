import React from 'react'
import Chore from './Chore'
import chores from '../chores.json'

export default function Schedule() {
    return (<ul style={{ padding: 0}}>
        {chores && chores.map((chore, i) => <Chore key={i} chore={chore} />)}
    </ul>)
}