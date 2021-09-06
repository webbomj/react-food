import {useParams, useHistory} from 'react-router-dom';


function Movie() {
    const value = useParams();
    const {goBack} = useHistory();

    // console.log(value2);
    return (
        <>
            <h1>Hello, from Movie page</h1>
            <button className='btn' onClick={goBack}>Go Back</button>
        </>
    )
}

export {Movie};