'use client'
import './Header.css'
import React from 'react'
import Image from 'next/image'

const Header: React.FC =()=>{
    return (
        <div className="header">
       
       <div className="logo">

       
       <Image
            alt='logo'
            src="/cslogo.png"
            width={300}
            height={300}
        />
          <p>Solving Problems, Creating Solutions, Settling Disputes, and Resolving Conflict</p>
        
       </div>
     
        <Image
            alt='headshot'
            src="/headshot.png"
            width={400}
            height={200}
        />
    
        </div>
    )
}

export default Header