import { useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";

const Sidebar = ({ blog }) => {

  const searchRef = useRef();
  const [search, setSearch] = useState("");
  const [redirect, setRedirect] = useState(false);

  const redirectToSearch = (e) => {
    e.preventDefault();
    setRedirect(true);
    setSearch(searchRef.current.value);
  }

  if (redirect) return <Navigate to={'/redirect/' + search} />

  return (
    <aside id="sidebar">
      {blog &&
        <div id="nav-blog" className="sidebar-item">
          <h3>You can do this</h3>
          <Link to='/blog/create/' className="btn btn-success">create article</Link>
        </div>
      }

      <div id="search" className="sidebar-item">
        <h3>Search engine</h3>
        <p>Find the article you are looking for</p>
        <form onSubmit={(redirectToSearch)}>
          <input type="text" name="search" ref={searchRef} />
          <input type="submit" name="submit" value="search" className="btn" />
        </form>
      </div>
    </aside>
  );
}

export default Sidebar;
