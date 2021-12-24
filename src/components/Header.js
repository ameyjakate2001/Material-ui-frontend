import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'

const Header = () => {
  const [isActive, setActive] = useState(false)
  const navClickHandler = () => setActive(!isActive)
  return (
    <header>
      <h3 className='logo'>YourChallenge</h3>
      <div className='mobile-menu' onClick={navClickHandler}>
        {isActive ? <CloseIcon /> : <MenuIcon />}
      </div>
      <ul className={isActive ? 'nav-options active' : 'nav-options'}>
        <li>
          <span></span>
          <a href='true'>Product</a>
        </li>
        <li>
          <a href>Download</a>
        </li>
        <li>
          <a href>Pricing</a>
        </li>
      </ul>
    </header>
  )
}

export default Header
