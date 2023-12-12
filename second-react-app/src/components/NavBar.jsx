import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MyThemeContext } from '../context/MyThemeContext'

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";


export default function NavBar() {
    const { theme } = useContext(MyThemeContext);

    return (
        
            <nav className="NavBar"
                style={{ backgroundColor: theme.background, color: theme.foreground }}>
                <ul className="menu">
                    <li><NavLink to="/Homepage">Home</NavLink></li>
                    <li><NavLink to="/LoginPage">Login</NavLink></li>
                    <li><NavLink to="/DashboardPage">Dashboard</NavLink></li>
                    <li><NavLink to="/AboutPage">About</NavLink></li>
                    <li><NavLink to="/BitcoinRatesPage">Bitcoin Rate</NavLink></li>
                </ul> {/* ++ Add another page with route and component */}
            </nav>
          
    )
}