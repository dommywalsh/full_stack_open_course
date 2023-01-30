import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (<button onClick={handleClick}>{text}</button>)
}

const Statistics = ({good, bad, neutral}) => {
  const total = good + bad + neutral

  if (total === 0){
    return (<p>No feedback given</p>)
  } else {
    return (
      <div>
        <p>good {good}</p>
        <p>bad {bad}</p>
        <p>neutral {neutral}</p>
        <p>all {total}</p>
        <p>average {(good - bad)/(good + neutral + bad)}</p>
        <p>positive {(good)/(good + neutral + bad)}</p>
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      < Button handleClick={() => setGood(good + 1)} text='good' />
      < Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      < Button handleClick={() => setBad(bad + 1)} text='bad' />

      <h1>Statistics</h1>
        <Statistics good={good} bad={bad} neutral={neutral}/>

    </div>
  )
}

export default App
