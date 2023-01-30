import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (<button onClick={handleClick}>{text}</button>)
}

const StatisticLine = ({text, value}) => {
  return (<tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>)
}

const Statistics = ({good, bad, neutral}) => {
  const total = good + bad + neutral
  const average = ((good - bad)/(good + neutral + bad)) * 100
  const positive = (good)/(good + neutral + bad) * 100

  if (total === 0){
    return (<p>No feedback given</p>)
  } else {
    return (
      <table>
          <tbody>
              <StatisticLine text="good" value={good} />
              <StatisticLine text="neutral" value={neutral} />
              <StatisticLine text="bad" value={bad} />
              <StatisticLine text="all" value={total} />
              <StatisticLine text="average" value={average + '%'} />
              <StatisticLine text="positive" value={positive+ '%'} />
          </tbody>
      </table>
  );
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
