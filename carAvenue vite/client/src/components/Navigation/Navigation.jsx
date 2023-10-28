import { Link } from "react-router-dom"

export function Navigation(){
    return(
        <header>
        {/*<!-- Navigation -->*/}
        <h1><Link className="home" to="/">CarAvenue</Link></h1>
        <nav>
            <Link to="/catalog">All cars</Link>
            <Link to="/search">Search</Link>
            {/*<!-- Logged-in users -->*/}
            <div id="user">
                <Link to="/create-ad">Public Ad</Link>
                <Link to="/logout">Logout</Link>
                <Link to="#">Profile</Link>
            </div>
            {/*<!-- Guest users -->*/}
            <div id="guest">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </nav>
    </header>
    )
}