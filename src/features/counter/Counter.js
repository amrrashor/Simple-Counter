import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux"
import {
    increment,
    decrement,
    reset,
    incrementByAmount,
} from "./counterSlice"

const Counter = () => {
    const [incrementAmount, setIncrementAmount] = useState(0);

    const addValue = Number(incrementAmount) || 0;

    const resetall = () => {
        setIncrementAmount(0);
        dispatch(reset())
    };

    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.count);

    return (
        <section>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
                <button onClick={() => dispatch(reset())}>reset</button>
            </div>

            <input
                type="text"
                value={incrementAmount}
                onChange={(e) => setIncrementAmount(e.target.value)}
            />

            <div>
                <button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
                <button onClick={resetall}>Reset All</button>
            </div>
        </section>
    )
}

export default Counter