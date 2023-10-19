// import axios from 'axios';
// import Global from '../Global';
import Sidebar from './Sidebar';
// import { Link, Navigate } from 'react-router-dom';


const Article = () => {
  return (
    <div className="center">
      <section id="content">

        <article className="article-item article-detail">
          <div className="image-wrap">
            <img src="https://concepto.de/wp-content/uploads/2015/03/paisaje-e1549600034372.jpg" alt="Paisaje" />
          </div>

          <h1 className="subheader">Test article</h1>
          <span className="date">
            5 minutes ago
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet consectetur dui. Vestibulum ac convallis urna, vitae porta massa. Mauris sit amet nisi in metus tempor convallis. Nulla nec euismod turpis. Cras luctus lorem et nisl dapibus aliquet. Curabitur lorem nunc, tristique a felis ac, vehicula laoreet ante. Ut auctor orci turpis. Cras sit amet placerat nulla, feugiat eleifend metus. Mauris nec convallis lectus. In gravida sapien in iaculis vulputate. Aliquam a rhoncus elit, sit amet pretium nisl. Vivamus egestas facilisis viverra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vel lorem est. Cras et sapien finibus, mattis est in, condimentum nisl.
          </p>
          <p>
            Aenean vel orci a tellus porttitor eleifend. Integer tincidunt porta fermentum. Aenean vitae enim iaculis, sollicitudin risus in, interdum justo. Donec semper metus ac nibh maximus venenatis. Cras sodales nisl metus, a placerat risus tristique ornare. Ut finibus nisi a ante tincidunt hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut eget venenatis augue, id molestie eros. Quisque leo risus, pellentesque mattis libero id, pharetra tempor turpis.
          </p>
          <p>
            Donec fermentum ligula at ultrices faucibus. Proin facilisis est vitae vehicula finibus. Praesent rutrum eleifend ligula, sit amet molestie dolor interdum nec. Cras sodales odio nec diam posuere, mollis aliquam magna tempus. Fusce lobortis maximus dapibus. Curabitur aliquam vehicula ultricies. Nulla sed vulputate erat.
          </p>

          <div className="clearfix"></div>
        </article>

      </section>

      <Sidebar />

      <div className="clearfix"></div>
    </div>
  )
}

export default Article