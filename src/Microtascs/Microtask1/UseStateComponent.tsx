import React, {useState} from 'react';

export type TownsType = {
    id: number,
    name: string,
}

type UseStateComponentType = {
    towns: Array<TownsType>
}

export const UseStateComponent: React.FC<UseStateComponentType> = ({towns}) => {

    towns = towns.sort((a, b)=>a.id - b.id)

    let [num, setNum] = useState(1)
    let [town, setTown] = useState(towns[0])

    const onClickHandler = () =>{
        setNum(++num)
    }

    const onClickHandlerNull = () => {
        setNum(0)
    }

    const onClickHandlerTown = (id: number) => {
        if(id + 1 < towns.length) {
            setTown(towns[++id])
        }else setTown(towns[0])
    }

    return (
        <>
            <h1 onClick={onClickHandler}>{num}</h1>
            <button onClick={onClickHandlerNull}>0</button>
            <h3>UseState 2 (change onClick)</h3>
            <h2 key={town.id} onClick={() => onClickHandlerTown(town.id)}>{`Hello citizens of ${town.name}`}</h2>
        </>
    );
};
