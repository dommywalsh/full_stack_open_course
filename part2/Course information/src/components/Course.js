import React from "react";

const Course = ({course}) => {
  return (
  <div>
    <Header course={course} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>)

}

const Header = ({course}) => {
  return (<h1>{course.name}</h1>)
}

const Part = ({name, exercises}) => {
  return (
    <p>{name} has {exercises} exercises</p>
  )
}


const Content = ({parts}) => (
  <>
    {parts.map((part) => (
      <Part key={part.id} name={part.name} exercises={part.exercises} />

    ))}
  </>
)

const Total = ({parts}) => {

  const total = parts.reduce((accumulator, part) => (
    accumulator += part.exercises
  ), 0);

  return (
    <p>The total number of modules is {total}</p>
  )
}

export default Course
