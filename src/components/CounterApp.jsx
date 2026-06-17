import { useCounter } from "../hooks/useCounter"

export const CounterApp = () => {

    const {counter, descrement, increment, reset} = useCounter(0)

  return (
    <>
        <h1>Counter:</h1>
        <h4>{counter}</h4>
        <button className="btn btn-info" onClick={() => descrement(1, false)}>-1</button>
        <button className="btn btn-danger" onClick={() => reset()}>Reset</button>
        <button className="btn btn-info" onClick={() => increment()}>+1</button>
    </>
  )
}
