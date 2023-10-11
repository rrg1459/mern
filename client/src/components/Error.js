import { useParams } from 'react-router-dom';

const Error = () => {

  const params = useParams();

  return (
    <section id="content">
      <h2 className="subheader">Page not found</h2>
      <p>
        The page
        <strong> {params["*"]} </strong>
        does not exist on the app.
      </p>
    </section>
  );
}

export default Error;
