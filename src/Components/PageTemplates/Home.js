import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home()
{
  const [users,userData]=useState([]);
  
    useEffect(()=>{
    
LoadData();
    },[]);
    const LoadData=async()=>
    {
        const result=await axios.get("http://localhost:3003/user");
        userData(result.data);
    };
    const Delete=(id)=>{
     axios.delete(`http://localhost:3003/user/${id}`);
     LoadData();
    }
    return(
        <>
        <div className='container'>
        <table class="table shadow  table-striped mt-2">
  <thead class="thead-light">
    <tr className='table-info'>
      <th scope="col">#</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
{
    users.map((user,index)=>(
        <tr>
            <td>{index+1}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>  <Link className='btn btn-success' to={`update/${user.id}`}>Update</Link>  <button className='btn btn-primary' onClick={()=>Delete(user.id)}>Delete</button>  <Link className='btn btn-danger' to ={`View/${user.id}`} >View</Link> </td>
        </tr>
    ))
    
}
   
  
  </tbody>
</table>

        </div>
        </>
    );
}
export default Home;