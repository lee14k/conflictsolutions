'use client'
import './Navbar.css'
import React, {useState, useEffect} from 'react'
import Link from 'next/link'

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> =()=> {
    const [isMobile, setIsMobile] = useState<boolean>(false)
    const [showMobile, setShowMobile] = useState<boolean>(false)

    useEffect (()=> {
        const handleResize =() => {
            setIsMobile(window.innerWidth <= 900)
        }

        window.addEventListener('resize', handleResize)

        handleResize()

        return ()=> window.removeEventListener('resize', handleResize)
    }, [])

    const toggleHamburger =()=> {
        setShowMobile (!showMobile)

    }
    return (
        <div className="navbar">
          {typeof window !== 'undefined' && isMobile && (
            <div className={`hamburger-icon ${showMobile ? 'open' : ''}`} onClick={toggleHamburger}>
              <div className="line" />
              <div className="line" />
              <div className="line" />
            </div>
          )}
          {(showMobile || !isMobile) && (
            <ul className={`nav`}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>Services</li>
              <li>Contact Us</li>
            </ul>
          )}
        </div>
      );
    };
    
    export default Navbar;
    