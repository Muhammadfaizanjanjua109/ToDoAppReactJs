import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
function Update()
{
    const { id }  = useParams();
console.log(id);

useEffect(()=>{
    GetData();
});


    const [user,getFormData]=useState([]);
const GetData=async()=>{
    const  result= await axios.get(`http://localhost:3003/user/${id}`);
    getFormData(result.data);
 }
 const Update=async e=>{
     e.preventDefault();

    const update = await axios.put(`http://localhost:3003/user/${id}`,user);
    console.log(update.data);
 }
 const HandleChange=(e)=>{
    
    getFormData({...user,[e.target.name]:e.target.value});
   
 }

    return(
        <>
          <div className='container shadow mt-2'>
       <form onSubmit={(e)=>{Update(e)}}>
  <div className="form-group">
    <label htmlFor="username">UserName</label>
    <input type="text" className="form-control" id="exampleInputEmail1"  placeholder="enter Name" name="name" value={user.name} onChange={(e)=>{HandleChange(e)}}/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control"  placeholder="enter email" name="email"   value={user.email} onChange={(e)=>{HandleChange(e)}}/>
  </div>
  <div className="form-group">
    <label htmlFor="Phone Number">Phone Number</label>
    <input type="text" className="form-control" id="phoneNumber" placeholder="enter phone"  name="phone"  value={user.phone} onChange={(e)=>{HandleChange(e)}} />
  </div>
 

  <button  className="btn btn-success">Update</button>
</form>
       </div>
        </>
    );
}
export default Update;