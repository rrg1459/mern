import Sidebar from "./Sidebar";
import Slider from "./Slider";
import Articles from "./Articles";

const Blog = () => {

  return (
    <div id="blog">
      <Slider
        title="Blog"
        size="slider-small"
      />
      <div className="center">

        <Articles />

        <Sidebar
          blog
        />

      </div>
    </div>

  );
}

export default Blog;
