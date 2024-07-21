import React from 'react'
import './Header.css'
import { Link, Outlet } from 'react-router-dom'

export default function Header() {
  return (
    <>
    <div>
      <ul className="headlink">
                <Link to="/">
                    <li>EASY</li>
                </Link>
                <Link to="/medium">
                    <li>MEDIUM</li>
                </Link>
                <Link to='/hard'>
                    <li>HARD</li>
                </Link>
            </ul>
    </div>
    <Outlet/>
    </>
  )
}
