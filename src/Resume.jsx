import React, { useEffect, useRef } from 'react'
import photo from './images/photo.jpg';
import './resume.css';
import Pdf from "react-to-pdf";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight,faCircle } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useNavigate } from 'react-router-dom';


const ref = React.createRef();

const Resume = () => {
  const navigator=useNavigate();
  const cssStyle={
    display:"none",
    paddingTop:"10px"
  };
  const cssStyle1={
    display:"none",
    paddingTop:"10px"
  };
  const cssStyle2={
    display:"none",
    paddingTop:"10px"
  };
  const cssStyle3={
    display:"none",
    paddingTop:"10px"
  };
  const cssStyle4={
    display:"none",
    paddingTop:"10px"
  };
  const cssStyle5={
    display:"none",
    paddingTop:"10px"
  };
 
  const cssStyle6={
    display:"none"
  }
  const cssStyle7={
    display:"none"
  }
  const cssStyle8={
    display:"none"
  }
  const cssStyle9={
    display:"none"
  }
  const cssStyle10={
    display:"none",
    paddingTop:"10px"
  }
  const cssStyle11={
    display:"none"
  }
  const cssStyle12={
    display:"none"
  }
  const cssStyle13={
    display:"none",
    paddingTop:"10px"
  }
  const cssStyle14={
    display:"none"
  }
  const cssStyle15={
    display:"none"
  }
  const cssStyle16={
    display:"none",
    paddingTop:"10px"
  }
  const cssStyle17={
    display:"none"
  }
  const cssStyle18={
    display:"none"
  }


  const location=useLocation();
  const{username,email,contact,address,post,dist,profession,pin,image,
    clg_name,board,qual,per,pyear,stream,clg_name2,board2,qual2,per2,pyear2,stream2,schl_name3,board3,qual3,per3,pyear3,stream3,schl_name4,board4,qual4,per4,pyear4,stream4,
    skill1,skill2,skill3,lang1,lang2,lang3,
    objective,exp1,exp2,exp3,internship1,internship2,internship3,
    project_name,desc,code_link,project_name2,desc2,code_link2,project_name3,desc3,code_link3,}=location.state;
  const previous=()=>{
    navigator("/projects",{state:{username,email,contact,address,post,dist,profession,pin,image,
      clg_name,board,qual,per,pyear,stream,clg_name2,board2,qual2,per2,pyear2,stream2,schl_name3,board3,qual3,per3,pyear3,stream3,schl_name4,board4,qual4,per4,pyear4,stream4,
      skill1,skill2,skill3,lang1,lang2,lang3,
      objective,exp1,exp2,exp3,internship1,internship2,internship3,}})
  }
  if(exp1.length>=1){
    cssStyle.display="block";
    }
    if(exp2.length>=1){
      cssStyle1.display="block";
      }
      if(exp3.length>=1){
        cssStyle2.display="block";
        }

    if(internship1.length>=1){
      cssStyle3.display="block";
    }
    if(internship2.length>=1){
      cssStyle4.display="block";
    }
    if(internship3.length>=1){
      cssStyle5.display="block";
    }
    if(qual.length>=1|| pyear.length>=1 || per.length>=1 || board.length>=1){
      cssStyle6.display="flex";
      
    }
    if( clg_name.length>=1|| qual.length>=1|| stream.length>=1){
      cssStyle8.display="block";
    }
    if( clg_name2.length>=1|| qual2.length>=1|| stream2.length>=1){
      cssStyle9.display="block";
    }
    if(qual2.length>=1 || pyear2.length>=1 || per2.length>=1 || board2.length>=1 ){
      cssStyle7.display="flex";
      
    }
 if(project_name.length>=1){
   cssStyle10.display="block";
 
 }
 if(project_name2.length>=1){
  cssStyle13.display="block";

}
if(project_name3.length>=1){
  cssStyle16.display="block";

}
 if(desc.length>=1){
  cssStyle11.display="block";

 }
 if(desc2.length>=1){
  cssStyle14.display="block";

 }
 if(desc3.length>=1){
  cssStyle17.display="block";

 }
 if(code_link.length>=1){
 cssStyle12.display="block";
 }
 if(code_link2.length>=1){
  cssStyle15.display="block";
  }
  if(code_link3.length>=1){
    cssStyle18.display="block";
    }
    return (
    <>
    <div className='resume' ref={ref}>
        <div className='left'>
        <div className='photo'>
           <p>{username}</p>
           <img src={image}></img>
           <h2 style={{color:"#03a9f4"}}>{profession}</h2>
           </div>
           <div className='details'>
           <h2>Contact</h2>
           <p style={{paddingTop:"10px"}}><span style={{fontWeight:"bolder",color:"#03a9f4"}}>EMAIL</span>: {email}</p>
           <p><span style={{fontWeight:"bolder",color:"#03a9f4"}}>No</span>.- {contact}</p>
           <h2>Personal details</h2>
        
           <p><span style={{fontWeight:"bolder",color:"#03a9f4"}}>ADDRESS</span>: {address}</p>
           <p><span style={{fontWeight:"bolder",color:"#03a9f4"}}>POST</span>: {post}</p>
           <p><span style={{fontWeight:"bolder",color:"#03a9f4"}}>DIST</span>: {dist}</p>
           <p><span style={{fontWeight:"bolder",color:"#03a9f4"}}>PIN</span>: {pin}</p>
          
           <h2>Skills</h2>
           <p> {skill1}</p>
           <p> {skill2}</p>
           <p> {skill3}</p>
           <h2>Languages Known</h2>
           <p style={{paddingTop:"10px"}}>{lang1}</p>
           <p>{lang2}</p>
           <p>{lang3}</p>
           <h2>Work Experience</h2>
           <div className='primary'>
           <i className="fa fa-circle icon" aria-hidden="true" style={cssStyle}></i>
           <p >{exp1}</p>
          </div>
          <div className='primary'>
          <i className="fa fa-circle icon" aria-hidden="true" style={cssStyle1}></i>
           <p >{exp2}</p>
          </div>
          <div className='primary'>
          <i className="fa fa-circle icon" aria-hidden="true"  style={cssStyle2}></i>
           <p >{exp3}</p>
          </div>
           <h2>Courses/Internships</h2>
           
           <div className='primary'>
           <i className="fa fa-circle icon" aria-hidden="true"  style={cssStyle3}></i>
           <p >{internship1}</p>
          </div>
          <div className='primary'>
          <i className="fa fa-circle icon" aria-hidden="true"  style={cssStyle4}></i>
           <p >{internship2}</p>
          </div>
          <div className='primary'>
          <i className="fa fa-circle icon" aria-hidden="true"  style={cssStyle5}></i>
           <p >{internship3}</p>
          </div>
           </div>
        </div>
        <div className='right'>
        <h2>OBJECTIVE</h2>
        <p>{objective}</p>
        <h2>EDUCATION</h2>
        <div className='education'>
        <div className='box'>
          <div className='info1'>
            <h4>Qualification</h4>
          </div>
          <div className='info2'>
            <h4>Passing Year</h4>
          </div>
          <div className='info3'>
            <h4>Board/University</h4>
          </div>
          <div className='info4'>
            <h4>Per/cgpa</h4>
          </div>
        </div>
        <div className='box' style={cssStyle6}>
          <div className='info1' >
            <p >{qual}</p>
          </div>
          <div className='info2'>
            <p >{pyear}</p>
          </div>
          <div className='info3'>
            <p >{board}</p>
          </div>
          <div className='info4' >
            <p >{per}</p>
          </div>
        </div>
        <div className='box' style={cssStyle7}>
          <div className='info1'>
            <p>{qual2}</p>
          </div>
          <div className='info2'>
            <p>{pyear2}</p>
          </div>
          <div className='info3'>
            <p>{board2}</p>
          </div>
          <div className='info4'>
            <p>{per2}</p>
          </div>
        </div>
        <div className='box'>
          <div className='info1'>
            <p>{qual3}</p>
          </div>
          <div className='info2'>
            <p>{pyear3}</p>
          </div>
          <div className='info3'>
            <p>{board3}</p>
          </div>
          <div className='info4'>
            <p>{per3}</p>
          </div>
        </div>
        <div className='box'>
          <div className='info1'>
            <p>{qual4}</p>
          </div>
          <div className='info2'>
            <p>{pyear4}</p>
          </div>
          <div className='info3'>
            <p>{board4}</p>
          </div>
          <div className='info4'>
            <p>{per4}</p>
          </div>
        </div>
        <div className='primary'>
        <i className="fa fa-circle icon" aria-hidden="true" style={cssStyle8}></i>
        <p>{qual}  {stream}  {clg_name}</p>
        </div>
        <div className='primary'>
        <i className="fa fa-circle icon" aria-hidden="true" style={cssStyle9}></i>
        <p >{qual2} {stream2} {clg_name2}</p>
        </div>
        <div className='primary' style={{marginTop:"5px"}}>
        <i className="fa fa-circle icon" aria-hidden="true"></i>
        <p >{qual3}  {schl_name3}</p>
        
        </div>
        <div className='primary' style={{marginTop:"5px"}}>
        <i className="fa fa-circle icon" aria-hidden="true"></i>
        <p >{qual4}  {schl_name4}</p>
        
        </div>
       
        
       
      
        
        </div>
        
       <h2 className='mt-5'>Projects</h2>
       <p style={cssStyle10}><span style={{fontWeight:"bolder",color:"#03a9f4"}}>1)NAME</span>: {project_name}</p>
       <p style={cssStyle11}><span style={{fontWeight:"bolder",color:"#03a9f4"}}>DESC</span>: {desc}</p>
       <p style={cssStyle12}><span style={{fontWeight:"bolder",color:"#03a9f4"}}>SOURCE CODE LINK</span>: {code_link}</p>
       
      
       <p style={cssStyle13}><span style={{fontWeight:"bolder",color:"#03a9f4"}}>2)NAME</span>: {project_name2}</p>
       <p style={cssStyle14}><span style={{fontWeight:"bolder",color:"#03a9f4"}}>DESC</span>: {desc2}</p>
       <p style={cssStyle15}><span style={{fontWeight:"bolder",color:"#03a9f4"}}>SOURCE CODE LINK</span>: {code_link2}</p>
       

       <p style={cssStyle16}><span style={{fontWeight:"bolder",color:"#03a9f4"}}>3)NAME</span>: {project_name3}</p>
       <p style={cssStyle17}><span style={{fontWeight:"bolder",color:"#03a9f4"}}>DESC</span>: {desc3}</p>
       <p style={cssStyle18}><span style={{fontWeight:"bolder",color:"#03a9f4"}}>SOURCE CODE LINK</span>: {code_link3}</p>
       
        </div>
        
    </div>
    
    <Pdf targetRef={ref} filename="Resume.pdf"   >
        {({ toPdf }) => <button className='btn_resume1' onClick={toPdf}>Download</button>}
      </Pdf>
      <button className='btn_resume2' onClick={previous}>Previous page</button>
    </>
  )
}

export default Resume