import React, { useState } from 'react';

function Form() {
  const [fields, setFields] = useState([
    { name: 'field1', type: 'string' },
    { name: 'field2', type: 'number' },
    { name: 'field3', type: 'boolean' },
    { name: 'field4', type: 'object', fields: [] },
  ]);

  const handleAddField = () => {
    setFields([...fields, { name: '', type: '' }]);
  };

  const handleDeleteField = (index) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  };

  const handleNameChange = (index, event) => {
    const newFields = [...fields];
    newFields[index].name = event.target.value;
    setFields(newFields);
  };

  const handleTypeChange = (index, event) => {
    const newFields = [...fields];
    newFields[index].type = event.target.value;
    setFields(newFields);
  };

  return (
    <div>
      {fields.map((field, index) => (
        <div key={index}>
          <div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Name</span>
  <input  class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"  type="text"
            value={field.name}
            onChange={(event) => handleNameChange(index, event)} />
</div>
         
          <select
            value={field.type}
            onChange={(event) => handleTypeChange(index, event)}
          >
            <option value="string">String</option> 
            <option value="number">Number</option>
            <option value="boolean">Boolean</option>
            <option value="object">Object</option>
          </select>
          {field.type === 'object' && (
           <span class="m-2"> <button  type="button" class="btn btn-secondary" onClick={() => handleAddField(index)}>Add </button></span>
          )}
          <button type="button" class="btn btn-danger" onClick={() => handleDeleteField(index)}>Delete</button>
          
        </div>
      ))}
      <button  type="button" class="btn btn-success" onClick={() => console.log(fields)}>Save</button>
    </div>
  );
}

export default Form;