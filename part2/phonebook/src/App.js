import { useState, useEffect } from "react";
import Persons from "./components/persons";
import Form from "./components/form";
import PersonService from "./services/persons"

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setNewFilter] = useState('')
  const [filteredPersons, setFilteredPersons] = useState([])

  useEffect(() => {
    PersonService
      .getAll()
      .then(persons =>
        setPersons(persons))
  }, [])

  const handleFilter = (event) => {
    let filterWord = event.target.value;
    setNewFilter(filterWord);
    const filtered = persons.filter((person) => person.name.toLowerCase()
      .includes(filterWord.toLowerCase()));

    setFilteredPersons(filtered);
  }

  const handleAddName = (event) => {
    event.preventDefault();

    const newNameObject = {
      name: newName,
      number: newNumber,
      id: (persons.length + 1)
    };

    let uniqueName = persons.some((person) => person.name === newName)


    if (!uniqueName){
      PersonService
        .create(newNameObject)
        .then(returnedPerson =>
          setPersons(persons.concat(returnedPerson)))
    } else {
      alert(`${newName} is already taken`)
    };

    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleDelete = (id) => {
    const person = persons.find((p) => p.id === id)
    console.log(person)

    // PersonService
    //   .deletePerson()

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        search:
        <input value={filter}
               onChange={handleFilter}/>
      </div>
        <h2>Add a new number</h2>
      <Form
        handleAddName={handleAddName}
        handleNameChange={handleNameChange}
        newName={newName}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
        <Persons
          persons={persons}
          filter={filter}
          filteredPersons={filteredPersons}
          handleDelete={handleDelete}
          />
    </div>
  )
}

export default App
