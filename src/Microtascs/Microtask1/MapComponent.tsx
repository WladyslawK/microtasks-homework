import React from 'react';

export type CarType = {
    manufacturer: string,
    model: string
}

export type MapComponentType ={
    topCars: Array<CarType>
}

export const MapComponent: React.FC<MapComponentType> = ({topCars}) => {

    const liElems = topCars.map((c, i) => <li key={i}>{`${c.manufacturer} ${c.model}`}</li>)

    return (
        <ul>
            {liElems}
        </ul>
    );
};