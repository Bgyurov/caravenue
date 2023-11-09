import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext.tsx"
export function Navigation(){
    const {isAuthenticated,userEmail} = useContext(AuthContext)
    return(
        <header>
        {/*<!-- Navigation -->*/}
        <h1><Link className="home" to="/">CarAvenue</Link></h1>
        <nav>
            <Link to="/catalog">All cars</Link>
            <Link to="/search">Search</Link>
            {/*<!-- Logged-in users -->*/}
            {isAuthenticated && (
            <div id="user">
                <Link to="/create-ad">Public Ad</Link>
                <Link to="/logout">Logout</Link>
                <span>{userEmail}</span>
                <Link to="#">Profile</Link>
            </div>
            )}
            {/*<!-- Guest users -->*/}
            {!isAuthenticated && (
            <div id="guest">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
            )}
        </nav>
    </header>
    )
}