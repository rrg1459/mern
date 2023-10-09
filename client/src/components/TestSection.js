import MyComponent from './MyComponent';
import Movies from './Movies';

const TestSection = () => {

  const HiWorld = (argument, year) => {
    const presentation = (
      <div>
        <h2>Hi, I am {argument} </h2>
        <h3> I Have {year} years developing</h3>
      </div>
    );
    return presentation;
  }

  const name = 'Rafael Rodriguez Garcia'

  return (

    <section id="content">

      <h2 className="subheader">Últimos artículos</h2>
      <p>Hello, Welcome to the React MERN application</p>

      {HiWorld(name, 6)}

      <section className="components">

        <MyComponent />
        <Movies />

      </section>

    </section>

  );

}
export default TestSection;
