import React from "react"

const Person = ({person, handleDelete}) => (
  <div>
    <p>{person.name}: {person.number}</p>
    <button onClick={() => handleDelete(person.id)}>delete</button>
  </div>
)

export default Person;
