import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Slider from "./Slider";

const Blog = () => {

  const [articles, setArticles] = useState({});
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
    <div id="blog">
      <Slider
        title="Blog"
        size="slider-small"
      />
      <div className="center">
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

        <Sidebar
          blog
        />

      </div>
    </div>

  );
}

export default Blog;
