import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
// import { Container } from './styles';

export default function Header() {
  return (
    <header id="main-header">
      <div className="header-content">
        <Link to="/" style={{textDecoration:'none'}}>
         <h1 className="header-text">Movies</h1>
        </Link>
      </div>
    </header>
  );
}
