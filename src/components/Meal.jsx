import { Link } from 'react-router-dom';
 
function Meal(props) {
    const {
        strMeal: name,
        idMeal: id,
        strMealThumb: image,
    } = props;

    return <div className="card">
    <div className="card-image">
        <img src={image} alt={name}/> 
    </div>
    <div className="card-content">
        <span className="card-title">{name}</span>
     </div>
    <div className="card-action">
        <Link to={`/meal/${id}`} className="btn">Watch recipe</Link>
    </div>
</div>
}

export {Meal}