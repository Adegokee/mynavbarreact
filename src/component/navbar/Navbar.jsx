import React, {useState} from 'react'
import { Link} from 'react-router-dom'
import Button from '../button/Button'
import { MenuItem } from '../MenuItems'
import './navbar.css'

const Navbar = () => {
    const [click, setClick]=useState(false)

    const handleClick = () => {
        setClick(!click)
    }
  
  return (
    <>
      <nav className='navbarItems'>
        <h1 className='navbar-logo'>TUNS <i className='fab fa-react'></i></h1>
        <div className='menu-icon' onClick={handleClick}>
           <i className={click ? 'fas fa-times':'fas fa-bars'}></i> 
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {MenuItem.map((item, index)=>(
                 <li key={index}>
                 <Link  className={item.cName} to={item.path}>{item.title}</Link>
             </li>
            ))}
           <Button />
        </ul>
        
      </nav>
      
    </>
  )
}

export default Navbar
