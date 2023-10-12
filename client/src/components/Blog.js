import Sidebar from "./Sidebar";
import Slider from "./Slider";

const Blog = () => {

  return (
    <div id="blog">
      <Slider
        title="Blog"
        size="slider-small"
      />
      <div className="center">
        <div id="content">
          {/* ***  */}
        </div>

        <Sidebar
          blog
        />

      </div>
    </div>

  );
}

export default Blog;
