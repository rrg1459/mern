import axios from 'axios';
import { useEffect, useState } from 'react';
import Global from '../Global';
import Sidebar from './Sidebar';
import { useParams } from 'react-router-dom';
import Moment from 'react-moment';
import imageDefault from '../assets/images/default.png'
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
      }, 1000)
    }
  }, [id, url])

  console.log('xxx article-->: ', article);

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

            <a href="/" className="btn btn-danger">Delete</a>
            <a href="/" className="btn btn-warning">Edit</a>


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