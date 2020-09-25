import React from 'react';

const IngredientsList = (props)=> {

  const changeStyle=(event)=> {
    if (event.target.className === 'notBought') {
      event.target.className = 'bought';
    } else {
      event.target.className = 'notBought';
    }
  }
 
  let ingredients = props.ingredientsList.map(list => {
    return list.map((groc, i) => {
      return (
        <li key={i} className="notBought" onClick={changeStyle}>
          {groc}
        </li>
      );
    });
  });
  
  return (
    <div>
      <p className="instructions">Click an item to cross it off your list</p>
      <button
        className="clear"
        onClick={() => {
          window.localStorage.removeItem('ingredients');
          window.location.reload();
        }}
      >
        Clear List
      </button>
      <h3 className="groceries">Ingredients List:</h3>
      <div className="groceries">{ingredients}</div>
    </div>
  );
}

export default IngredientsList;
