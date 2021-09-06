import { Meal } from './Meal';
import { Link } from 'react-router-dom';

function MealList({meals}) {
    return (
    <>
        <Link className='btn' to="/">Back to menu</Link>
        <div className="list">
            
            {meals.map(meal => (
            <Meal key={meal.idMeal} {...meal}/>
            ))}
        </div>
        
    </>
    )
    
}

export {MealList};