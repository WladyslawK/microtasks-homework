import React, {useState} from 'react';

export type FilterType = "all" | "Dollars" | "RUBLS"


export const FilterComponent = () => {

    let [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])
    let [filter, setFilter] = useState<FilterType>("all")
    let filtered = [...money]

    const onclickHandler = (nominalButton: FilterType) => {
        console.log(nominalButton)
        setFilter(nominalButton)
    }

    if (filter === "Dollars") {
        filtered = money.filter(b => b.banknots === "Dollars")
    } else if (filter === "RUBLS") {
        filtered = money.filter(b => b.banknots === "RUBLS")
    }
    else {
        filtered = money
    }

    return (
        <ul>
            {
                filtered.map((b, i) => <li key={i}>{`${b.banknots} ${b.value} ${b.number}`}</li>)
            }
            <button onClick={() => onclickHandler("Dollars")}>Dollars</button>
            <button onClick={() => onclickHandler("RUBLS")}>Rubls</button>
            <button onClick={() => onclickHandler("all")}>All</button>
        </ul>
    );
};
