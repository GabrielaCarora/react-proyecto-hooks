import { useState } from "react"

export const useCounter = (initialValue = 0) => {

    const [counter, setCounter] = useState(initialValue)

    const descrement = (val = 1, allNegative = true) => {
        if(!allNegative && counter < 1)return
        setCounter(counter - val)
    }
    const reset = () => {
        setCounter(initialValue)
    }
    const increment = (val = 1) => {
        setCounter(counter + val)
    }

  return {
    counter,
    descrement,
    reset,
    increment
  } 
}
