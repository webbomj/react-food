import {Link} from 'react-router-dom';

function CategoryItem(props) {
    const {
        idCategory: id,
        strCategory: name,
        strCategoryThumb: image,
        strCategoryDescription: desc,

    } = props;

    
    return <div className="card">
            <div className="card-image">
                <img src={image} alt={name}/> 
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
                <p>{desc.slice(0, 60)}...</p>
             </div>
            <div className="card-action">
                <Link to={`/category/${name}`} className="btn">Watch category</Link>
            </div>
        </div>
};

export {CategoryItem};