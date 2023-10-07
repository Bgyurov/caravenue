import { useState } from "react";
import styles from './Register.module.css'
export const Register = () =>{

    const [userName , setUsername] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [confirmpassword , setConfirmPass] = useState('')



    function userNameChange(e) {
        setUsername(e.target.value)
    }
    function emailChange(e){
        setEmail(e.target.value)
    }
    function passChange(e){
        setPassword(e.target.value)
    }
    function confirmpassChange(e){
        setConfirmPass(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log('Data \n' + userName + ' \n' +  email + ' \n' + password + ' \n' + confirmpassword )
    }
    return (
        <div className={styles.register}>
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={userName}
                        onChange={userNameChange}
                        required
                    />
                </div>
                 <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={emailChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={passChange}
                        required
                    />
                </div> 
                <div>
                    <label htmlFor="confirmpassword">Repeat Password:</label>
                    <input
                        type="password"
                        id="confirmpassword"
                        name="confirmpassword"
                        value={confirmpassword}
                        onChange={confirmpassChange}
                        required
                    />
                </div> 
                <button type="submit">Register</button>
            </form>
        </div>
    );
}
