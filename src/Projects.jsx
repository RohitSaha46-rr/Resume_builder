import React, {  useRef, useState } from 'react'
import Head from './Head'
import './project.css';
import {Link, useLocation, useNavigate} from 'react-router-dom';
const Projects = () => {
  let data = JSON.parse(localStorage.getItem('projects'));
  const inp1=useRef(null);
  const inp2=useRef(null);
  const inp3=useRef(null);
  const inp4=useRef(null);
  const inp5=useRef(null);
  const inp6=useRef(null);
  const inp7=useRef(null);
  const inp8=useRef(null);
  const inp9=useRef(null);
 const[initial_pro1,up_pro1]=useState(0);
 const[initial_pro2,up_pro2]=useState(0);
 const[initial_pro3,up_pro3]=useState(0);
 const[initial_desc1,up_desc1]=useState(0);
 const[initial_desc2,up_desc2]=useState(0);
 const[initial_desc3,up_desc3]=useState(0);
 const[initial_code1,up_code1]=useState(0);
 const[initial_code2,up_code2]=useState(0);
 const[initial_code3,up_code3]=useState(0);
const location=useLocation();
const{username,email,contact,address,post,dist,profession,pin,image,
  clg_name,board,qual,per,pyear,stream,clg_name2,board2,qual2,per2,pyear2,stream2,schl_name3,board3,qual3,per3,pyear3,stream3,schl_name4,board4,qual4,per4,pyear4,stream4,
  skill1,skill2,skill3,lang1,lang2,lang3,
  objective,exp1,exp2,exp3,internship1,internship2,internship3
}=location.state;
  const[fullinfo,setinfo]=useState({
    project_name:data.project_name,
    desc:data.desc,
    code_link:data.code_link,
    project_name2:data.project_name2,
    desc2:data.desc2,
    code_link2:data.code_link2,
    project_name3:data.project_name3,
    desc3:data.desc3,
    code_link3:data.code_link3,
  })
  let name,value;
  const onchange=(e)=>{
    name=e.target.name;
    value=e.target.value;
    setinfo({...fullinfo,[name]:value});
    up_pro1(inp1.current.value.length);
    up_pro2(inp4.current.value.length);
    up_pro3(inp7.current.value.length);
    up_desc1(inp2.current.value.length);
    up_desc2(inp5.current.value.length);
    up_desc3(inp8.current.value.length);
    up_code1(inp3.current.value.length);
    up_code2(inp6.current.value.length);
    up_code3(inp9.current.value.length);
  }
  
  const navigator=useNavigate();
  const fun=()=>{
    navigator("/resume",{state:{username,email,contact,address,post,dist,profession,pin,image,
      clg_name,board,qual,per,pyear,stream,clg_name2,board2,qual2,per2,pyear2,stream2,schl_name3,board3,qual3,per3,pyear3,stream3,schl_name4,board4,qual4,per4,pyear4,stream4,
      skill1,skill2,skill3,lang1,lang2,lang3,
      objective,exp1,exp2,exp3,internship1,internship2,internship3,
      project_name:fullinfo.project_name,desc:fullinfo.desc,code_link:fullinfo.code_link,project_name2:fullinfo.project_name2,desc2:fullinfo.desc2,code_link2:fullinfo.code_link2,project_name3:fullinfo.project_name3,desc3:fullinfo.desc3,code_link3:fullinfo.code_link3,
    }});
  }
  const previous=()=>{
      navigator("/experience",{state:{username,email,contact,address,post,dist,profession,pin,image,
        clg_name,board,qual,per,pyear,stream,clg_name2,board2,qual2,per2,pyear2,stream2,schl_name3,board3,qual3,per3,pyear3,stream3,schl_name4,board4,qual4,per4,pyear4,stream4,
        skill1,skill2,skill3,lang1,lang2,lang3,}});
    }
    localStorage.setItem('projects',JSON.stringify(fullinfo));
  return (
    <div className='project'>
        <Head title="Give your top 3 projects"></Head>
        <div className='content'>
    <div className='main_content'>
    <div className='head1'>
        <h1>Project Info</h1>
        </div>
        
        <div className='form' onSubmit={fun}>
       <form>
       {/* /------------------------------------------------------Project 1-----------------------------------------------/ */}
       
       <div className='inside_head'>
        <h1 className='pt-3'>Project 1</h1>
        </div>
              <div className='box1 pt-2'>
              
              <div className='first'>
              <h1>Name</h1>
            <input type="text" maxLength="35"  onChange={onchange} placeholder="Don't exceed more than 35 characters" ref={inp1}  name='project_name' value={fullinfo.project_name} ></input>
            <p>{initial_pro1}/35</p>
            </div>
            <div className='first'>
              <h1>Description</h1>
            <input type="text" maxLength="120" onChange={onchange} placeholder="Don't exceed more than 120 characters" ref={inp2}  name='desc' value={fullinfo.desc}></input>
            <p>{initial_desc1}/120</p>
            </div>
            <div className='first'>
              <h1>Source Code Link</h1>
            <input type="text" maxLength="120" onChange={onchange} ref={inp3} placeholder="Don't exceed more than 120 characters" name='code_link' value={fullinfo.code_link}></input>
            <p>{initial_code1}/120</p>
            </div>
           
            
        </div>
        {/* /-------------------------------------------------project 2---------------------------------------------------/ */}
        
        <div className='inside_head'>
        <h1 className='pt-3'>Project 2</h1>
        </div>
              <div className='box1 pt-2'>
              
              <div className='first'>
              <h1>Name</h1>
            <input type="text" maxLength="35" onChange={onchange} ref={inp4} value={fullinfo.project_name2} name="project_name2" placeholder="Don't exceed more than 35 characters"></input>
            <p>{initial_pro2}/35</p>
            </div>
            <div className='first'>
              <h1>Description</h1>
            <input type="text" maxLength="120" onChange={onchange} value={fullinfo.desc2} ref={inp5} name="desc2" placeholder="Don't exceed more than 120 characters"></input>
            <p>{initial_desc2}/120</p>
            </div>
            <div className='first'>
              <h1>Source Code Link</h1>
            <input type="text" maxLength="120" onChange={onchange} value={fullinfo.code_link2} ref={inp6} name="code_link2" placeholder="Don't exceed more than 120 characters"></input>
            <p>{initial_code2}/120</p>
            </div>
           
            
        </div>
        {/* /------------------------------------------------Project 3-----------------------------------------------/ */}
        <div className='inside_head'>
        <h1 className='pt-3'>Project 3</h1>
        </div>
              <div className='box1 pt-2'>
              
              <div className='first'>
              <h1>Name</h1>
            <input type="text" maxLength="35"  onChange={onchange} ref={inp7} value={fullinfo.project_name3} name="project_name3" placeholder="Don't exceed more than 35 characters"></input>
            <p>{initial_pro3}/35</p>
            </div>
            <div className='first'>
              <h1>Description</h1>
            <input type="text" maxLength="120"  onChange={onchange} value={fullinfo.desc3} ref={inp8} name="desc3" placeholder="Don't exceed more than 120 characters"></input>
            <p>{initial_desc3}/120</p>
            </div>
            <div className='first'>
              <h1>Source Code Link</h1>
            <input type="text" maxLength="120"  onChange={onchange} value={fullinfo.code_link3} ref={inp9} name="code_link3" placeholder="Don't exceed more than 120 characters"></input>
            <p>{initial_code3}/120</p>
            </div>
           
            
        </div>
        <div className='box1 pt-3'>
        
        <button type="submit" className='btn_1' onClick={previous}>Previous</button>
      <button type="submit" className='btn_2' >Next</button>
          
        </div>
    </form>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Projects