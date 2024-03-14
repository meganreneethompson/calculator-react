import { ACTIONS } from "./App"

export default function DigitButton({ dispatch, digit }) {
   <button onClick={() => dispatch({ type ACTIONS.ADD_DIGIT, payload: {digit} })}> {digit}</button>
   
    return
}

