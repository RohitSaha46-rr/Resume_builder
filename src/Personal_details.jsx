import { faList } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from "react-router-dom";
import Head from './Head';
import './personal_details.css';


  

  

const Personal_details = () => {
 
  
    
const fun2=()=>{

  let DATA=JSON.parse(localStorage.getItem('list1'));
  if(DATA)
  return DATA.user_name;
}
const fun3=()=>{
  
  let DATA=JSON.parse(localStorage.getItem('list1'));
  if(DATA)
  return DATA.email;
}
const fun4=()=>{
  let DATA=JSON.parse(localStorage.getItem('list1'));
  if(DATA)
  return DATA.contact;
}
const fun5=()=>{
  let DATA=JSON.parse(localStorage.getItem('list1'));
  if(DATA)
  return DATA.address;
}
const fun6=()=>{
  let DATA=JSON.parse(localStorage.getItem('list1'));
  if(DATA)
  return DATA.post;
}
const fun7=()=>{
  let DATA=JSON.parse(localStorage.getItem('list1'));
  if(DATA)
  return DATA.dist;
}
const fun8=()=>{
  let DATA=JSON.parse(localStorage.getItem('list1'));
  if(DATA)
  return DATA.profession;
}
const fun9=()=>{
  let DATA=JSON.parse(localStorage.getItem('list1'));
  if(DATA)
  return DATA.pin;
}
  
 
  
  
  const inp=useRef(null);
  const inp1=useRef(null);
  const inp2=useRef(null);
  const[initial_conc,updated_ini_conc]=useState(0);
  const[initial_add,updated_ini_add]=useState(0);
  const[initial_prof,updated_ini_prof]=useState(0);
  const[image,updated_image]=useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png");
 const[userinfo,setinfo]=useState(
   {
    user_name:"",
    email:"",
    contact:"",
    address:"",
    post:"",
    dist:"",
    profession:"",
    pin:""
   }
   
 )

const[local_info,up_info]=useState({
  user_name:fun2(),
  email:fun3(),
  contact:fun4(),
  address:fun5(),
  post:fun6(),
  dist:fun7(),
  profession:fun8(),
  pin:fun9()

 
}
)
  
 let name,value;



  const onchange=(e)=>{
    name=e.target.name;
    value=e.target.value;
    setinfo({...userinfo,[name]:value});
    up_info({...local_info,[name]:value});
   
   updated_ini_conc(inp.current.value.length);
    updated_ini_add(inp1.current.value.length);
    updated_ini_prof(inp2.current.value.length);
  }
  const eventHandler=(e)=>{
    const reader=new FileReader();
    reader.onload=()=>{
updated_image(reader.result);
    }
    reader.readAsDataURL(e.target.files[0]);
  }
  //console.log(userinfo);

  const navigate = useNavigate();
  const fun=()=>{
   
navigate("/education",{ state: { username:local_info.user_name,email:local_info.email,contact:local_info.contact,address:local_info.address,post:local_info.post,dist:local_info.dist,profession:local_info.profession,pin:local_info.pin,image:image, } });
 

    
  }
useEffect(()=>{
  
  localStorage.setItem('list1',JSON.stringify(local_info));
},[userinfo])
  

 


  return (
    <div className='Personal_details'>
    <Head title="Let's generate your Resume!"
    ></Head>
    
    <div className='content'>
    <div className='main_content'>
    <div className='head1'>
        <h1>Personal Details</h1>
        </div>
        <div className='form'>
       <form onSubmit={fun}>
              <div className='box1 pt-3'>
           <div className='first'>
            <h1>Name*</h1>
            <input type="text" value={local_info.user_name} name="user_name" onChange={onchange} required ></input>
            
            </div>
            <div className='first'>
            <h1>Email*</h1>
            <input type="email" value={local_info.email} name="email" onChange={onchange} required ></input>
            </div>
            <div className='first'>
            <h1>Contact No.*</h1>
            <input type="tel" value={local_info.contact} name="contact" onChange={onchange} required maxLength="12" ref={inp}></input>
            <p>{initial_conc}/12</p>
            </div>
        </div>
        <div className='box1 pt-3'>
           <div className='first'>
            <h1>Address*</h1>
            <input type="address" value={local_info.address} name="address" onChange={onchange} required maxLength="40" ref={inp1}></input>
            <p>{initial_add}/40</p>
            </div>
            <div className='first'>
            <h1>Post*</h1>
            <input type="text" value={local_info.post} name="post" onChange={onchange} required></input>
            
            </div>
            <div className='first'>
            <h1>District*</h1>
            <input type="text" value={local_info.dist} name="dist" onChange={onchange} required></input>
            </div>
            
        </div>
        <div className='box1 pt-3'>
        
           <div className='first'>
            <h1>Profession*</h1>
            <input type="text" value={local_info.profession} name="profession" onChange={onchange} required maxLength="15" ref={inp2}></input>
            <p>{initial_prof}/15</p>
            </div>
            <div className='first'>
            <h1>Pin*</h1>
            <input type="tel" value={local_info.pin} name="pin" onChange={onchange} required></input>
            </div>
            
            
        </div>
        
        <div className='box1 pt-2'>
        <div className='first'>
          <h1>Picture</h1>
          <input type="file" accept="image/*" onChange={eventHandler}></input>
        </div>
        <img src={image} style={{width:"100px",height:"100px"}}></img>
        </div>
        
        <div className='box1 pt-3'>
        
      
      <button type="submit" className='btn_2'>Next</button>
          
        </div>
        </form>
       
        </div>
    </div>
    </div>
    </div>
  )
}

export default Personal_details