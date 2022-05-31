import React, { useEffect, useRef, useState } from 'react'
import Head from './Head'
import './skills.css';
import {Link, useNavigate,useLocation} from 'react-router-dom';
const Skills = () => {
  
  const fun1=()=>{
    let data=JSON.parse(localStorage.getItem('skills'));
    if(data){
      return data.skill1;
    }
    else{
      return ""
    }
  }
  const fun2=()=>{
    let data=JSON.parse(localStorage.getItem('skills'));
    if(data){
      return data.skill2;
    }
    else{
      return ""
    }
  }
  const fun3=()=>{
    let data=JSON.parse(localStorage.getItem('skills'));
    if(data){
      return data.skill3;
    }
    else{
      return ""
    }
  }
  const fun4=()=>{
    let data=JSON.parse(localStorage.getItem('skills'));
    if(data){
      return data.lang1;
    }
    else{
      return ""
    }
  }
  const fun5=()=>{
    let data=JSON.parse(localStorage.getItem('skills'));
    if(data){
      return data.lang2;
    }
    else{
      return ""
    }
  }
  const fun6=()=>{
    let data=JSON.parse(localStorage.getItem('skills'));
    if(data){
      return data.lang3;
    }
    else{
      return ""
    }
  }
  const inp1=useRef(null);
  const inp2=useRef(null);
  const inp3=useRef(null);
  const inp4=useRef(null);
  const inp5=useRef(null);
  const inp6=useRef(null);

  const[initial_skill1,up_skill1]=useState(0);
  const[initial_skill2,up_skill2]=useState(0);
  const[initial_skill3,up_skill3]=useState(0);
  const[lang1,up_lang1]=useState(0);
  const[lang2,up_lang2]=useState(0);
  const[lang3,up_lang3]=useState(0);
  const[userinfo,setinfo]=useState({
    skill1:fun1(),
    skill2:fun2(),
    skill3:fun3(),
    lang1:fun4(),
    lang2:fun5(),
    lang3:fun6(),
  })
  let name,value;
  const onchange1=(e)=>{
    name=e.target.name;
    value=e.target.value;
    setinfo({...userinfo,[name]:value});
   up_skill1(inp1.current.value.length);
   up_skill2(inp2.current.value.length);
   up_skill3(inp3.current.value.length);
   up_lang1(inp4.current.value.length);
   up_lang2(inp5.current.value.length);
   up_lang3(inp6.current.value.length);
  }
  const navigator=useNavigate();
  const location = useLocation();
const{username,email,contact,address,post,dist,profession,pin,image,
clg_name,board,qual,per,pyear,stream,clg_name2,board2,qual2,per2,pyear2,stream2,schl_name3,board3,qual3,per3,pyear3,stream3,schl_name4,board4,qual4,per4,pyear4,stream4}=location.state;
const fun=()=>{
  navigator("/experience",{state:{username,email,contact,address,post,dist,profession,pin,image,
    clg_name,board,qual,per,pyear,stream,clg_name2,board2,qual2,per2,pyear2,stream2,schl_name3,board3,qual3,per3,pyear3,stream3,schl_name4,board4,qual4,per4,pyear4,stream4,
    skill1:userinfo.skill1,skill2:userinfo.skill2,skill3:userinfo.skill3,lang1:userinfo.lang1,lang2:userinfo.lang2,lang3:userinfo.lang3,
  }});
}
const previous=()=>{
  navigator("/education",{state:{username,email,contact,address,post,dist,profession,pin,image}});
}
useEffect(()=>{
  localStorage.setItem('skills',JSON.stringify(userinfo));
},[userinfo]);

  return (
    <div className='skills'>
        <Head title="Let's see what skills you have learned!"></Head>
        <div className='content'>
    <div className='main_content'>
    <div className='head1'>
        <h1>Skills Info</h1>
        </div>
        
        <div className='form' onSubmit={fun}>
       <form>
       {/* /------------------------------------------------------Skills-----------------------------------------------/ */}
       
       <div className='inside_head'>
        <h1 className='pt-3'>Skills</h1>
        </div>
              <div className='box1 pt-2'>
              <h1>1)</h1>
           <div className='first'>
            <h1>Skills*</h1>
            <input type="text" value={userinfo.skill1} name="skill1" onChange={onchange1} maxLength="33" ref={inp1} placeholder='separate skills using comma' required></input>
            <p>{initial_skill1}/33</p>
            </div>
            <div className='first'>
            <h1>Skills</h1>
            <input type="text" value={userinfo.skill2} name="skill2" onChange={onchange1} maxLength="33"  placeholder='separate skills using comma' ref={inp2}></input>
            <p>{initial_skill2}/33</p>
            </div>
            <div className='first'>
            <h1>Skills</h1>
            <input type="text" value={userinfo.skill3} name="skill3" onChange={onchange1} maxLength="33"  placeholder='separate skills using comma' ref={inp3}></input>
            <p>{initial_skill3}/33</p>
            </div>
            
        </div>
        {/* /-------------------------------------------------Languages Known---------------------------------------------------/ */}
        
         <div className='inside_head'>
        <h1 className='pt-5'>Languages Known</h1>
        </div>
        <div className='box1 pt-5'>
              <h1>2)</h1>
           <div className='first'>
            
            <input type="text" value={userinfo.lang1} name="lang1" onChange={onchange1} maxLength="33" ref={inp4} required></input>
            <p>{lang1}/33</p>
            </div>
            <div className='first'>
           
            <input type="text" value={userinfo.lang2} name="lang2" onChange={onchange1} maxLength="33" ref={inp5}></input>
            <p>{lang2}/33</p>
            </div>
            <div className='first'>
            
            <input type="text" value={userinfo.lang3} name="lang3" onChange={onchange1} maxLength="33" ref={inp6}></input>
            <p>{lang3}/33</p>
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

export default Skills