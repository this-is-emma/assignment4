import React from 'react'

function GridSquare({color}) {
    const classes = `grid-square color-${color}`
    return <div className={ classes } />
}

export default GridSquare
