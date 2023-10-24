import { useEffect, useRef, useState } from "react";
import Sidebar from "./Sidebar"
import axios from "axios";
import Swal from 'sweetalert2'
import Global from "../Global";
import { Navigate, useParams } from "react-router-dom";
import SimpleReactValidator from 'simple-react-validator';
import imageDefault from '../assets/images/default.png'

const EditArticle = () => {

  const url = Global.url;
  const titleRef = useRef();
  const contentRef = useRef();
  const imageRef = useRef();

  const { id } = useParams();

  // custom messages
  const validator = useRef(new SimpleReactValidator({
    messages: {
      required: 'This field is required...',
      alpha_space: 'This field may only contain letters and spaces...'
    }
  }));

  const [article, setArticle] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    // setStatus('success');
    axios.get(url + 'article/' + id)
      .then(res => {
        setArticle(res.data.article);
      })
  }, [url, id])

  const changeForm = () => {
    setArticle({
      title: titleRef.current.value,
      content: contentRef.current.value,
      image: article.image,
    })
  }

  const saveArticle = (event) => {
    event.preventDefault();
    if (validator.current.allValid()) {
      axios.put(url + 'article/' + id, article)
        .then(res => {
          if (res.data.article) {
            setStatus('success');
            Swal.fire(
              'The article has been successfully edited',
              '',
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
        .catch(err => {
          console.error(err.name + ': ' + err.message);
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
        <h1 className="subheader">Edit Article</h1>

        {article &&

          <form className="mid-form" onSubmit={saveArticle} onChange={changeForm}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input type="text" name="title" defaultValue={article.title} ref={titleRef} />
              {validator.current.message('title', article?.title, 'required|alpha_space')}
            </div>
            <div className="form-group">
              <label htmlFor="content">Content</label>
              <textarea name="content" defaultValue={article.content} ref={contentRef}></textarea>
              {validator.current.message('content', article?.content, 'required')}

            </div>
            <div className="form-group">
              <label htmlFor="img">Image</label>
              <input type="file" name="img" ref={imageRef} ></input>
              <div className="image-wrap">
                {article.image ? (
                  <img src={url + 'get-image/' + article.image} alt={article.title} className="thumb" />
                ) : (
                  <img src={imageDefault} alt="Imagen by default" className="thumb" />
                )
                }
              </div>
            </div>
            <div className="clearfix"></div>
            <input type="submit" value="Save" className="btn btn-success" />
          </form>
        }

      </section>
      <Sidebar />
    </div>
  )
}

export default EditArticle
