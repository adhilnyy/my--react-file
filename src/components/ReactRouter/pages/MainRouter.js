import React from 'react'
import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import { Route, Routes, Link } from 'react-router-dom'
import NotFound from './NotFound'

const MainRouter = () => {
  return (
    <div>
        <ul>
            <button>
                <Link to='/' style={{color:"blue"}} >Home</Link>
            </button>
            <li>
                <Link to='about' >About</Link>
            </li>

            <li>
                <Link to='services' >Services</Link>
            </li>
            <li>
                <Link to='contact' >Contact</Link>
            </li>

        </ul>
        <Routes>
            <Route path='/' element ={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='services' element={<Services />} />
            <Route path='*' element={<NotFound />} />
        </Routes>

    </div>
  )
}

export default MainRouter