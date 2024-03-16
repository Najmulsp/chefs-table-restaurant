
import { useEffect, useState } from 'react';
import './App.css'
import Header from './components/Header/Header'
import Recipe from './components/Recipe/Recipe'

function App() {
    const [recipe, setRecipe] = useState([]);
    const [cart, setCart] = useState([]);
    // const [cooking, setCooking] = useState([]);

    useEffect(() => {
      fetch('./../public/Foods.json')
      .then(res => res.json())
      .then(data => setRecipe(data))
      
    },[])
// item add function
    const handleCard = (p) => {
      
      const isExist = cart.find(pd => pd.recipe_id === p.recipe_id);
        if(!isExist){
          setCart([...cart,p])
        }
        else{
          alert('Item is already selected')
        }
    }
  
    // item remove function
const handleDelete = (id) =>{
  const newCart = cart.filter(item => item.recipe_id != id);
  setCart(newCart);
}
  return (
    <>
      <Header></Header>
      <Recipe 
      recipe={recipe}
      key={recipe.id}
      cart={cart}
      handleCard = {handleCard}
      handleDelete = {handleDelete}
      ></Recipe>
      
    </>
  )
}

export default App
