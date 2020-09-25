import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchForm from './SearchForm';
import Results from './Results';
import IngredientsList from './IngredientsList'
import { message} from 'antd';

class API extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      errorMsg: '',
      includeSearchString: '',
      excludeSearchString: '',
      bookmarkedRecipes: JSON.parse(
        window.localStorage.getItem('bookmarks') || '[]'
      ),
      ingredientsList: JSON.parse(window.localStorage.getItem('ingredients') || '[]')
    };
  }
  //cargar pagina, crear nuevas casillas de verificaci'on
  componentDidMount = () => {
    this.selectedCheckboxes = new Set();
  };

  // "checked" agregar o quitar
  toggleCheckbox = event => {
    if (this.selectedCheckboxes.has(event.target)) {
      this.selectedCheckboxes.delete(event.target);
    } else {
      this.selectedCheckboxes.add(event.target);
      console.log(event.target)
    }  
  };
  
  // respuesta que obtenemos de la búsqueda
  setRecipes = recipes => {
    this.setState({ recipes: recipes });
  };
  
  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };
  // pasar a la URL
  handleSubmit = event => {
    this.setState({ errorMsg: '' });
    event.preventDefault();
    let splitString = this.state.excludeSearchString
      .split(' ')
      .map(subStr => {
        return `&excluded=${subStr}`;
      })
      .join('');
    let setArray = Array.from(this.selectedCheckboxes);
    let filterArray = setArray
      .map(entry => {
        return `&${entry.name}=${entry.value}`;
      })
      .join('');
    this.getRecipes(splitString, filterArray);
  };
  
  getRecipes = (splitString, filterArray) => {
    const url = `https://api.edamam.com/search?app_id=6e95c0e0&app_key=bf67899300d58440929bc4c98ec950dd&from=0&to=20&q=${this.state.includeSearchString}${splitString}${filterArray}`;
      console.log(url)
    fetch(url)
      .then(response => response.json())
      .then(response => {
        if (response.count) {
          let recipes = response.hits;
          this.setRecipes(recipes);
        } else {
          this.setState({
            errorMsg:'Oops! Looks like we didnt find any recipes with those ingredients.'
          });
        }
      });
  };

  render() {
    return (
      
        <div className="main">
           <Switch>
            <Route
              path="/"
              exact
              render={() => {
                return ( 
                  <div>
                      
                  <SearchForm
                      handleChange={this.handleChange}
                      handleSubmit={this.handleSubmit}
                      toggleCheckbox={this.toggleCheckbox}
                      getRecipes={this.getRecipes}
                      searchFilters={this.state.searchFilters}
                      includeSearchString={this.state.includeSearchString}
                      excludeSearchString={this.state.excludeSearchString}
                    />
                    <Results
                      recipes={this.state.recipes}
                      bookmarkedRecipes={this.state.bookmarkedRecipes}
                      ingredientsList={this.state.ingredientsList}
                    />
                   
                  </div>
                );
              }}
            />
            <Route
              path='/recipes'
              render={() => {
                return (
                  <Results
                    recipes={this.state.bookmarkedRecipes}
                    bookmarkedRecipes={this.state.bookmarkedRecipes}
                    ingredientsList={this.state.ingredientsList}
                  />
                );
              }}
            />
            <Route
              path='/ingredients'
              render={() => {
                return <IngredientsList ingredientsList={this.state.ingredientsList} />;
              }}
            />
          </Switch>
          <p className='instructions error'>{this.state.errorMsg}</p>
        </div>
        
      
    );
  }
}


export default API;
