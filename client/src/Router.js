// import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';

import TestSection from './components/TestSection';
import MyComponent from './components/MyComponent';
import Movies from './components/Movies';
import Error from './components/Error';
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

const Router = () => {

  const btnString = "to blog"

  const OptionalRoute = () => {
    const params = useParams();
    const { firstName, lastName } = params;
    return (
      <div id="content">
        <h1 className="subheader">Page Test</h1>
        <h2>
          {firstName && !lastName &&
            <>
              {firstName}
            </>
          }
          {firstName && lastName &&
            <>
              {firstName} {lastName}
            </>
          }
        </h2>
      </div>
    )
  };

  return (

    <BrowserRouter>

      <Header />

      <Slider
        title="Welcome to MERN app"
        btn={btnString}
      />

      <div className="center">

        <Routes>

          <Route path="/" element={<Movies />} />
          <Route path="/test" element={<TestSection />} />
          <Route path="/second" element={<MyComponent />} />
          <Route path="/no-component" element={(
            <>
              <section id="content">
                <h1>From the page No Component</h1>
                <MyComponent greetings="Hi folk" />
              </section>
            </>
          )} />
          <Route path="/optionals/:firstName/:lastName?" Component={OptionalRoute} />
          <Route path="*" element={<Error />} />

        </Routes>

        <Sidebar />
        <div className="clearfix"></div>

      </div>

      <Footer />

    </BrowserRouter>
  )

}

export default Router;
