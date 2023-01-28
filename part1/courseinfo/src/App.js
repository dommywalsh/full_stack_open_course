const Header = (props) => {
  return (
    <h1>{props.name}</h1>
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

const Total = (props) => {
  const total = props.parts[0].exercises
    + props.parts[1].exercises
    + props.parts[2].exercises

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
      <Header name={course.name}/>
      <Total parts={course.parts}/>
      <Content parts={course.parts}/>
    </div>
  )
}

export default App
