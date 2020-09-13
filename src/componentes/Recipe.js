import React,{useEffect,useState} from 'react';
import Info from "./Info";
import CardRecipe from "./CardRecipe";
import { Input } from 'antd';

const { Search } = Input;

const Recipe = () =>{

    const [id,key] = Info();
    const [recipes,setRecipes] = useState([]);
    const [search,setSearch] = useState('');
    const [query,setQuery] = useState('chicken');

    useEffect(()=>{
        getRecipes();
    },[query]);

    const getRecipes = async ()=>{
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${id}&app_key=${key}`);
        const data =await response.json();
        setRecipes(data.hits);
        console.log(data.hits);

    }
    const updateSearch = e =>{
        setSearch(e.target.value);
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }
    return (

        <div>
            <form onSubmit={getSearch} className = "search-form">
                <input className = "search-bar" type = "text" value = {search} onChange = {updateSearch} placeholder = "Search your recipe here "/>
                <button className = "search-button" type = "submit">Search</button>
            </form>
            <div>
                {recipes.map((recipe) =>(
                    <CardRecipe
                        key = {recipe.recipe.label}
                        title = {recipe.recipe.label}
                        calories = {recipe.recipe.calories}
                        image = {recipe.recipe.image}
                        ingredients = {recipe.recipe.ingredients}
                    />
                ))}
            </div>
        </div>

    )

};

export default Recipe;