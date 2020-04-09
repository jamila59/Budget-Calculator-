import React from 'react';
import Item from './ExpenseItem';


const ExpenseList = (props) => {
    return(
        <>
        <ul className="list">
            {props.map((expense) => {
                return 
                <Item key={expense.id} expense={expense}/>;
            })}
        </ul>
        </>
    )
}

export default ExpenseList;