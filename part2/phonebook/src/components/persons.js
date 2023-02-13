import React from "react";
import Person from "./person";

const Persons = ({persons, filter, filteredPersons}) => (
  <div>
    {filter === ""
      ? persons.map(person => (
          <Person
            key={person.id}
            name={person.name}
            number={person.number}
          />
        ))
      : filteredPersons.map(person => (
          <Person
            key={person.id}
            name={person.name}
            number={person.number}
          />
        ))}
  </div>
)

export default Persons;
