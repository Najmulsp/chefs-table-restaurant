
import { useEffect, useState } from 'react';
import './App.css'
import Header from './components/Header/Header'
import Recipe from './components/Recipe/Recipe'

function App() {
    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
      fetch('Foods.json')
      .then(res => res.json())
      .then(data => setRecipe(data))
    },[])

  return (
    <>
      <Header></Header>
      <Recipe 
      recipe={recipe}
      key={recipe.id}
      ></Recipe>
      
    </>
  )
}

export default App
