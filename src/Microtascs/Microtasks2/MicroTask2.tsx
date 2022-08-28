import React, {useState} from 'react';
import {Input} from "./Input";
import {Button} from "../../components/Button";
import {UniversalButton} from "./UniversalButton";

export type MessageType = {
    message: string
}

type MicroTask2Type = {
    messages: Array<MessageType>
    addMessageCallback: (newMessage: string) => void
}

export const MicroTask2: React.FC<MicroTask2Type> = ({messages, addMessageCallback}) => {

    let messageItems = messages.map((message, index) => <div key={index}>{message.message}</div>)

    const [title, setTitle] = useState("")

    const addNewMessageCallback = () => {
        addMessageCallback(title)
        setTitle("")
    }
    console.log(title)


    return (
        <div>
            <Input title={title} addNewMessageCallback={addNewMessageCallback} setTitle={setTitle}/>
            <UniversalButton name={"+"} callback={addNewMessageCallback}/>
            <div>
                {messageItems}
            </div>
        </div>
    );
};
