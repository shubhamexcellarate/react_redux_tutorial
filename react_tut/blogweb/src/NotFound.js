import { Link } from "react-router-dom";
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>Page can't br found</p>
            <Link to="/">Back to home page...</Link>
        </div>
     );
}
 
export default NotFound;