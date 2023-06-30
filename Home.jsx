import React, { useState } from 'react'
import Users from './Users'
import NewUser from './NewUser'
import { UserContext } from './Context/UserContext'

const Home = () => {
    const [users,setUsers]= useState([
        {id: 1, username: 'karim'},
        {id: 2, username: 'Rahim'},
    ])

    

    const handleAddNEwUser=(newuser)=>{

        setUsers((prevUsers)=>[...prevUsers, newuser]);
        
    }
  return (
    <UserContext.Provider value={{users,setUsers}}>
        <div>
        <NewUser handleAddNEwUser={handleAddNEwUser}/>
        <Users />
    </div>

    </UserContext.Provider>


    
  )
}

export default Home