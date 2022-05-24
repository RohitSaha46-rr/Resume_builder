import React from 'react'
import { Link } from 'react-router-dom';
import './homepage.css';
const Home_page = () => {
  return (
    <div className='home_page'>
    <div className='content'>
       <h1>The Best Online Resume Builder</h1>
       <p>Build up your resume within seconds.Try to keep things short in your resume,don't write long paras because a short resume attracts the most recruiters</p>
       <h3>Fast,Effective,Easy!</h3>
       <Link to="/personal_details"><button className='mt-3 btn_1'>Get Started</button></Link>
       </div>
    </div>
  )
}

export default Home_page