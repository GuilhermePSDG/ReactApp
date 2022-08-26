
import { NavLink } from 'react-router-dom';
import './TopBar.css'

export default function TopBar() {
    return <div>
        <div className='topBar'>
            <NavLink activeclassname='active' to="" id='company'> App </NavLink >
            <span className='space'></span>
            <NavLink activeclassname='active' className='topBarItem' to="/dog"> Dogs </NavLink >
            <NavLink activeclassname='active' className='topBarItem' to="/birthday"> Birthday </NavLink >
            <NavLink activeclassname='active' className='topBarItem' to="/items">Items </NavLink >
            <NavLink activeclassname='active' className='topBarItem' to="/large"> Large list </NavLink >
        </div >

    </div >
} 