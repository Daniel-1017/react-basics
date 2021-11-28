import React, { useState } from 'react';
/*
If you have data which might change and where changes to that data should be reflected on the user interface
then you need state.
*/

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import './ExpenseItem.css'

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Updated!');
    }
    return (
        <Card className="expense-item">
            <ExpenseDate  date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Click here</button>
        </Card>
    )
}

export default ExpenseItem