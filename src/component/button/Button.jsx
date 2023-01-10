import React from 'react'
import { Link } from 'react-router-dom'
import './button.css'

const Button = () => {
  return (
    <>
      <button>
      <Link to='/sign-up'>Sign Up</Link>
      </button>
    </>
  )
}

export default Button
