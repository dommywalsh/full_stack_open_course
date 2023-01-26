const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (course) => {

  const contents = () => {
    for (let i = 0; i < course.parts.length; i++){
      console.log(course.parts[i].name);
      console.log(course.parts[i].exercises);
      return (
        <p>
          {course.parts[i].name} has {course.parts[i].exercises} exercises.
        </p>
      )
    }
  }
return contents()
}

const Total = (challenges) => {
  const total = challenges.parts[0].exercises
    + challenges.parts[1].exercises
    + challenges.parts[2].exercises

    return (
      <div>
        <p>There are a total of {total} exercises</p>
      </div>
    )
}


const App = () => {
  const course = {
    name:'Half Stack application development',
    parts: [
      {
          name: "Fundamentals of React",
          exercises: 10,
      },
      {
          name: "Using props to pass data",
          exercises: 7,
      },
      {
          name: "State of a component",
          exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name}/>
      <Total parts={course.parts}/>
      <Content parts={course.parts}/>
  </div>
  )
}

export default App
