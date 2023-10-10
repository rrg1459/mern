// import React, { useState } from "react";
import { useState } from "react";
import MyComponent from './MyComponent';

const TestSection = () => {

  const [counter, setCounter] = useState(0);

  const HiWorld = (argument, year) => {
    const presentation = (
      <div>
        <h2>Hi, I am {argument} </h2>
        <h3> I Have {year} years developing</h3>
      </div>
    );
    return presentation;
  }

  const add = () => setCounter(counter + 1)
  const subtract = () => setCounter(counter - 1)

  const name = 'Rafael Rodriguez Garcia'

  return (

    <section id="content">

      <h2 className="subheader">Last articles</h2>
      <p>Hello, Welcome to the React MERN application</p>

      <h2 className="subheader">Functions and basic JSX</h2>

      {HiWorld(name, 6)}

      <section className="components">

        <MyComponent />

      </section>

      <h2 className="subheader">State</h2>
      <p>
        {counter}
      </p>
      <p>
        <input type="button" value="Add" onClick={add} />
        <input type="button" value="Subtract" onClick={subtract} />
      </p>
    </section>

  );

}
export default TestSection;
