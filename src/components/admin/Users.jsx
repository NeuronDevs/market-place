import React from 'react'
import useFetch from '../../hooks/useFetch';
import  Axios  from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { User } from './User';

export const Users = () => {
    const ruta = "http://localhost:4000/api/admin/allUsers"
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

  

    useEffect(() => {
        const cargar = async() =>
        {
            setIsLoading(true)
            const options =  {
                method: 'GET',
                url: ruta,
                withCredentials: true
            }
        
            Axios.request(options).then((response) => {
                setUsers(response.data.users);
                setIsLoading(false);
                console.log(response.data.users[0].avatar.url)
               
            }).catch((error) => {
              console.log(error)
              setIsLoading(true);
            });
        
        }
        cargar();
      
    }, [])
    
    return (
      <div className="p-4 container text-center">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
            {

            isLoading
            ? ( <p>Esta cargando...</p>)
            : 
            users.length === 0 ?
            (  <p>No hay Usuarios...</p>)
            :
            (users.map(({_id, name, avatar, email, role}, index) => (
                <User key={index} id={_id} name={name} avatar={avatar} email={email} role={role} users={users} setUsers={setUsers}></User>
            )))
            }
  
        </div>
      </div>
    )
}
