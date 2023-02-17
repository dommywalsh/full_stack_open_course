import { useState, useEffect } from "react";
import Persons from "./components/persons";
import Form from "./components/form";
import Notification from "./components/notification";
import PersonService from "./services/persons"

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setNewFilter] = useState('')
  const [filteredPersons, setFilteredPersons] = useState([])
  const [notificationMessage, setNotificationMessage] = useState(null)

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
    setNewFilter('');
  }

  const handleAddName = (event) => {
    event.preventDefault();

    const newNameObject = {
      name: newName,
      number: newNumber,
    };

    // check if the person exists in the DB
    let uniqueName = persons.some((person) => person.name === newName)


    if (!uniqueName){
      PersonService
        .create(newNameObject)
        .then(returnedPerson =>
          setPersons(persons.concat(returnedPerson)))
        .catch((error) => {
        setNotificationMessage(error.response.data);
        setTimeout(() => {
          setNotificationMessage(null);
        }, 5000)
      })
    } else {
        const response = window.confirm(
          `${newName} is already added to the phonebook,
          would you like to replace the old number with a new one?`);

          if (response){
            const person = persons.find(person => person.name === newName);
            const { id } = person;
            const changedPerson = { ...person, number: newNumber };

            PersonService
              .update(id, changedPerson)
              .then((returnedPerson) => {setPersons(persons.map((person) =>
                person.id !== id ? person : returnedPerson
                )
                )
              }).catch((error) => {
                setNotificationMessage(
                  `Information for ${person.name} has already been removed from server`
                )
              });
              setPersons(persons.filter((p) => p.id !== id));
              setTimeout(() => {
                setNotificationMessage(null)
              }, 5000)

          }
    };

    setNewName('');
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleDelete = (id) => {
    const person = persons.find((p) => p.id === id);
    const confirmed = window.confirm(`Are you sure you would like to delete ${person.name}`)
    if (confirmed){
      PersonService
        .deletePerson(person.id)
        .then(()=> {
          const filteredPeople = persons.filter((person) => person.id !== id);
          setPersons(filteredPeople)
        })
    }
  }

  return (
    <div>
      <Notification message={notificationMessage} />
      <h2>Phonebook</h2>
      <div>
        search:
        <input
          value={filter}
          onChange={handleFilter}
          />
      </div>
        <h2>Add a new number</h2>
      <Form
        handleAddName={handleAddName}
        handleNameChange={handleNameChange}
        newName={newName}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        />
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
