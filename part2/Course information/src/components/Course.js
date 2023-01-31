import React from "react";

const Course = ({course}) => {
  return (
  <div>
    <Header course={course} />
  </div>)

}

const Header = ({course}) => {
  return (<h1>{course.name}</h1>)
}


// const Content = ({parts}) => {
//   {parts.map((part => (
//     <p>part.key={}</p>
//   ))
//   }
// }

export default Course
