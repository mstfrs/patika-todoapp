import React, {  useState } from 'react'

const Login = ({username,setUsername}) => {
    const [userInput, setUserInput] = useState("")
   


    const handleLogin=()=>{
        localStorage.setItem("user",userInput)
        setUsername(userInput)
        
        

    }
  return (
    <div className='login-container'>
        
        <input type="text" name="" value={username} className='task-input' placeholder='Type Username...' onChange={(e)=>{
            setUserInput(e.target.value)
            e.preventDefault();
        }}/>
        <button type="submit" className='button-add' onClick={()=>handleLogin()}>Login</button>
        
        
    </div>
  )
}

export default Login