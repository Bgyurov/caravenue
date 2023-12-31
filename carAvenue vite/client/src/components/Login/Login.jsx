import { AuthContext } from "../../contexts/AuthContext"
import { useContext } from "react"
import { useForm } from "../../hooks/useForm.tsx"
import { Link } from "react-router-dom"
import '../Login/Login.css'
export function Login(){
    const { onLoginSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
       password: '',
    }, onLoginSubmit);
    return (
        <section id="login-page" className="auth">
        <form id="login" method="POST" onSubmit={onSubmit}>

            <div className='container'>

                <h1>Login</h1>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Email..." value={values.email}  onChange={changeHandler}/>

                <label htmlFor="login-pass">Password:</label>
                <input type="password" id="login-password" placeholder="Password..." name="password" value={values.password}  onChange={changeHandler} />
                <input type="submit" className="btn submit" value="Submit" />
                <p className="field">
                    <span>If you don't have profile click <Link to="/register">here</Link></span>
                </p>
            </div>
        </form>
    </section>

    )
}