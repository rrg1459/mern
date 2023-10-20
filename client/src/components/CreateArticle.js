import { useRef, useState } from "react";
import Sidebar from "./Sidebar"
import axios from "axios";
import Global from "../Global";
import { Navigate } from "react-router-dom";

const CreateArticle = () => {

  const url = Global.url;
  const titleRef = useRef();
  const contentRef = useRef();
  const imageRef = useRef();
  const [article, setArticle] = useState(null);
  const [status, setStatus] = useState(null);

  const changeForm = () => {
    setArticle({
      title: titleRef.current.value,
      content: contentRef.current.value,
      image: imageRef.current.value,
    })
  }

  const saveArticle = (e) => {
    e.preventDefault();
    axios.post(url + 'save', article)
      .then(res => {
        if (res.data.article) {
          setStatus('success');
        } else {
          setStatus('failed');
        }
      })
  }

  if (status === 'success') return <Navigate to='/blog' />

  return (
    <div className="center">
      <section id="content">
        <h1 className="subheader">Create Article</h1>

        <form className="mid-form" onSubmit={saveArticle} onChange={changeForm}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" ref={titleRef} />
          </div>
          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea name="content" ref={contentRef} ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="img">Image</label>
            <input type="file" name="img" ref={imageRef} ></input>
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