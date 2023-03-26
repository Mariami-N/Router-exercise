import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import './Navigation.css'
export default function Navigation () {
    return(
            <>
    <nav>
        <ul>
            <li><NavLink to='home'>Home</NavLink></li>
            <li><NavLink to='about'>About</NavLink></li>
            <li><NavLink to='users'>Users</NavLink></li>
            <li><NavLink to='form'>Form</NavLink></li>
        </ul>
    </nav>
    <Outlet></Outlet>
            </>
    )
}