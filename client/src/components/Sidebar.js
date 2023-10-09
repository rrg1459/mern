const Sidebar = () => {

    return (
      <aside id="sidebar">
      <div id="nav-blog" className="sidebar-item">
          <h3>You can do this</h3>
          <a href="/" className="btn btn-success">create article</a>
      </div>

      <div id="search" className="sidebar-item">
              <h3>Search engine</h3>
              <p>Find the article you are looking for</p>
              <form>
                  <input type="text" name="search" />
                  <input type="submit" name="submit" value="search" className="btn" />
              </form>
      </div>
  </aside>
    );
  }

export default Sidebar;
