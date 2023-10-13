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
                <h1 key={article._id}>{article.title}</h1>
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
