import React from 'react';

type UniversalButtonType = {
    name: string
    callback: () => void
}

export const UniversalButton: React.FC<UniversalButtonType> = ({name, callback}) => {

    const onclickAddButtonHandler = () => {
        callback()
    }

    return (
        <button onClick={onclickAddButtonHandler}>{name}</button>
    );
};
