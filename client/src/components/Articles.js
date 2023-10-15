import axios from 'axios';
import { useEffect, useState } from 'react';
import Global from '../Global';
import imageDefault from '../assets/images/default.png'

const Articles = () => {

  const url = Global.url;
  const [articles, setArticles] = useState([]);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    axios.get(url + "articles")
      .then(res => {
        setArticles(res.data.articles);
        setStatus('success');
      });
  }, [])

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
                    {article.date}
                  </span>
                  <a href="/">Leer más</a>

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
