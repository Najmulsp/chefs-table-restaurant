
import { useEffect, useState } from 'react';
import './App.css'
import Header from './components/Header/Header'
import Recipe from './components/Recipe/Recipe'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function App() {
    const [recipe, setRecipe] = useState([]);
    const [cart, setCart] = useState([]);
    const [cooking, setCooking] = useState([]);

    useEffect(() => {
      fetch('Foods.json')
      .then(res => res.json())
      .then(data => setRecipe(data))
      
    },[])
// item add function
    const handleCard = (p) => {
      const isExist = cart.find(pd => pd.recipe_id === p.recipe_id);
      if(!isExist){
        setCart([...cart,p])
        toast("Your selection successfully added");
      }
      else{
        
        toast("Item is already selected");
         
        }
    }
  
    // item remove function
const handleDelete = (id) =>{
  toast("Your food is preparing");
  const newCart = cart.filter(item => item.recipe_id != id.recipe_id);
  setCart(newCart);
  const cookingCart = [...cooking, id];
  setCooking(cookingCart);
  
}
  return (
    <>
      <Header></Header>
      <Recipe 
      recipe={recipe}
      key={recipe.id}
      cart={cart}
      cooking={cooking}
      handleCard = {handleCard}
      handleDelete = {handleDelete}
      ></Recipe>
      <ToastContainer />
    </>
  )
}

export default App
