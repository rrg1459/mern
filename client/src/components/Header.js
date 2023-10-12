import { Link } from 'react-router-dom';

import logo from '../assets/images/logo.svg';

const Header = () => {

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
            <li><Link to="/" activeclassname="active">Start</Link></li>
            <li><Link to="/test" activeclassname="active">Blog</Link></li>
            <li><Link to="/second" activeclassname="active">Form</Link></li>
            <li><Link to="/no-component" activeclassname="active">Movies</Link></li>
            <li><Link to="/optionals/Rafael" activeclassname="active">Page 2</Link></li>
          </ul>
        </nav>

        { /*-- CLEARN FLOATED --*/}
        <div className="clearfix"></div>
      </div>
    </header>
  );
}


export default Header;

