import axios from 'axios';
import { useEffect, useState } from 'react';

const Articles = () => {

  const [articles, setArticles] = useState([]);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3900/api/articles")
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
                <article className="article-item" id="article-template">
                  <div className="image-wrap">
                    <img src="https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Paisaje" />
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
