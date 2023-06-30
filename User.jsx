import React, { useContext } from 'react'
import style from './index.module.css'
import { UserContext } from './Context/UserContext';

const User = ({user}) => {

    const {users,setUsers}= useContext(UserContext)
    const {id,username}=user;

    const handleDelete =(id) =>{
      const filteredUsers = users.filter((user)=>user.id!==id);
      setUsers(filteredUsers)

    }

    //update handling

    
  
  return (
    
    <article className={style.user}>
        <h2>{id}</h2>
        <p>{username}</p>
        <button onClick={()=>{handleDelete(id)}}>Delete</button>
       
        
    </article>
  )
}

export default User