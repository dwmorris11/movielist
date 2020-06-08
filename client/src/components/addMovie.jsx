import React from 'react';



var AddMovie = ({addClick,
  handleAddChange,
  addText}) => (
  <div className='add'>
    <form>
      <input type='text' name='add' value={addText} onChange={handleAddChange}></input>
      <button onClick={addClick}>Add</button>
    </form>
  </div>
)
export default AddMovie;