import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'

export const Quiz = () => {
    let state = useSelector(state => state)
    let total = state.Questions.length
    const [quesnum, setquesnum] = useState(0)
    const [score, setscore] = useState(0)
    const [result, setresult] = useState(false)

    function check(e) {
        let selectval = e
        let correctval = state.Questions[quesnum].correctAns

        if (selectval == correctval) {
            setscore(score + 1)
        }

        if (total == quesnum + 1) {
            setresult(true)
        } else {
            setquesnum(quesnum + 1)
        }

        setquesnum(quesnum + 1)
    }

    let percentage = score / total * 100

    return (
        <div className="container">

            {result ?
                <div className="bg-primary p-5 mt-5" style={{ width: "30%", margin: "auto" }}>
                    <center>
                        <h1 style={{ color: "white" }}>Result</h1>
                        <h5 style={{ color: "white" }}>Total Questions: {total}</h5>
                        <h5 style={{ color: "white" }}>Corrrect Answers: {score}</h5>
                        <h5 style={{ color: "white" }}>Wrong Answers: {total - score}</h5>
                        <h5 style={{ color: "white" }}>Percentage: {percentage}%</h5>
                        <h5 style={{ color: "white" }}>{percentage > 40 ? "Pass" : "Fail"}</h5>
                    </center>
                </div>
                : null}

            {result ?
                null :
                <div>
                    <p style={{ color: "white" }} className="p-3 fs-4 bg-primary mt-3">Question <span>{quesnum + 1}</span> / <span>{state.Questions.length}</span></p>
                    <h3 style={{ color: "white" }} className="p-3 fs-4 bg-primary">{state.Questions[quesnum].question}</h3>
                    <div className="container">
                        <div className="row bg-primary">
                            {state.Questions[quesnum].options.map((e, i) => {
                                return (
                                    <div key={i} className="col-md-6 fs-4" style={{ padding: "40px", display: "flex", justifyContent: "space-around" }}>
                                        <button onClick={() => check(e)} className="btn btn-light" style={{ color: "blue", width: "100%", padding: "15px", margin: "-10px" }}>{e}</button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <button onClick={() => check()} className="btn btn-primary mt-3">Next</button>
                </div>
            }

        </div>
    )
}
