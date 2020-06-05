import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div>
        <img className='profile-pic' src='/images/Wolf.jpg' alt='wolf' />
        <Link to='/'><button>
          Home
        </button></Link>
      </div>
    </>
  )
}

export default Footer
