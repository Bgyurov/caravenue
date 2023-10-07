import {  NavLink } from 'react-router-dom';
import styles from './Navigation.module.css'


export const MainNavigation = () => {
    return (
        <nav className={styles.navigation}>
            <ul >
            <li><NavLink style={({isActive}) => ({color: isActive ? 'purple' : 'white'})} to="/">Home</NavLink></li>
            <li><NavLink style={({isActive}) => ({color: isActive ? 'purple' : 'white'})} to="/allads">All ads</NavLink></li>
            <li><NavLink style={({isActive}) => ({color: isActive ? 'purple' : 'white'})} to="/about">About</NavLink></li>
            <li><NavLink style={({isActive}) => ({color: isActive ? 'purple' : 'white'})} to="/search">Search</NavLink></li>
            <li><NavLink style={({isActive}) => ({color: isActive ? 'purple' : 'white'})} to="/myads">My ads</NavLink></li>

            <li><NavLink style={({isActive}) => ({color: isActive ? 'purple' : 'white'})} to="/logout">Logout</NavLink></li>

            <li><NavLink style={({isActive}) => ({color: isActive ? 'purple' : 'white'})} to="/register">Register</NavLink></li>
            <li><NavLink style={({isActive}) => ({color: isActive ? 'purple' : 'white'})} to="/login">Login</NavLink></li>


            </ul>
        </nav>
       
    );
};