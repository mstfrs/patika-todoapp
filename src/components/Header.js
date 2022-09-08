import React from 'react'

const Header = ({username,setUsername}) => {

  const handleLogout=()=>{
    localStorage.removeItem("user")
    setUsername("")
  }
  return (
    <div className='header'>
      <div>
      <h2>Welcome    <span className='username'>{username}</span> </h2>
      <button type="" className='button-complete' onClick={()=>handleLogout()}>Logout</button>
      </div>
      
      <br/>
        <h1>Todo List</h1>

    </div>
  )
}

export default Header