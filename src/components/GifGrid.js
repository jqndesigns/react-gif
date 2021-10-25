import React from 'react'
import useFetchGifs from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {loading && <p>Cargando...</p>}
            {!loading && <div className="cardGrid">
                { images.map(i => (<GifGridItem key={i.id} {...i} />)) }
            </div>}
        </>
    )
}

export default GifGrid
