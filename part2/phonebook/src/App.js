import { useState } from "react";

const App = () => {

  const [persons, setPersons] = useState([
    {name: 'Arto Hellas'}
  ])
  const [newName, setNewName] = useState('james')

  const handleAddName = (event) => {
    event.preventDefault();

    const newNameObject = {
      name: newName
    };

    const uniqueName = persons.some((person) => person.name === newName)


    if (!uniqueName){
      setPersons(persons.push(newNameObject))
    } else {
      alert('that name is already taken')
    }

    console.log(persons)
  }

  const Person = ({props}) => (
    <p>{props.name}</p>
  )



  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleAddName}>
        <div>
          name:
          <input
          value={newName}
          onChange={handleNameChange}
          />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <div>debug: {newName}</div>
      <h2>Numbers</h2>
    </div>
  )
}

export default App
