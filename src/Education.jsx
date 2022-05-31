import React, { useEffect, useRef, useState } from 'react'
import {Link, Navigate, useNavigate} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import './education.css';
import Head from './Head';
const Education = () => {
  const fun2=()=>{
    let data=JSON.parse(localStorage.getItem('education'));
    if(data){
      return data.clg_name;
    }
    else{
      return "";
    }
  }
  const fun3=()=>{
    let data=JSON.parse(localStorage.getItem('education'));
    if(data){
      return data.board;
    }
    else{
      return "";
    }
  }
  const fun4=()=>{
    let data=JSON.parse(localStorage.getItem('education'));
    if(data){
      return data.qual;
    }
    else{
      return "";
    }
  }
  const fun5=()=>{
    let data=JSON.parse(localStorage.getItem('education'));
    if(data){
      return data.per;
    }
    else{
      return "";
    }
  }
  const fun6=()=>{
    let data=JSON.parse(localStorage.getItem('education'));
    if(data){
      return data.pyear;
    }
    else{
      return "";
    }
  }
  const fun7=()=>{
    let data=JSON.parse(localStorage.getItem('education'));
    if(data){
      return data.stream;
    }
    else{
      return "";
    }
  }
  const fun8=()=>{
    let data=JSON.parse(localStorage.getItem('education'));
    if(data){
      return data.clg_name2;
    }
    else{
      return "";
    }
  }
  const fun9=()=>{
    let data=JSON.parse(localStorage.getItem('education'));
    if(data){
      return data.board2;
    }
    else{
      return "";
    }
  }
  const fun10=()=>{
    let data=JSON.parse(localStorage.getItem('education'));
    if(data){
      return data.qual2;
    }
    else{
      return "";
    }
  }
  const fun11=()=>{
    let data=JSON.parse(localStorage.getItem('education'));
    if(data){
      return data.per2;
    }
    else{
      return "";
    }
  }
  const fun12=()=>{
    let data=JSON.parse(localStorage.getItem('education'));
    if(data){
      return data.pyear2;
    }
    else{
      return "";
    }
  }
  const fun13=()=>{
    let data=JSON.parse(localStorage.getItem('education'));
    if(data){
      return data.stream2;
    }
    else{
      return "";
    }
  }
  const fun14=()=>{
    let data=JSON.parse(localStorage.getItem('education'));
    if(data){
      return data.schl_name3;
    }
    else{
      return "";
    }
  }
  const fun15=()=>{
    let data=JSON.parse(localStorage.getItem('education'));
    if(data){
      return data.board3;
    }
    else{
      return "";
    }
  }
  const fun16=()=>{
    let data=JSON.parse(localStorage.getItem('education'));
    if(data){
      return data.qual3;
    }
    else{
      return "";
    }
  }
  const fun17=()=>{
    let data=JSON.parse(localStorage.getItem('education'));
    if(data){
      return data.per3;
    }
    else{
      return "";
    }
  }
  const fun18=()=>{
    let data=JSON.parse(localStorage.getItem('education'));
    if(data){
      return data.pyear3;
    }
    else{
      return "";
    }
  }
  const fun19=()=>{
    let data=JSON.parse(localStorage.getItem('education'));
    if(data){
      return data.stream3;
    }
    else{
      return "";
    }
  }
  const fun20=()=>{
    let data=JSON.parse(localStorage.getItem('education'));
    if(data){
      return data.schl_name4;
    }
    else{
      return "";
    }
  }
  const fun21=()=>{
    let data=JSON.parse(localStorage.getItem('education'));
    if(data){
      return data.board4;
    }
    else{
      return "";
    }
  }
  const fun22=()=>{
    let data=JSON.parse(localStorage.getItem('education'));
    if(data){
      return data.qual4;
    }
    else{
      return "";
    }
  }
  const fun23=()=>{
    let data=JSON.parse(localStorage.getItem('education'));
    if(data){
      return data.per4;
    }
    else{
      return "";
    }
  }
  const fun24=()=>{
    let data=JSON.parse(localStorage.getItem('education'));
    if(data){
      return data.pyear4;
    }
    else{
      return "";
    }
  }
  const fun25=()=>{
    let data=JSON.parse(localStorage.getItem('education'));
    if(data){
      return data.stream4;
    }
    else{
      return "";
    }
  }
  const inp=useRef(null);
  const inp1=useRef(null);
  const inp2=useRef(null);
  const inp3=useRef(null);
  const inp4=useRef(null);
  const inp5=useRef(null);
  const inp6=useRef(null);
  const inp7=useRef(null);
  const inp8=useRef(null);
  const inp9=useRef(null);
  const inp10=useRef(null);
  const inp11=useRef(null);
  const inp12=useRef(null);
  const inp13=useRef(null);
  const inp14=useRef(null);
  const inp15=useRef(null);
  const inp16=useRef(null);
  const inp17=useRef(null);
  const inp18=useRef(null);
  const inp19=useRef(null);
  const[intial_board,up_board]=useState(0);
  const[intial_qual,up_qual]=useState(0);
  const[intial_per,up_per]=useState(0);
  const[intial_pyear,up_pyear]=useState(0);
  const[intial_stream,up_stream]=useState(0);
  const[intial_board2,up_board2]=useState(0);
  const[intial_qual2,up_qual2]=useState(0);
  const[intial_per2,up_per2]=useState(0);
  const[intial_pyear2,up_pyear2]=useState(0);
  const[intial_stream2,up_stream2]=useState(0);
  const[intial_board3,up_board3]=useState(0);
  const[intial_qual3,up_qual3]=useState(0);
  const[intial_per3,up_per3]=useState(0);
  const[intial_pyear3,up_pyear3]=useState(0);
  const[intial_stream3,up_stream3]=useState(0);
  const[intial_board4,up_board4]=useState(0);
  const[intial_qual4,up_qual4]=useState(0);
  const[intial_per4,up_per4]=useState(0);
  const[intial_pyear4,up_pyear4]=useState(0);
  const[intial_stream4,up_stream4]=useState(0);
  const[userinfo,setinfo]=useState({
    clg_name:"",
    board:"",
    qual:"",
    per:"",
    pyear:"",
    stream:"",
    clg_name2:"",
    board2:"",
    qual2:"",
    per2:"",
    pyear2:"",
    stream2:"",
    schl_name3:"",
    board3:"",
    qual3:"",
    per3:"",
    pyear3:"",
    stream3:"",
    schl_name4:"",
    board4:"",
    qual4:"",
    per4:"",
    pyear4:"",
    stream4:"",
  })
  const[local_info,up_info]=useState({
  clg_name:fun2(),
  board:fun3(),
  qual:fun4(),
  per:fun5(),
  pyear:fun6(),
  stream:fun7(),
  clg_name2:fun8(),
  board2:fun9(),
  qual2:fun10(),
  per2:fun11(),
  pyear2:fun12(),
  stream2:fun13(),
  schl_name3:fun14(),
  board3:fun15(),
  qual3:fun16(),
  per3:fun17(),
  pyear3:fun18(),
  stream3:fun19(),
  schl_name4:fun20(),
  board4:fun21(),
  qual4:fun22(),
  per4:fun23(),
  pyear4:fun24(),
  stream4:fun25(),
  })
  let name,value;
  const onchange1=(e)=>{
    name=e.target.name;
    value=e.target.value;
    setinfo({...userinfo,[name]:value});
    up_info({...local_info,[name]:value});
    up_board(inp.current.value.length);
    up_qual(inp1.current.value.length);
    up_per(inp2.current.value.length);
    up_pyear(inp3.current.value.length);
    up_stream(inp4.current.value.length);
    up_board2(inp5.current.value.length);
    up_qual2(inp6.current.value.length);
    up_per2(inp7.current.value.length);
    up_pyear2(inp8.current.value.length);
    up_stream2(inp9.current.value.length);
    up_board3(inp10.current.value.length);
    up_qual3(inp11.current.value.length);
    up_per3(inp12.current.value.length);
    up_pyear3(inp13.current.value.length);
    up_stream3(inp14.current.value.length);
    up_board4(inp15.current.value.length);
    up_qual4(inp16.current.value.length);
    up_per4(inp17.current.value.length);
    up_pyear4(inp18.current.value.length);
    up_stream4(inp19.current.value.length);

  }
const navigator=useNavigate();
const location = useLocation();
const{username,email,contact,address,post,dist,profession,pin,image}=location.state;

const fun=()=>{
  navigator("/skills",{state:{username,email,contact,address,post,dist,profession,pin,image,
    clg_name:local_info.clg_name,board:local_info.board,qual:local_info.qual,per:local_info.per,pyear:local_info.pyear,stream:local_info.stream,
    clg_name2:local_info.clg_name2,board2:local_info.board2,qual2:local_info.qual2,per2:local_info.per2,pyear2:local_info.pyear2,stream2:local_info.stream2,
    schl_name3:local_info.schl_name3,board3:local_info.board3,qual3:local_info.qual3,per3:local_info.per3,pyear3:local_info.pyear3,stream3:local_info.stream3,
    schl_name4:local_info.schl_name4,board4:local_info.board4,qual4:local_info.qual4,per4:local_info.per4,pyear4:local_info.pyear4,stream4:local_info.stream4,}});
}
const previous=()=>{
  navigator("/personal_details");
}
useEffect(()=>{
  localStorage.setItem('education',JSON.stringify(local_info));}
  ,[userinfo]);

  return (
    <div className='education'>
    <Head title="Let's now dig into your qualification skills!"></Head>
   
    <div className='content'>
    <div className='main_content'>
    <div className='head1'>
        <h1>Education Info</h1>
        </div>
        
        <div className='form' onSubmit={fun}>
       <form>
       {/* /------------------------------------------------------post graduation-----------------------------------------------/ */}
       
       <div className='inside_head'>
        <h1>Post graduation</h1>
        </div>
              <div className='box1 pt-3'>
              <h1>1)</h1>
           <div className='first'>
            <h1>College/University Name</h1>
            <input type="text" value={local_info.clg_name} name="clg_name" onChange={onchange1} ></input>
            </div>
            <div className='first'>
            <h1>Board/University</h1>
            <input type="text" value={local_info.board} name="board" onChange={onchange1}  placeholder='write in short form' maxLength="15" ref={inp}></input>
            <p>{intial_board}/15</p>
            </div>
            <div className='first'>
            <h1>Qualification</h1>
            <input type="text" value={local_info.qual} name="qual" onChange={onchange1} placeholder='write in short form,eg-M.tech/M.Sc/MCA' maxLength="10" ref={inp1}></input>
            <p>{intial_qual}/10</p>
            </div>
            <div className='first'>
            <h1>Per/cgpa</h1>
            <input type="tel" value={local_info.per} name="per" onChange={onchange1}  maxLength="8" ref={inp2}></input>
            <p>{intial_per}/8</p>
            </div>
        </div>
        <div className='box1 pt-1'>
          <div className='first'>
          <h1>Passing Year</h1>
            <input type="text" value={local_info.pyear} name="pyear" onChange={onchange1} maxLength="5" ref={inp3}></input>
            <p>{intial_pyear}/5</p>
          </div>
          <div className='first'>
          <h1>Stream</h1>
            <input type="text" value={local_info.stream} name="stream" onChange={onchange1} maxLength="10" placeholder='Write in short form,eg-cse/ece' ref={inp4}></input>
            <p>{intial_stream}/10</p>
          </div>
        </div>
        {/* /----------------------------------------------------graduation---------------------------------------------------------/
         */}
         <div className='inside_head'>
         
        <h1 className='pt-5'>Graduation</h1>
        </div>
              <div className='box1 pt-5'>
              <h1>2)</h1>
           <div className='first'>
            <h1>College/University Name</h1>
            <input type="text" value={local_info.clg_name2} name="clg_name2" onChange={onchange1} ></input>
            </div>
            <div className='first'>
            <h1>Board/University</h1>
            <input type="text" value={local_info.board2} name="board2" onChange={onchange1} placeholder='write in short form'  maxLength="15" ref={inp5}></input>
            <p>{intial_board2}/15</p>
            </div>
            <div className='first'>
            <h1>Qualification</h1>
            <input type="text" value={local_info.qual2} name="qual2" onChange={onchange1} placeholder='write in short form,eg-B.tech/B.Sc/BCA' maxLength="10" ref={inp6}></input>
            <p>{intial_qual2}/10</p>
            </div>
            <div className='first'>
            <h1>Per/cgpa</h1>
            <input type="tel" value={local_info.per2} name="per2" onChange={onchange1}  maxLength="8" ref={inp7}></input>
            <p>{intial_per2}/8</p>
            </div>
        </div>
        <div className='box1 pt-1'>
          <div className='first'>
          <h1>Passing Year</h1>
            <input type="tel" value={local_info.pyear2} name="pyear2" onChange={onchange1} maxLength="5" ref={inp8}></input>
            <p>{intial_pyear2}/5</p>
          </div>
          <div className='first'>
          <h1>Stream</h1>
            <input type="text" value={local_info.stream2} name="stream2" onChange={onchange1} placeholder='Write in short form,eg-cse/ece' maxLength="10" ref={inp9}></input>
            <p>{intial_stream2}/10</p>
          </div>
        </div>
       
       {/* /---------------------------------------------------------12th---------------------------------------------------------/ */}
       <div className='inside_head'>
        <h1 className='pt-5'>Higher Secondary</h1>
        </div>
              <div className='box1 pt-5'>
              <h1>3)</h1>
           <div className='first'>
            <h1>School Name*</h1>
            <input type="text" value={local_info.schl_name3} name="schl_name3" onChange={onchange1}  required></input>
            </div>
            <div className='first'>
            <h1>Board*</h1>
            <input type="text" value={local_info.board3} name="board3" onChange={onchange1}  placeholder='write in short form'  maxLength="15" required ref={inp10}></input>
            <p>{intial_board3}/15</p>
            </div>
            <div className='first'>
            <h1>Qualification*</h1>
            <input type="text" value={local_info.qual3} name="qual3" onChange={onchange1}  placeholder='eg,12th' required maxLength="10" ref={inp11}></input>
            <p>{intial_qual3}/10</p>
            </div>
            <div className='first'>
            <h1>Per/cgpa*</h1>
            <input type="tel" value={local_info.per3} name="per3" onChange={onchange1}  required maxLength="10" ref={inp12}></input>
            <p>{intial_per3}/10</p>
            </div>
        </div>
        <div className='box1 pt-1'>
          <div className='first'>
          <h1>Passing Year*</h1>
            <input type="tel" value={local_info.pyear3} name="pyear3" onChange={onchange1}  required maxLength="5" ref={inp13}></input>
            <p>{intial_pyear3}/5</p>
          </div>
          <div className='first'>
          <h1>Stream</h1>
            <input type="text" value={userinfo.stream3} name="stream3" onChange={onchange1}   maxLength="20" ref={inp14}></input>
            <p>{intial_stream3}/20</p>
          </div>
        </div>

        {/* /---------------------------------------------------------------------10th-----------------------------------------------/ */}
        <div className='inside_head'>
        <h1 className='pt-5'>Matrix</h1>
        </div>
              <div className='box1 pt-5'>
              <h1>4)</h1>
           <div className='first'>
            <h1>School Name*</h1>
            <input type="text" value={local_info.schl_name4} name="schl_name4" onChange={onchange1}  required></input>
            </div>
            <div className='first'>
            <h1>Board*</h1>
            <input type="text" value={local_info.board4} name="board4" onChange={onchange1} ref={inp15}  placeholder='write in short form'  maxLength="15"  required ></input>
            <p>{intial_board4}/15</p>
            </div>
            <div className='first'>
            <h1>Qualification*</h1>
            <input type="text" value={local_info.qual4} name="qual4" onChange={onchange1}  placeholder='eg,10th' required maxLength="10" ref={inp16}></input>
            <p>{intial_qual4}/10</p>
            </div>
            <div className='first'>
            <h1>Per/cgpa*</h1>
            <input type="tel" value={local_info.per4} name="per4" onChange={onchange1}  required maxLength="10" ref={inp17}></input>
            <p>{intial_per4}/10</p>
            </div>
        </div>
        <div className='box1 pt-1'>
          <div className='first'>
          <h1>Passing Year*</h1>
            <input type="tel" value={local_info.pyear4} name="pyear4" onChange={onchange1}  required maxLength="5" ref={inp18}></input>
            <p>{intial_pyear4}/5</p>
          </div>
          <div className='first'>
          <h1>Stream</h1>
            <input type="text" value={local_info.stream4} name="stream4" onChange={onchange1}  maxLength="20" ref={inp19}></input>
            <p>{intial_stream4}/20</p>
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

export default Education