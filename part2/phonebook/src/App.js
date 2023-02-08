import { useState } from "react";
import Person from "./components/person";
import Form from "./components/form";

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setNewFilter] = useState('')
  const [filteredPersons, setFilteredPersons] = useState([])

  const handleFilter = (event) => {
    let filterWord = event.target.value;
    console.log(filterWord)
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
      setPersons(persons.concat(newNameObject))
    } else {
      alert(`${newName} is already taken`)
    };

    setNewName('')
    setNewNumber('')
    console.log(persons)
  }

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        search:
        <input value={filter} onChange={handleFilter}/>
      </div>
        <ul>
          {filteredPersons.map(person =>
            <Person name={person.name} key={person.id} number={person.number}/>
            )}
        </ul>
        <h2>Add a new number</h2>
      <Form handleAddName={handleAddName} handleNameChange={handleNameChange}
          newName={newName} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => (
          <Person name={person.name} key={person.id} number={person.number}/>
        ))}
      </ul>
    </div>
  )
}

export default App
