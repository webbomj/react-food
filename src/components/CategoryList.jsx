import {CategoryItem} from './CategoryItem'
 
function CategoryList({catalog} = []) {
    return (
        <>
            <div className="list">
                {catalog.map(el => (
                    <CategoryItem ket={el.idCategory} {...el}/>
                ))}
            </div>
        </>
    )
    
};

export {CategoryList};