import React, { useState } from 'react'

const NewUser = ({handleAddNEwUser}) => {
    const [username,setUserName] = useState("")

    const handleUserNameChange =(e)=>{
        setUserName(e.target.value);
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        const newUser = {id: new Date().getTime().toString(), username:username}
        {handleAddNEwUser(newUser)}
        setUserName(" ");
    
    }

    
  return (
    <div>
        <h2>Add New USer</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name='username' value={username} onChange={handleUserNameChange} required/>
            <button type='submit' >Add user</button>
        </form>
    </div>
  )
}

export default NewUser