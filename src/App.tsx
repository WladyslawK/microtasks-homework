import React, {ChangeEvent} from 'react';

import './App.css';
import {clickOptions} from "@testing-library/user-event/dist/click";
import {Button} from "./components/Button";

function App() {

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    const liElems = topCars.map(car => <li>Brand: <b>{car.manufacturer}</b> Model <b>{car.model}</b></li>)

    const onChangeInput = (e:ChangeEvent<HTMLTextAreaElement>) =>{
        alert(e.target.value)

    }

    function consoleButton (message: string){
        console.log(message)
    }

    const onClickHandler = (subscriber: string, age: number) => {
        alert(`${subscriber} age: ${age}`)
    }

    const newEventHendler = (title: string) => {
        console.log(title)
    }



    return (
        <div className="App">
            <h1>Microtasks</h1>
            <ul>
                {/*{
                    topCars.map(car => <li>Brand: <b>{car.manufacturer}</b> Model: <b>{car.model}</b></li>)
                }*/}
                {
                    liElems
                }

            </ul>
            <textarea></textarea><br/>
            <Button name = {"YouTubeChanel 1"} callBack={() => onClickHandler("Ivan", 21)}/>
            <Button name = {"YouTubeChanel 2"} callBack={() => onClickHandler("Vasya", 25)}/>
            <Button name={"Stupid Button"} callBack={()=>consoleButton("I am stupid Button")}/>
        </div>
    );
}

export default App;
