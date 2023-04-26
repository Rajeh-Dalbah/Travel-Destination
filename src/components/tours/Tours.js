import { Link } from 'react-router-dom';
import Tour from './tour/tour';
import './Tours.css'
function Tours(props) {

    return (
        <>
            {props.data.map((val,idx)=> {
                return (
                    <div className="card" key={idx}>
                             <Link 
                             to={`/city/${val.id}`}>
                                 <Tour tour={val}/>
                                 </Link> 
                                 <hr></hr>
                                 <hr></hr>
                                 <hr></hr>


                             </div>
                             );
            })}
        </>
    );
}

export default Tours;