import React, { useState } from 'react';
import '../styles/Recipe.css'
import corazonrojo from '../images/corazonrojo.svg'
import corazonnegro from '../images/corazonnegro.svg'
import { message} from 'antd';

const success = () => {
  message.success('This is a success message');
};

const Recipe = (props)=> {

      if (!props.recipes.length) {
        return <p className="instructionsInicio">Search ingredients to get started!</p>;
      }
      
    
    const resultsGallery = props.recipes.map(eachRecipe => {
      return (
        
        
        <div className='recipeCard' key={eachRecipe.recipe.uri}>
          
          {/* recipe name */}
           <h3>{eachRecipe.recipe.label}</h3> 
          {/* recipe image */}
           <img
            src={eachRecipe.recipe.image}
            alt={eachRecipe.recipe.label}
            className="recipePic"
          /> 

          {/* ingredients list */}         
          <details  className="nutrition">
          <summary>Ingredients</summary>
          <ul key={eachRecipe.recipe.url} className="ingredientList">
            {eachRecipe.recipe.ingredientLines.map((ingr, i) => {
              return <li key={i}>{ingr}</li>;
            })}
          </ul> 
          </details>

          {/* nutrition facts label */}
         <details className="nutrition">
            <summary>Nutrition Facts</summary>
            <table className="nutritionTable">
              <thead>
                <tr>
                  <th>Nutrient</th>
                  <th>Amount/recipe</th>
                  <th>% Daily value*</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Calories</td>
                  <td>
                    {Math.round(
                      eachRecipe.recipe.totalNutrients.ENERC_KCAL.quantity
                    )}
                    {eachRecipe.recipe.totalNutrients.ENERC_KCAL.unit}
                  </td>
                  <td>
                    {Math.round(
                      eachRecipe.recipe.totalDaily.ENERC_KCAL.quantity
                    )}
                    {eachRecipe.recipe.totalDaily.ENERC_KCAL.unit}
                  </td>
                </tr>
                <tr>
                  <td>Fat</td>
                  <td>
                    {Math.round(eachRecipe.recipe.totalNutrients.FAT.quantity)}
                    {eachRecipe.recipe.totalNutrients.FAT.unit}
                  </td>
                  <td>
                    {Math.round(eachRecipe.recipe.totalDaily.FAT.quantity)}
                    {eachRecipe.recipe.totalDaily.FAT.unit}
                  </td>
                </tr>
                <tr>
                  <td>Saturated Fat</td>
                  <td>
                    {Math.round(
                      eachRecipe.recipe.totalNutrients.FASAT.quantity
                    )}
                    {eachRecipe.recipe.totalNutrients.FASAT.unit}
                  </td>
                  <td>
                    {Math.round(eachRecipe.recipe.totalDaily.FASAT.quantity)}
                    {eachRecipe.recipe.totalDaily.FASAT.unit}
                  </td>
                </tr>
                <tr>
                  <td>Monounsaturated Fat</td>
                  <td colSpan="2">
                    {Math.round(eachRecipe.recipe.totalNutrients.FAMS.quantity)}
                    {eachRecipe.recipe.totalNutrients.FAMS.unit}
                  </td>
                </tr>
                <tr>
                  <td>Polyunsaturated Fat</td>
                  <td colSpan="2">
                    {Math.round(eachRecipe.recipe.totalNutrients.FAPU.quantity)}
                    {eachRecipe.recipe.totalNutrients.FAPU.unit}
                  </td>
                </tr>
                <tr>
                  <td>Carbs</td>
                  <td>
                    {Math.round(
                      eachRecipe.recipe.totalNutrients.CHOCDF.quantity
                    )}
                    {eachRecipe.recipe.totalNutrients.CHOCDF.unit}
                  </td>
                  <td>
                    {Math.round(eachRecipe.recipe.totalDaily.CHOCDF.quantity)}
                    {eachRecipe.recipe.totalDaily.CHOCDF.unit}
                  </td>
                </tr>
                <tr>
                  <td>Fiber</td>
                  <td>
                    {Math.round(
                      eachRecipe.recipe.totalNutrients.FIBTG.quantity
                    )}
                    {eachRecipe.recipe.totalNutrients.FIBTG.unit}
                  </td>
                  <td>
                    {Math.round(eachRecipe.recipe.totalDaily.FIBTG.quantity)}
                    {eachRecipe.recipe.totalDaily.FIBTG.unit}
                  </td>
                </tr>
                <tr>
                  <td>Sugar</td>
                  <td colSpan="2">
                    {Math.round(
                      eachRecipe.recipe.totalNutrients.SUGAR.quantity
                    )}
                    {eachRecipe.recipe.totalNutrients.SUGAR.unit}
                  </td>
                </tr>
                <tr>
                  <td>Protein</td>
                  <td>
                    {Math.round(
                      eachRecipe.recipe.totalNutrients.PROCNT.quantity
                    )}
                    {eachRecipe.recipe.totalNutrients.PROCNT.unit}
                  </td>
                  <td>
                    {Math.round(eachRecipe.recipe.totalDaily.PROCNT.quantity)}
                    {eachRecipe.recipe.totalDaily.PROCNT.unit}
                  </td>
                </tr>
                <tr>
                  <td>Sodium</td>
                  <td>
                    {Math.round(eachRecipe.recipe.totalNutrients.NA.quantity)}
                    {eachRecipe.recipe.totalNutrients.NA.unit}
                  </td>
                  <td>
                    {Math.round(eachRecipe.recipe.totalDaily.NA.quantity)}
                    {eachRecipe.recipe.totalDaily.NA.unit}
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="3">*Based on a 2,000 calorie/day diet.</td>
                </tr>
              </tfoot>
            </table>
          </details> 
          {/* link to full recipe */}
          <a
            href={eachRecipe.recipe.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="fullRecipe">Full Recipe</button>
          </a> 
          {/* button to add ingredients to list*/}
          <button
            className="fullRecipe"
            onClick={() => {
              message.success('successfully saved ingredients')
              let groceries = props.ingredientsList;
              let ingredients = eachRecipe.recipe.ingredientLines;
              groceries.push(ingredients);
              window.localStorage.setItem(
                'groceries',
                JSON.stringify(groceries)
                
              );
            }}
          >
            Add to ingredients List
          </button> 
          {/* 'button' to add recipe to bookmarks page */}
           <img
           src={corazonrojo}
            alt="bookmark"
            className="bookmark"
            onClick={() => {
              message.success('successfully saved')
              let bookmarks = props.bookmarkedRecipes;
              let indx = bookmarks
                .map(b => b.recipe.uri)
                .indexOf(eachRecipe.recipe.uri);
              if (indx === -1) {
                // add recipes
                bookmarks.push(eachRecipe);
                window.localStorage.setItem(
                  'bookmarks',
                  JSON.stringify(bookmarks)
                );
              } else {
                // remove recipes
                bookmarks.splice(indx, 1);
                window.localStorage.setItem(
                  'bookmarks',
                  JSON.stringify(bookmarks)
                );
                window.location.reload();
              }
            }}
          /> 
        </div>
      );
    });
    return <div className="resultsGallery">{resultsGallery}</div>;
  
}

export default Recipe;
