import axios from 'axios';
import { useEffect, useState } from 'react';
import Moment from 'react-moment';
import Global from '../Global';
import imageDefault from '../assets/images/default.png'
import { Link } from 'react-router-dom';

const Articles = ({ home, search }) => {

  const url = Global.url;
  const [articles, setArticles] = useState([]);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (home) {
      axios.get(url + "articles/last")
        .then(res => {
          setArticles(res.data.articles);
          setStatus('success');
        });
    } else if (search && search !== null && search !== undefined) {
      setTimeout(() => {
        axios.get(url + "search/" + search)
          .then(res => {
            setArticles(res.data.articles);
            setStatus('success');
          })
          .catch(err => {
            setArticles([]);
            setStatus('success');
          });
      }, 1000)
    } else {
      axios.get(url + "articles")
        .then(res => {
          setArticles(res.data.articles);
          setStatus('success');
        });
    }
  }, [url, home, search])

  return (
    <div id="articles">
      <div id="content">
        {articles.length > 0 && status === 'success' &&
          <div>
            {articles.map((article) => {
              return (
                <article key={article._id} className="article-item" id="article-template">
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

                  <h2>{article.title}</h2>
                  <span className="date">
                    <Moment fromNow>{article.date}</Moment>
                  </span>
                  <Link to={'/blog/article/' + article._id}>Read more</Link>
                  <div className="clearfix"></div>
                </article>

              )
            })}
          </div>
        }
        {articles.length === 0 && status === 'success' &&
          <div id="articles">
            <h1>No articles to show</h1>
          </div>
        }
        {status !== 'success' &&
          <div id="articles">
            <h2 className="subheader">Loading...</h2>
            <p>Wait while the content is loading</p>
          </div>
        }

      </div>
    </div>
  );
}

export default Articles;
