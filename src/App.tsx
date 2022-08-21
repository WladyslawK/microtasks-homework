import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Microtask1} from "./Microtascs/Microtask1";

const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]

type ArrElementType = {
    id: number,
    name: string
}
const arr: Array<ArrElementType> = [
    {id: 1, name: "Warsaw"},
    {id: 4, name: "Tokyo"},
    {id: 0, name: "Rio De Janejro"},
    {id: 2, name: "Kiev"},
    {id: 6, name: "Rome"},
    {id: 3, name: "Bologna"},
    {id: 5, name: "Santorini"}
]

function App() {
    return (
        <div className="App">
            <h1>Microtasks</h1>
            <Microtask1 topCars={topCars} towns={arr}/>
        </div>
    );
}

export default App;
