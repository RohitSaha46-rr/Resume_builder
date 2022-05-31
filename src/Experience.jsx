import React, { useEffect, useRef, useState } from 'react'
import Head from './Head'
import './experience.css';
import {Link, useLocation, useNavigate} from 'react-router-dom';

//console.log(DATA);
const Experience = () => {
  const fun1=()=>{
    let data = JSON.parse(localStorage.getItem('list_experience'));
    if(data)
      return data.objective
    else
      return ""
  }
  const fun2=()=>{
    let data = JSON.parse(localStorage.getItem('list_experience'));
    if(data)
      return data.exp1
    else
      return ""
  }
  const fun3=()=>{
    let data = JSON.parse(localStorage.getItem('list_experience'));
    if(data)
      return data.exp2
    else
      return ""
  }
  const fun4=()=>{
    let data = JSON.parse(localStorage.getItem('list_experience'));
    if(data)
      return data.exp3
    else
      return ""
  }
  const fun5=()=>{
    let data = JSON.parse(localStorage.getItem('list_experience'));
    if(data)
      return data.internship1
    else
      return ""
  }
  const fun6=()=>{
    let data = JSON.parse(localStorage.getItem('list_experience'));
    if(data)
      return data.internship2
    else
      return ""
  }
  const fun7=()=>{
    let data = JSON.parse(localStorage.getItem('list_experience'));
    if(data)
      return data.internship3
    else
      return ""
  }
  
  const inp1=useRef(null);
  const inp2=useRef(null);
  const inp3=useRef(null);
  const inp4=useRef(null);
  const inp5=useRef(null);
  const inp6=useRef(null);
  const inp7=useRef(null);
  const[initial_obj,up_obj]=useState(0);
  const[initial_exp1,up_exp1]=useState(0);
  const[initial_exp2,up_exp2]=useState(0);
  const[initial_exp3,up_exp3]=useState(0);
  const[initial_intern1,up_intern1]=useState(0);
  const[initial_intern2,up_intern2]=useState(0);
  const[initial_intern3,up_intern3]=useState(0);
  const[userinfo,setinfo]=useState({
    objective:fun1(),
    exp1:fun2(),
    exp2:fun3(),
    exp3:fun4(),
    internship1:fun5(),
    internship2:fun6(),
    internship3:fun7(),
  })
useEffect(()=>{
  localStorage.setItem('list_experience',JSON.stringify(userinfo));},[userinfo]
);


  let name,value;
  const onchange1=(e)=>{
    name=e.target.name;
    value=e.target.value;
    setinfo({...userinfo,[name]:value});
    up_obj(inp1.current.value.length);
    up_exp1(inp2.current.value.length);
    up_exp2(inp3.current.value.length);
    up_exp3(inp4.current.value.length);
    up_intern1(inp5.current.value.length);
    up_intern2(inp6.current.value.length);
    up_intern3(inp7.current.value.length);
  }
    const navigator=useNavigate();
    const location=useLocation();
    const{username,email,contact,address,post,dist,profession,pin,image,
      clg_name,board,qual,per,pyear,stream,clg_name2,board2,qual2,per2,pyear2,stream2,schl_name3,board3,qual3,per3,pyear3,stream3,schl_name4,board4,qual4,per4,pyear4,stream4,
    skill1,skill2,skill3,lang1,lang2,lang3}=location.state;
    // console.log(username,email,contact,address,post,dist,profession,pin,image,
    //   clg_name,board,qual,per,pyear,stream,clg_name2,board2,qual2,per2,pyear2,stream2,schl_name3,board3,qual3,per3,pyear3,stream3,schl_name4,board4,qual4,per4,pyear4,stream4,
    //   skill1,skill2,skill3,lang1,lang2,lang3);
    const fun=()=>{
      navigator("/projects",{state:{username,email,contact,address,post,dist,profession,pin,image,
      clg_name,board,qual,per,pyear,stream,clg_name2,board2,qual2,per2,pyear2,stream2,schl_name3,board3,qual3,per3,pyear3,stream3,schl_name4,board4,qual4,per4,pyear4,stream4,
      skill1,skill2,skill3,lang1,lang2,lang3,
      objective:userinfo.objective,exp1:userinfo.exp1,exp2:userinfo.exp2,exp3:userinfo.exp3,internship1:userinfo.internship1,internship2:userinfo.internship2,internship3:userinfo.internship3,
      }});
    }
    const previous=()=>{
        navigator("/skills",{state:{username,email,contact,address,post,dist,profession,pin,image,
          clg_name,board,qual,per,pyear,stream,clg_name2,board2,qual2,per2,pyear2,stream2,schl_name3,board3,qual3,per3,pyear3,stream3,schl_name4,board4,qual4,per4,pyear4,stream4,
        }});
      }
      
  return (
    <div className='experience'>
        <Head title="Let's build your experience now!"></Head>
        <div className='content'>
    <div className='main_content'>
    <div className='head1'>
        <h1>Experience Info</h1>
        </div>
        
        <div className='form' onSubmit={fun}>
       <form>
       {/* /------------------------------------------------------Objective-----------------------------------------------/ */}
       
       
              <div className='box1 pt-2'>
              
           <div className='first'>
            <h1 style={{fontFamily:"'Roboto Condensed', sans-serif"}}>Objective*(Don't exceed more than 235 characters)</h1>
            
            <textarea row="15" column="10" maxLength="235" value={userinfo.objective} name="objective" onChange={onchange1} ref={inp1}></textarea>
            <p>{initial_obj}/235</p>
            </div>
           
            
        </div>
        {/* /-------------------------------------------------Work experience---------------------------------------------------/ */}
        
        <div className='inside_head'>
        <h1 className='pt-5'>Work Experience</h1>
        </div>
        <div className='box1 pt-5'>
            
           <div className='first'>
            
            <input type="text" maxLength="34" value={userinfo.exp1} name="exp1" ref={inp2} onChange={onchange1} placeholder="Don't exceed more than 34 characters"></input>
            <p>{initial_exp1}/34</p>
            </div>
            <div className='first'>
            <input type="text" maxLength="34" value={userinfo.exp2} name="exp2" ref={inp3} onChange={onchange1} placeholder="Don't exceed more than 34 characters"></input>
            <p>{initial_exp2}/34</p>
            </div>
            <div className='first'>
            <input type="text" maxLength="34" value={userinfo.exp3} name="exp3" ref={inp4} onChange={onchange1} placeholder="Don't exceed more than 34 characters"></input>
            <p>{initial_exp3}/34</p>
            </div>
        </div>
        {/* /------------------------------------------------Internships/Courses-----------------------------------------------/ */}
        <div className='inside_head'>
        <h1 className='pt-5'>Internship/Courses</h1>
        </div>
        <div className='box1 pt-5'>
            
           <div className='first'>
            <input type="text" maxLength="34" value={userinfo.internship1} name="internship1" ref={inp5} onChange={onchange1} placeholder="Don't exceed more than 34 characters"></input>
            <p>{initial_intern1}/34</p>
            </div>
            <div className='first'>
            <input type="text" maxLength="34" value={userinfo.internship2} name="internship2" ref={inp6} onChange={onchange1} placeholder="Don't exceed more than 34 characters"></input>
            <p>{initial_intern2}/34</p>
            </div>
            <div className='first'>
            <input type="text" maxLength="34" value={userinfo.internship3} name="internship3" ref={inp7} onChange={onchange1} placeholder="Don't exceed more than 34 characters"></input>
            <p>{initial_intern3}/34</p>
            </div>
        </div>
        <div className='box1 pt-3'>
        
        <button type="submit" className='btn_1' onClick={previous}>Previous</button>
      <button type="submit" className='btn_2'>Next</button>
          
        </div>
    </form>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Experience