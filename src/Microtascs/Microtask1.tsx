import React from 'react';
import {Button} from "./Microtask1/Button";
import {CarType, MapComponent} from "./Microtask1/MapComponent";
import {TownsType, UseStateComponent} from "./Microtask1/UseStateComponent";
import {FilterComponent} from "./Microtask1/FilterComponent";

const LogSubscriber = (name: string, age: number) => {
    alert(`${name} ${age}`)
}

const simpledButton = () => {
    alert("Simple button")
}

const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]

type Microtask1Type = {
    topCars: Array<CarType>,
    towns: Array<TownsType>,
}


export const Microtask1: React.FC<Microtask1Type> = ({topCars, towns}) => {

    return (
        <>
            <h3>1. Unique buttons</h3>
            <Button name={"FirstYouTubeChanel"} callback={() => LogSubscriber("Vasyl", 23)}/>
            <Button name={"SecondYouTubeChanel"} callback={() => LogSubscriber("Andrew", 28)}/>
            <Button name={"SimpleButton"} callback={() => simpledButton()}/>
            <br/>
            ------------------------------------


            <h3>2. Map method</h3>
            <MapComponent topCars={topCars}/>
            ------------------------------------

            <h3>3. useState</h3>
            <UseStateComponent towns={towns}/>
            <br/>
            -----------------------------------

            <h3>4.Filter</h3>
            <FilterComponent/>
        </>
    );
};
