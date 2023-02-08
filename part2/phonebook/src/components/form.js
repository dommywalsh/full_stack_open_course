import React from "react"

const Form = ({handleAddName, handleNameChange, newName, newNumber, handleNumberChange}) => (
  <form onSubmit={handleAddName}>
    <div>
      name:
      <input
      value={newName}
      onChange={handleNameChange}
      />
    </div>
    <div>number:
      <input
      value={newNumber}
      onChange={handleNumberChange}
      />
    </div>
    <div>
      <button type='submit'>add</button>
    </div>
  </form>
)

export default Form;
