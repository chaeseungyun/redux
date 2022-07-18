import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { increaseCount, decreaseCount } from "./countReducer";

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.countReducer)
    return (
        <div id='counter'>
            <h1>Counter</h1>
            <button onClick={() => { dispatch(decreaseCount()) }}>-</button>
            <span>{count}</span>
            <button onClick={() => { dispatch(increaseCount()) }}>+</button>
        </div>

    )
}

export default Counter;