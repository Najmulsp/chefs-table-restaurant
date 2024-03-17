import PropTypes from 'prop-types';
import Card from '../Card/Card';

const Recipe = ({recipe, handleCard, cart, handleDelete, cooking}) => {
    const {recipe_name, preparing_time, calories} = cart;
  
    return (
        <div className="space-y-6 mt-8">
            <h1 className="text-4xl font-semibold">Our Recipes</h1>
            <p className="text-xl">Chef's Table is a food court serving various cuisines from around the world.We are open from 4PM to 4AM.</p>
            <div className="flex flex-col lg:flex-row gap-8 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-3/5">
            {
                recipe.map(pd => <Card
                    product={pd}
                    key={recipe.id}
                    
                    handleCard = {handleCard}
                ></Card>)
            }
            
            </div>
            <div className=" lg:w-2/5 bg-teal-50 rounded-2xl space-y-4">
                <h1 className="text-2xl py-4 font-semibold">Want to cook: {cart.length}</h1>
                <hr />
                <table className="flex flex-col space-y-6">
                    <thead className="flex justify-start space-x-12 pl-16 lg:pl-24">
                        <th >Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </thead>

                    <tr className="space-y-6 px-2 ">
                        
                        {
                            cart.map((item,index) => 
                                (
                                    <>
                                   <tr className='  space-x-8 flex items-center py-4 bg-slate-200 rounded-xl px-2'>
                                    <td>{index+1}</td>
                        <td className=''>{item.recipe_name}</td>
                        <td>{item.preparing_time}</td>
                        <td>{item.calories}</td>
                        <button onClick={() => handleDelete(item)} className='bg-emerald-400 w-32 rounded-full  px-2 font-semibold'>Preparing</button>
                        </tr>    
                        </>
                        
                        
                                )
                                )
                        }
                    </tr>
                </table>

                
                <div>
                <h1 className="text-2xl py-4 font-semibold">Currently cooking:{cooking.length}</h1>
                <hr />

                <table>
                <thead className="flex justify-start space-x-20 pl-20 lg:pl-28 space-y-6">
                        <th className='mt-6'>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </thead>

                    <div >
                        <div>
                            {cooking.map((cook,index) => <div key={cook.recipe_id} className='flex items-center gap-10 py-6 bg-slate-200 px-6 lg:ml-4 rounded-xl mt-6'>
                                <p>{index+1}</p>
                               <p className='w-32 text-center'> {cook.recipe_name}</p>
                               <p> {cook.preparing_time}</p>
                               <p> {cook.calories}</p>
                            </div>)}
                        </div>
                      
                    </div>
                        <div className='text-left pl-10 mt-8 space-y-4'>
                            <p>Total Time = <span>45</span> minutes</p>
                            <p className='pb-6'>Total Calories = <span>1050</span> calories</p>
                        </div>

                </table>
                </div>
            </div>
        </div>
    </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.array.isRequired,
     cart: PropTypes.array.isRequired,
     handleCard: PropTypes.func,
     handleDelete: PropTypes.func,
     cooking:PropTypes.array.isRequired
     
}
export default Recipe;