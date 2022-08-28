import React, {ChangeEvent, useState} from 'react';
import {MessageType} from "./MicroTask2";

type FullInputType = {
    messages: Array<MessageType>
    addMessageCallback: (newMessage: string) => void
}

export const FullInput: React.FC<FullInputType> = ({messages, addMessageCallback}) => {

    let messageItems = messages.map((message, index)=> <div key={index}>{message.message}</div>)

    const [title, setTitle] = useState("")

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        console.log(title)
    }

    const onClickAddButtonHandler = () => {
        addMessageCallback(title)
        setTitle("")
    }

    return (
        <div>
            <h3>Full Input</h3>
            <input type="text" value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickAddButtonHandler}>+</button>
            <div>
                {messageItems}
            </div>
        </div>
    );
};
