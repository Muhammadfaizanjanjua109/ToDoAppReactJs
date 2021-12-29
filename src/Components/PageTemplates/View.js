import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
function View()
{
    const { id } = useParams();
    const [dataVar,Data]= useState({});
    
    const LoadData=async()=>
        {

            const result=await axios.get(`http://localhost:3003/user/${id}`);
        Data(result.data);
        }
    
useEffect(()=>{
    LoadData();
},[])
   

   
        
   
return(
    <>
<table className="table table-striped table-dark">
  <thead>

    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
{ console.log(dataVar) }
   
        <tr>
        <th scope="row">{dataVar.id}</th>
        <td>{dataVar.name}</td>
        <td>{dataVar.email}</td>
        <td>{dataVar.phone}</td>
        </tr>
       
        <tr>
        <td>{dataVar.address.suite},{dataVar.address.street} </td>
{console.log(dataVar.address.suite)}
        
        </tr>
    
  </tbody>
</table>
    </>
);
}
export default View;