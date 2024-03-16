import PropTypes from 'prop-types';
import Card from '../Card/Card';

const Recipe = ({recipe, handleCard, cart, handleDelete}) => {
    const {recipe_name, preparing_time, calories} = cart;
  
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
            
            </div>
            <div className="border border-purple-700 w-2/5 bg-teal-50 rounded-2xl space-y-4">
                <h1 className="text-2xl py-4">Want to cook: {cart.length}</h1>
                <hr />
                <table className="flex flex-col space-y-6">
                    <thead className="flex justify-start space-x-12 pl-28">
                        <th >Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </thead>

                    <tr className="space-y-6 px-2 ">
                        
                        {
                            cart.map((item,index) => 
                                (
                                    <>
                                   <tr className='border space-x-8 flex items-center py-4 bg-slate-200 rounded-xl px-2'>
                                    <td>{index+1}</td>
                        <td className='border'>{item.recipe_name}</td>
                        <td>{item.preparing_time}</td>
                        <td>{item.calories}</td>
                        <button onClick={() => handleDelete(item.recipe_id)} className='bg-emerald-400 w-32 rounded-full  '>Preparing</button>
                        </tr>    
                        </>
                        
                        
                                )
                                )
                        }
                    </tr>
                </table>

                
                <div>
                <h1 className="text-2xl py-4">Currently cooking:{cart.length}</h1>
                <hr />

                <table>
                <thead className="flex justify-start space-x-12 pl-28 space-y-6">
                        <th className='mt-6'>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </thead>

                    <div >

                    </div>
                </table>
                </div>
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