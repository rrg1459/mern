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
            <li>
              <a href="/" className="active">Start</a>
            </li>
            <li>
              <a href="/" className="active">Blog</a>
            </li>
            <li>
              <a href="/" className="active">Form</a>
            </li>
            <li>
              <a href="/" className="active">Movies</a>
            </li>
            <li>
              <a href="/" className="active">Page 2</a>
            </li>
          </ul>
        </nav>

        { /*-- CLEARN FLOATED --*/}
        <div className="clearfix"></div>
      </div>
    </header>
  );
}


export default Header;

