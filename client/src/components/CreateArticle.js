import { useRef, useState } from "react";
import Sidebar from "./Sidebar"
import axios from "axios";
import Swal from 'sweetalert2'
import Global from "../Global";
import { Navigate } from "react-router-dom";
import SimpleReactValidator from 'simple-react-validator';

const CreateArticle = () => {

  const url = Global.url;
  const titleRef = useRef();
  const contentRef = useRef();
  const imageRef = useRef();

  // custom messages
  const validator = useRef(new SimpleReactValidator({
    messages: {
      required: 'This field is required...',
      alpha_space: 'This field may only contain letters and spaces...'
    }
  }));

  const [article, setArticle] = useState(null);
  const [status, setStatus] = useState(null);

  const changeForm = () => {
    setArticle({
      title: titleRef.current.value,
      content: contentRef.current.value,
      image: imageRef.current.value,
    })
  }

  const saveArticle = (event) => {
    event.preventDefault();
    if (validator.current.allValid()) {
      axios.post(url + 'save', article)
        .then(res => {
          if (res.data.article) {
            setStatus('success');
            Swal.fire(
              'Article created',
              'The article has been successfully created',
              'success'
            );
            if (imageRef.current.files.length) {
              const articleId = res.data.article._id;
              const file = imageRef.current.files[0];
              const formData = new FormData();
              formData.append('image', file, file.name);
              axios.post(url + 'upload-image/' + articleId, formData)
                .then(res => {
                  res.data.article ? setArticle(res.data.article) : setStatus('failed');
                });
            }
          } else {
            setStatus('failed');
          }
        })
    } else {
      setStatus('failed');
      validator.current.showMessages();
    }
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
            {validator.current.message('title', article?.title, 'required|alpha_space')}
          </div>
          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea name="content" ref={contentRef}></textarea>
            {validator.current.message('content', article?.content, 'required')}

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