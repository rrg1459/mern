import { Link, useResolvedPath } from 'react-router-dom';

import logo from '../assets/images/logo.svg';

const Header = () => {

  const { pathname } = useResolvedPath();

  return (
    <header id="header">

      <div className="center">
        { /*-- LOGO --*/}
        <div id="logo">
          <img src={logo} className="app-logo" alt="Logo" />
          <span id="brand">
            <strong>React</strong>Course
          </span>
        </div>

        { /*-- MENU --*/}
        <nav id="menu">
          <ul>
            <li><Link to="/" className={pathname === '/' ? "active" : ''}>Start</Link></li>
            <li><Link to="/blog"  className={pathname === '/test' ? "active" : ''}>Blog</Link></li>
            <li><Link to="/second"  className={pathname === '/second' ? "active" : ''}>Form</Link></li>
            <li><Link to="/no-component"  className={pathname === '/no-component' ? "active" : ''}>Movies</Link></li>
            <li><Link to="/optionals/Rafael"  className={pathname === '/optionals/Rafael' ? "active" : ''}>Page 2</Link></li>
          </ul>
        </nav>

        { /*-- CLEARN FLOATED --*/}
        <div className="clearfix"></div>
      </div>
    </header>
  );
}


export default Header;

