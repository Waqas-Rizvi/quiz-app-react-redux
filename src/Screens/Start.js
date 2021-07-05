import React from 'react'
import { useHistory } from 'react-router';

export const Start = () => {
        let history = useHistory()
        const click = () => {
            history.push("/quiz")
        }
    return (
        <div className="container bg-primary p-5 mt-5" style={{width: "100%", margin: "auto"}}>
            <h1 style={{color: "white"}}>Start the Quiz</h1>
            <h5 style={{color: "white"}} className="mt-3">Good luck!</h5>
            <button style={{color: "blue"}} type="button" className="btn btn-light mt-3" onClick={click}>Start the HTML quiz{`>`}</button>
        </div>
    )
}
