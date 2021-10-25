import React from 'react'

function GifGridItem({ id, title, url}) {
    return (
        <div className="card animate__animated animate__flipInX">
            <p>{title}</p>
            <img id={id} src={url} alt={title} />
        </div>
    )
}

export default GifGridItem
