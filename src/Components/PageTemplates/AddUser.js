import axios from 'axios';
import React, { useState } from 'react';

function AddUser()
{
    const [data,showdata]=useState({
      name: "",
        email : "" ,
        phone:""
    })
    const {name,email,phone}=data;
   const inputChnage=(e)=>{
   showdata({...data,[e.target.name]:e.target.value})
    }
  const SaveData=async e=>{
    e.preventDefault();
   await axios.post("http://localhost:3003/user",data);
   alert("Data Entered");

  }
   
   return(
       <>
       <div className='container shadow mt-2'>
       <form onSubmit={e=>SaveData(e)}>
  <div className="form-group">
    <label htmlFor="username">UserName</label>
    <input type="text" className="form-control" id="exampleInputEmail1"  placeholder="Enter name" name="name" value={name}  onChange={(e)=>{inputChnage(e)}}/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control"  placeholder="Enter email" name="email" value={email} onChange={(e)=>{inputChnage(e)}} />
  </div>
  <div className="form-group">
    <label htmlFor="Phone Number">Phone Number</label>
    <input type="text" className="form-control" id="phoneNumber" placeholder="Enter Number" value={phone} name="phone" onChange={(e)=>{inputChnage(e)}} />
  </div>
 

  <button  className="btn btn-primary">Submit</button>
</form>
       </div>
       </>
   );
}

export default AddUser;