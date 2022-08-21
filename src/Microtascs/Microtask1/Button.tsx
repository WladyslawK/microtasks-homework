import React from 'react';

type ButtonType ={
    name: string,
    callback: () => void
}

export const Button: React.FC<ButtonType> = ({name, callback}) => {

    const onclickHandler = () => {
        callback()
    }

    return (
        <>
            <button onClick={onclickHandler}>{name}</button>
        </>
    );
}