import { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import Swal from 'sweetalert2'
import Global from '../Global';
import { Link, Navigate, useParams } from 'react-router-dom';
import Moment from 'react-moment';
import imageDefault from '../assets/images/default.png'
// import { fn } from 'moment';
// import { Link, Navigate } from 'react-router-dom';

const Article = () => {

  const [article, setArticle] = useState(false);
  const [status, setStatus] = useState(null);
  const url = Global.url;
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setTimeout(() => {
        axios.get(url + "article/" + id)
          .then(res => {
            setArticle(res.data.article);
            setStatus('success');
          })
          .catch(err => {
            setArticle(false);
            setStatus('success');
          });
      }, 500)
    }
  }, [id, url])

  const deleteArticle = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
      .then((willDelete) => {
        if (willDelete.isConfirmed) {
          axios.delete(url + 'article/' + article._id)
            .then(res => {
              setStatus('deleted');
              Swal.fire(
                'Article has been deleted correctly',
                '',
                'success'
              )
            });
        } else {
          Swal.fire(
            'Article has not been deleted',
            '',
            'success'
          );
        }
      });
  };

  if (status === 'deleted') return <Navigate to='/blog' />

  return (
    <div className="center">
      <section id="content">
        {!article && !status &&
          <div id="articles">
            <h2 className="subheader">Loading...</h2>
            <p>Wait while the content is loading</p>
          </div>
        }
        {article &&
          <article className="article-item article-detail">

            <div className="">
              {article.image ? (
                <div className="image-wrap">
                  <img src={url + 'get-image/' + article.image} alt={article.title} />
                </div>
              ) : (
                <div className="image-wrap">
                  <img src={imageDefault} alt={article.title} />
                </div>
              )
              }
            </div>


            <h1 className="subheader">{article.title}</h1>
            <span className="date">
              <Moment fromNow>{article.date}</Moment>
            </span>

            <p>{article.content}</p>

            <button onClick={deleteArticle}
              className="btn btn-danger"
            >
              Delete
            </button>
            <Link to={"/blog/edit/" + article._id} className="btn btn-warning">
              Edit
            </Link>


            <div className="clearfix"></div>
          </article>
        }
        {
          !article && status === 'success' &&
          <div id="articles">
            <h1>No article to show</h1>
          </div>
        }
      </section>

      <Sidebar />
      <div className="clearfix"></div>

    </div>
  )
}

export default Article