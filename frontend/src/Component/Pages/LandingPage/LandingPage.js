import React from 'react'
import './LandingPage.css'
import { Link } from 'react-router-dom';


function LandingPage() {
        return (
                <>
                        <div className='landing_main'>
                        </div>
                        <div className='landing_imgText'>
                                <h1 className='display-1'>WELCOME TO</h1>
                                <h2 className='display-3'>SiT & MeET</h2>
                                <div>
                                        <Link className="btn btn-outline-success" style={{color:'white',fontSize:'20px',marginLeft:'80px'}} to="/login">Login</Link>
                                        <Link class="btn btn-outline-warning" style={{color:'white',fontSize:'20px',marginLeft:'100px'}} to="/signup">Create an account</Link>
                                </div>
                        </div>
                </>
        )
}

export default LandingPage