import Sidebar from "./Sidebar"

const CreateArticle = () => {
  return (
    <div className="center">
      <section id="content">
        <h1 className="subheader">Create Article</h1>

        <form className="mid-form">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" />
          </div>
          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea name="content" ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="img">Image</label>
            <input type="file" name="img" ></input>
          </div>
          <div className="clearfix"></div>
          <input type="submit" value="Save" className="btn btn-success" />
        </form>

      </section>
      <Sidebar />
    </div>
  )
}

export default CreateArticle