import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Tech Blog</h1>
            <Link to="/">Home </Link>
            {/* <a href="/create" style={{
                backgroundColor: "#35ccfa",
                color: "white",
                borderRadius: "8px"
            }}>New Blog</a> */}
            <Link to="/create">New Blog</Link>
            <Link to="/about">About</Link>

        </nav>
    );
}

export default Navbar;