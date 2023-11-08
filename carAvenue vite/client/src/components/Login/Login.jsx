import { AuthContext } from "../../contexts/AuthContext.tsx"
import { useContext } from "react"

export function Login(){
const {onLoginSubmit} = useContext(AuthContext)

    return (
        <section id="login-page" className="auth">
        <form id="login" onSubmit={onLoginSubmit}>

            <div className="container">

                <h1>Login</h1>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Sokka@gmail.com" />

                <label htmlFor="login-pass">Password:</label>
                <input type="password" id="login-password" name="password" />
                <input type="submit" className="btn submit" value="Login" />
                <p className="field">
                    <span>If you don't have profile click <a href="#">here</a></span>
                </p>
            </div>
        </form>
    </section>

    )
}