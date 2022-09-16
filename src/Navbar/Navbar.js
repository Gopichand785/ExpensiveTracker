import React from 'react'
import {Link} from 'react-router-dom'
 const Navbar = () => {
  return (
    <>
   <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
    <Link to='/' className='navbar-brand'>Animes List</Link>
    <div className='ml-auto'>
        <ul className='navbar-nav'>
            <li className='nav-item'><Link to='/page1' className='nav-link'>page1</Link></li>
            <li className='nav-item'><Link to='/page2' className='nav-link'>page2</Link></li>
        </ul>
    </div>
   </nav>
   </>
  )
}
export default Navbar