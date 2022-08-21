import React, {ChangeEvent, useState} from 'react';

import './App.css';
import {clickOptions} from "@testing-library/user-event/dist/click";
import {Button} from "./components/Button";
import {Microtask1} from "./Microtascs/Microtask1";


function App() {

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    const liElems = topCars.map(car => <li>Brand: <b>{car.manufacturer}</b> Model <b>{car.model}</b></li>)

    //button functions

    function consoleButton(message: string) {
        console.log(message)
    }

    const onClickHandler = (subscriber: string, age: number) => {
        alert(`${subscriber} age: ${age}`)
    }

    const newEventHendler = (title: string) => {
        console.log(title)
    }

    // use State funcs

    let [a, setA] = useState(1)

    const onClickHandlerChangeState = (aVal: number) => {
        console.log(aVal)
        a++;
        setA(a)
    }

    function onClickHandlerNull() {
        console.log(null)
        setA(0)
    }

    //change town UseState practice
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

    let [town, setTown] = useState(arr[0])

    const oncklickChangeTown = (id: number) => {
        const sorted = arr.sort((a, b) => a.id - b.id)
        console.log(sorted)
        if (id + 1 < arr.length) {
            setTown(arr[++id])
        } else setTown(arr[0])
    }

    const LogSubscriber = (name: string, age: number) => {
        alert(`${name} ${age}`)
    }




    return (
        <div className="App">
            <h1>Microtasks</h1>
            <Microtask1/>
            {/*ARR METHOD MAP */}

            <ul>
                {/*{
                    topCars.map(car => <li>Brand: <b>{car.manufacturer}</b> Model: <b>{car.model}</b></li>)
                }*/}
                {
                    liElems
                }
            </ul>

            {/*BUTTON TR*/}
            <br/>
            <Button name={"YouTubeChanel 1"} callBack={() => onClickHandler("Ivan", 21)}/>
            <Button name={"YouTubeChanel 2"} callBack={() => onClickHandler("Vasya", 25)}/>
            <Button name={"Stupid Button"} callBack={() => consoleButton("I am stupid Button")}/>


            {/*HOOK USESTATE*/}
            <h1 onClick={() => onClickHandlerChangeState(a)}>{a}</h1>
            <button onClick={onClickHandlerNull}>0</button>
            <h2 key={town.id} onClick={() => oncklickChangeTown(town.id)}>{`Hello ${town.name}`}</h2>
        </div>
    );
}

export default App;
