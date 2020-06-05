import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className='container' >
        <img className='profile-pic' src='/images/Wolf.jpg' alt='wolf' />
        <div style={{ display: 'inline' }}>
          <Link to='/'><button>
            Home
          </button></Link>
        </div>
      </div>
    </>
  )
}

export default Footer
