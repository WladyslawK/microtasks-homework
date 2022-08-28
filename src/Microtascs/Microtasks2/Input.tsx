import React, {ChangeEvent, useState, KeyboardEvent} from 'react';

type InputType = {
    title: string
    setTitle: (newTitle: string) => void
    addNewMessageCallback: (newMessage: string) => void
}

export const Input: React.FC<InputType> = ({title, setTitle, addNewMessageCallback}) => {


    const onChangeInputHandler = (event:ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onKeyPressAddMessageHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.charCode===13) addNewMessageCallback(title)
    }

    return (
        <>
            <h3>Universal Input vs Universal Button</h3>
            <input value={title} type="text" onChange={onChangeInputHandler} onKeyPress={onKeyPressAddMessageHandler}/>
        </>
    );
};
