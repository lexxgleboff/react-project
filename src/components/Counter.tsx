import { useState } from "react"
import classes from './Counter.module.scss'

export const Counter = () => {

    const [count, setCount] = useState<number>(0)

    return(
        <>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)} className={classes.btn}>increment</button>
        </>
    )
}