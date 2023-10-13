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
        console.log('xxx res.data-->: ', res.data);
      });
  }, [])

  return (
    <div id="articles">
      <div id="content">
          {/* ***  */}
          {status === 'success' &&
            <div>
              {articles.map((article) => {
                return (
                  <h1 key={article._id}>{article.title}</h1>
                  )
              })}
            </div>}
        </div>
    </div>
  );
}

export default Articles;
