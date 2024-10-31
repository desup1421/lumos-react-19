import React from 'react'

const Navbar = () => {
  return (
    <nav className = "navbar bg-primary border-bottom shadow">
      <div className = "container">
        <h1 className='navbar-brand text-white m-0'>
          <i className='bi bi-robot'></i> LumashiveAI
        </h1>

        <button className='btn btn-danger'>
          <i className='bi bi-box-arrow-right me-2'></i> Logout
        </button>
      </div>

    </nav>


  )
}

export default Navbar