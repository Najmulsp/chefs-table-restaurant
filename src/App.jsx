
import { useEffect, useState } from 'react';
import './App.css'
import Header from './components/Header/Header'
import Recipe from './components/Recipe/Recipe'

function App() {
    const [recipe, setRecipe] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
      fetch('./../public/Foods.json')
      .then(res => res.json())
      .then(data => setRecipe(data))
      
    },[])
// item add function
    const handleCard = (p) => {
      const isExist = cart.find(item => item.id == p.id);
        if(!isExist){
          setCart([...cart,p])
        }
        else{
          alert('Item is already selected')
        }
    }

    // item remove function
const handleDelete = (id) =>{
  console.log(id);
}
  return (
    <>
      <Header></Header>
      <Recipe 
      recipe={recipe}
      key={recipe.id}
      handleCard = {handleCard}
      cart={cart}
      handleDelete = {handleDelete}
      ></Recipe>
      
    </>
  )
}

export default App
