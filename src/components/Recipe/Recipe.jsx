import PropTypes from 'prop-types';
import Card from '../Card/Card';

const Recipe = ({recipe, handleCard, cart, handleDelete}) => {
    const {recipe_name, preparing_time, calories} = cart;
  console.log(cart);
    return (
        <div className="space-y-6 mt-8">
            <h1 className="text-4xl font-semibold">Our Recipes</h1>
            <p className="text-xl">Chef's Table is a food court serving various cuisines from around the world.We are open from 4PM to 4AM.</p>
            <div className="flex flex-col lg:flex-row gap-8 border border-rose-600">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 border border-amber-400 w-3/5 bg-amber-100">
            {
                recipe.map(pd => <Card
                    product={pd}
                    key={recipe.id}
                    
                    handleCard = {handleCard}
                ></Card>)
            }
                    
            
            
                    {/* <div className="card card-compact w-80 bg-base-100     shadow-xl">
                        <figure><img className="p-1 rounded-xl" src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body text-left">
                        <h2 className="card-title">Spaghetti Bolognese</h2>
                        <p>Classic Italian pasta dish with savory meat sauce.</p>
                        <hr />
                        <p className="text-xl font-medium">Ingredients: 6</p>
                        <ul className="list-disc pl-4">
                            <li>500g ground beef</li>
                            <li>1 onion, chopped</li>
                            <li>2 cloves garlic, minced</li>
                        </ul>
                        <hr />
                        <div className="flex justify-between w-full">
                            <div  className="flex justify-between gap-2 w-1/2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_36_162)">
<path d="M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C10.8181 3 9.64778 3.23279 8.55585 3.68508C7.46392 4.13738 6.47177 4.80031 5.63604 5.63604C4.80031 6.47177 4.13738 7.46392 3.68508 8.55585C3.23279 9.64778 3 10.8181 3 12Z" stroke="#282828" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 12H15.5" stroke="#282828" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 7V12" stroke="#282828" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_36_162">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
                                <p>30 minutes</p>
                            </div>
                            <div  className="flex justify-between gap-2 w-1/2">
                            <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 9C9 6.04 7 2 6 1C6 4.038 4.227 5.741 3 7C1.774 8.26 1 10.24 1 12C1 13.5913 1.63214 15.1174 2.75736 16.2426C3.88258 17.3679 5.4087 18 7 18C8.5913 18 10.1174 17.3679 11.2426 16.2426C12.3679 15.1174 13 13.5913 13 12C13 10.468 11.944 8.06 11 7C9.214 10 8.209 10 7 9Z" stroke="#282828" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                                <p>600 calories</p>
                            </div>
                        </div>
                        <div className="card-actions justify-start ">
                            <button className="btn btn-primary rounded-full w-40 bg-green-400">Want to Cook</button>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className="border border-purple-700 w-2/5 bg-teal-50 rounded-2xl space-y-4">
                <h1 className="text-2xl py-4">Want to cook: {}</h1>
                <hr />
                <table className="">
                    <thead className="flex justify-start space-x-12 pl-16">
                        <th >Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </thead>

                    <tr className="flex justify-center pl-1">
                        {
                            cart.map((item,index) => 
                                (
                                    <>
                                    <td>{index+1}</td>
                        <td>{item.recipe_name}</td>
                        <td>{item.preparing_time}</td>
                        <td>{item.calories}</td>
                        <button onClick={() => handleDelete(item.id)} className='bg-emerald-400 w-48 rounded-full'>Preparing</button>
                        </>
                        
                                )
                                )
                        }
                    </tr>
                </table>
            </div>
        </div>

  

    </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
     cart: PropTypes.object.isRequired,
     handleCard: PropTypes.func,
     handleDelete: PropTypes.func
     
}
export default Recipe;