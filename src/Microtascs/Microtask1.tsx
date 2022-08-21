import React from 'react';
import {Button} from "./Microtask1/Button";

const LogSubscriber = (name: string, age: number) => {
    alert(`${name} ${age}`)
}

export const Microtask1 = () => {

    return (
        <>
            <Button name={"FirstYouTubeChanel"} callback={() => LogSubscriber("Vasyl", 23)}/>
            <Button name={"SecondYouTubeChanel"} callback={() => LogSubscriber("Andrew", 28)}/>
        </>
    );
};
