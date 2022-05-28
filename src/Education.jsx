import React, { useRef, useState } from 'react'
import {Link, Navigate, useNavigate} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import './education.css';
import Head from './Head';
const Education = () => {
  let data=JSON.parse(localStorage.getItem('education'));
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
    clg_name:data.clg_name,
    board:data.board,
    qual:data.qual,
    per:data.per,
    pyear:data.pyear,
    stream:data.stream,
    clg_name2:data.clg_name2,
    board2:data.board2,
    qual2:data.qual2,
    per2:data.per2,
    pyear2:data.pyear2,
    stream2:data.stream2,
    schl_name3:data.schl_name3,
    board3:data.board3,
    qual3:data.qual3,
    per3:data.per3,
    pyear3:data.pyear3,
    stream3:data.stream3,
    schl_name4:data.schl_name4,
    board4:data.board4,
    qual4:data.qual4,
    per4:data.per4,
    pyear4:data.pyear4,
    stream4:data.stream4,
  })
  let name,value;
  const onchange1=(e)=>{
    name=e.target.name;
    value=e.target.value;
    setinfo({...userinfo,[name]:value});
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
    clg_name:userinfo.clg_name,board:userinfo.board,qual:userinfo.qual,per:userinfo.per,pyear:userinfo.pyear,stream:userinfo.stream,
    clg_name2:userinfo.clg_name2,board2:userinfo.board2,qual2:userinfo.qual2,per2:userinfo.per2,pyear2:userinfo.pyear2,stream2:userinfo.stream2,
    schl_name3:userinfo.schl_name3,board3:userinfo.board3,qual3:userinfo.qual3,per3:userinfo.per3,pyear3:userinfo.pyear3,stream3:userinfo.stream3,
    schl_name4:userinfo.schl_name4,board4:userinfo.board4,qual4:userinfo.qual4,per4:userinfo.per4,pyear4:userinfo.pyear4,stream4:userinfo.stream4,}});
}
const previous=()=>{
  navigator("/personal_details");
}

localStorage.setItem('education',JSON.stringify(userinfo));
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
            <input type="text" value={userinfo.clg_name} name="clg_name" onChange={onchange1} ></input>
            </div>
            <div className='first'>
            <h1>Board/University</h1>
            <input type="text" value={userinfo.board} name="board" onChange={onchange1}  placeholder='write in short form' maxLength="15" ref={inp}></input>
            <p>{intial_board}/15</p>
            </div>
            <div className='first'>
            <h1>Qualification</h1>
            <input type="text" value={userinfo.qual} name="qual" onChange={onchange1} placeholder='write in short form,eg-M.tech/M.Sc/MCA' maxLength="10" ref={inp1}></input>
            <p>{intial_qual}/10</p>
            </div>
            <div className='first'>
            <h1>Per/cgpa</h1>
            <input type="tel" value={userinfo.per} name="per" onChange={onchange1}  maxLength="8" ref={inp2}></input>
            <p>{intial_per}/8</p>
            </div>
        </div>
        <div className='box1 pt-1'>
          <div className='first'>
          <h1>Passing Year</h1>
            <input type="text" value={userinfo.pyear} name="pyear" onChange={onchange1} maxLength="5" ref={inp3}></input>
            <p>{intial_pyear}/5</p>
          </div>
          <div className='first'>
          <h1>Stream</h1>
            <input type="text" value={userinfo.stream} name="stream" onChange={onchange1} maxLength="10" placeholder='Write in short form,eg-cse/ece' ref={inp4}></input>
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
            <input type="text" value={userinfo.clg_name2} name="clg_name2" onChange={onchange1} ></input>
            </div>
            <div className='first'>
            <h1>Board/University</h1>
            <input type="text" value={userinfo.board2} name="board2" onChange={onchange1} placeholder='write in short form'  maxLength="15" ref={inp5}></input>
            <p>{intial_board2}/15</p>
            </div>
            <div className='first'>
            <h1>Qualification</h1>
            <input type="text" value={userinfo.qual2} name="qual2" onChange={onchange1} placeholder='write in short form,eg-B.tech/B.Sc/BCA' maxLength="10" ref={inp6}></input>
            <p>{intial_qual2}/10</p>
            </div>
            <div className='first'>
            <h1>Per/cgpa</h1>
            <input type="tel" value={userinfo.per2} name="per2" onChange={onchange1}  maxLength="8" ref={inp7}></input>
            <p>{intial_per2}/8</p>
            </div>
        </div>
        <div className='box1 pt-1'>
          <div className='first'>
          <h1>Passing Year</h1>
            <input type="tel" value={userinfo.pyear2} name="pyear2" onChange={onchange1} maxLength="5" ref={inp8}></input>
            <p>{intial_pyear2}/5</p>
          </div>
          <div className='first'>
          <h1>Stream</h1>
            <input type="text" value={userinfo.stream2} name="stream2" onChange={onchange1} placeholder='Write in short form,eg-cse/ece' maxLength="10" ref={inp9}></input>
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
            <input type="text" value={userinfo.schl_name3} name="schl_name3" onChange={onchange1}  required></input>
            </div>
            <div className='first'>
            <h1>Board*</h1>
            <input type="text" value={userinfo.board3} name="board3" onChange={onchange1}  placeholder='write in short form'  maxLength="15" required ref={inp10}></input>
            <p>{intial_board3}/15</p>
            </div>
            <div className='first'>
            <h1>Qualification*</h1>
            <input type="text" value={userinfo.qual3} name="qual3" onChange={onchange1}  placeholder='eg,12th' required maxLength="10" ref={inp11}></input>
            <p>{intial_qual3}/10</p>
            </div>
            <div className='first'>
            <h1>Per/cgpa*</h1>
            <input type="tel" value={userinfo.per3} name="per3" onChange={onchange1}  required maxLength="10" ref={inp12}></input>
            <p>{intial_per3}/10</p>
            </div>
        </div>
        <div className='box1 pt-1'>
          <div className='first'>
          <h1>Passing Year*</h1>
            <input type="tel" value={userinfo.pyear3} name="pyear3" onChange={onchange1}  required maxLength="5" ref={inp13}></input>
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
            <input type="text" value={userinfo.schl_name4} name="schl_name4" onChange={onchange1}  required></input>
            </div>
            <div className='first'>
            <h1>Board*</h1>
            <input type="text" value={userinfo.board4} name="board4" onChange={onchange1} ref={inp15}  placeholder='write in short form'  maxLength="15"  required ></input>
            <p>{intial_board4}/15</p>
            </div>
            <div className='first'>
            <h1>Qualification*</h1>
            <input type="text" value={userinfo.qual4} name="qual4" onChange={onchange1}  placeholder='eg,10th' required maxLength="10" ref={inp16}></input>
            <p>{intial_qual4}/10</p>
            </div>
            <div className='first'>
            <h1>Per/cgpa*</h1>
            <input type="tel" value={userinfo.per4} name="per4" onChange={onchange1}  required maxLength="10" ref={inp17}></input>
            <p>{intial_per4}/10</p>
            </div>
        </div>
        <div className='box1 pt-1'>
          <div className='first'>
          <h1>Passing Year*</h1>
            <input type="tel" value={userinfo.pyear4} name="pyear4" onChange={onchange1}  required maxLength="5" ref={inp18}></input>
            <p>{intial_pyear4}/5</p>
          </div>
          <div className='first'>
          <h1>Stream</h1>
            <input type="text" value={userinfo.stream4} name="stream4" onChange={onchange1}  maxLength="20" ref={inp19}></input>
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