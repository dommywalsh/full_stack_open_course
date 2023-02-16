import React from "react";
import Person from "./person";

const Persons = ({persons, filter, filteredPersons, handleDelete}) => (
  <div>
    {filter === ""
      ? persons.map(person => (
          <Person
            key={person.name}
            person={person}
            handleDelete={handleDelete}
          />
        ))
      : filteredPersons.map(person => (
          <Person
            key={person.name}
            persons={person}
            handleDelete={handleDelete}
          />
        ))}
  </div>
)

export default Persons;
