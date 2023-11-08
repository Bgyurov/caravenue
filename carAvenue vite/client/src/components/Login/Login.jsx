import { AuthContext } from "../../contexts/AuthContext.tsx"
import { useContext } from "react"
import { useForm } from "../../hooks/useForm.tsx"
export function Login(){
    const { onLoginSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
       password: '',
    }, onLoginSubmit);
    return (
        <section id="login-page" className="auth">
        <form id="login"  onSubmit={onSubmit}>

            <div className="container">

                <h1>Login</h1>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Sokka@gmail.com" value={values.email}  onChange={changeHandler}/>

                <label htmlFor="login-pass">Password:</label>
                <input type="password" id="login-password" name="password" value={values.password}  onChange={changeHandler} />
                <input type="submit" className="btn submit" value="Login" />
                <p className="field">
                    <span>If you don't have profile click <a href="#">here</a></span>
                </p>
            </div>
        </form>
    </section>

    )
}