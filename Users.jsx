import React, { useContext } from 'react'
import User from './User'
import style from './index.module.css'
import { UserContext } from './Context/UserContext'


const Users = () => {

    const {users,setUsers}= useContext(UserContext)
  return (
    <section className={style.users}>
       {users.map(user => <User key={user.id} user={user} /> )}
    </section>
        )
}

export default Users