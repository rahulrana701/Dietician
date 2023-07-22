import React from 'react'
import "../styles/recipes.css"
import { useState, useEffect } from 'react';
import noodles from "../components/Img/Recipesimg/tagine-6.jpg";
import noodles1 from "../components/Img/Recipesimg/chickencurry.jpg";
import noodles2 from "../components/Img/Recipesimg/salmon.jpg";
import noodles3 from "../components/Img/Recipesimg/Oatmeal and Berries.jpg";
import noodles4 from "../components/Img/Recipesimg/white-bean-and-thyme-soup-130142-1.jpg";
import noodles5 from "../components/Img/Recipesimg/Basil-Garlic-Chicken-Zucchini-Noodles-75.jpg";
import ScrollReveal from 'scrollreveal';

const api_k = process.env.REACT_APP_API_KEY;
const api_i = process.env.REACT_APP_API_ID;

export default function Recipes() {
    useEffect(() => {
        const sr = ScrollReveal({
            reset: true,
            distance: '80px',
            duration: 1100,
        });

        sr.reveal('.recipes h1', { delay: 200, origin: 'top' });
        sr.reveal('.recipes1', { delay: 200, origin: 'top' });
        sr.reveal('.recipe1', { delay: 100, origin: 'top' });
        sr.reveal('.recipe2', { delay: 100, origin: 'top' });
        sr.reveal('.recipe3', { delay: 100, origin: 'top' });
        sr.reveal('.recipe4', { delay: 100, origin: 'top' });
        sr.reveal('.recipe5', { delay: 100, origin: 'top' });
        sr.reveal('.recipe6', { delay: 100, origin: 'top' });

        return () => {
            sr.destroy();
        };
    }, []);
    const [recipeno, setrecipeno] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };
    const handlesubmit = async (e) => {
        e.preventDefault();
        let url = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchQuery}&app_id=${api_i}&app_key=${api_k}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setrecipeno(parsedData.hits);
    }

    return (
        <>
            <div className="recipes">
                <h1>YOUR PERSONAL FOOD COURT </h1>
                <div className="recipes1">
                    <h1>It's Even Better Than Your Expensive <br /> Crockery Book</h1>
                    <p>WHERE YOU CAN GET RECIPES WITH REQUIRED
                        INGREDIENTS  ALONG WITH THE <br />NUTRTIONAL VALUES SO THAT YOU CAN EAT WITHOUT <br />
                        GUILT AND BE FIT  AT THE SAME TIME</p>
                </div>
            </div>
            <div className="recipesapi">
                <h1>LOOK OUT FOR YOUR FAVOURITE RECIPE <br /><span>WITH IT'S MACROS</span></h1>
                <p>We also provide you recipes according to the ingredients you have </p>
                <div className="fillrecipe">
                    <form action="">
                        <input type="text" placeholder='SEARCH FOR ANY RECIPE OR LIST THE INGREDIENTS YOU HAVE' value={searchQuery} onChange={handleInputChange} />
                        <button onClick={handlesubmit}>GET RECIPES</button>
                    </form>
                </div>

                <div className="getrecipe">
                    {recipeno.map((recipe) => (
                        <div className="recipecontainer" key={recipe.recipe.uri}>
                            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
                            <h2>{recipe.recipe.label}</h2>
                            <h4>{recipe.recipe.dietLabels}</h4>
                            <h4>
                                HealthLabels:  {recipe.recipe.healthLabels.slice(0, 2)};
                            </h4>
                            <p>INGREDIENTS:{recipe.recipe.ingredientLines.slice(0, 5).join(', ') + '....'}</p>
                            <h3>Calories: {Math.floor(recipe.recipe.calories)}</h3>
                            <h3>Protien: {Math.floor(recipe.recipe.totalNutrients.PROCNT.quantity)}gm</h3>
                            <h3>Carbs: {Math.floor(recipe.recipe.totalNutrients.CHOCDF.quantity)}gm</h3>
                            <h3>Fats: {Math.floor(recipe.recipe.totalNutrients.FAT.quantity)}gm</h3>
                            <a href={recipe.recipe.url} target='_blank' rel='noreferrer'>READ FULL RECIPE</a>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mustrecipes">
                <h1>SOME POPULAR HEALTHY RECIPES YOU MUST TRY</h1>
                <div className="checkrecipe">
                    <div className="recipe1">
                        <img src={noodles} alt="" />
                        <h2>VEGETABLE TAGINE</h2>
                        <a href="https://www.themediterraneandish.com/moroccan-vegetable-tagine-recipe/" target='_blank' rel='noreferrer'>READ RECIPE</a>
                    </div>
                    <div className="recipe2">
                        <img src={noodles1} alt="" />
                        <h2>CHICKEN CURRY</h2>
                        <a href="https://www.allrecipes.com/recipe/212721/indian-chicken-curry-murgh-kari/" target='_blank' rel='noreferrer'>READ RECIPE</a>
                    </div>
                    <div className="recipe3">
                        <img src={noodles2} alt="" />
                        <h2>LEMON SALMON</h2>
                        <a href="https://www.themediterraneandish.com/lemon-garlic-salmon-recipe/" target='_blank' rel='noreferrer'>READ RECIPE</a>
                    </div>
                    <div className="recipe4">
                        <img src={noodles3} alt="" />
                        <h2>OAT MEAL</h2>
                        <a href="https://www.loveandlemons.com/how-to-make-oatmeal/" target='_blank' rel='noreferrer'>READ RECIPE</a>
                    </div>
                    <div className="recipe5">
                        <img src={noodles4} alt="" />
                        <h2>WHITE BEAN SOUP</h2>
                        <a href="https://feelgoodfoodie.net/recipe/white-bean-soup/" target='_blank' rel='noreferrer'>READ RECIPE</a>
                    </div>
                    <div className="recipe6">
                        <img src={noodles5} alt="" />
                        <h2>CHICKEN PESTO PASTA</h2>
                        <a href="https://therecipecritic.com/chicken-pesto-pasta/" target='_blank' rel='noreferrer'>READ RECIPE</a>
                    </div>
                </div>
            </div>
        </>
    )
}

