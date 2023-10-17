// import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';

import Blog from './components/Blog';
import MyComponent from './components/MyComponent';
import Error from './components/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Form from './components/Form';
import Movies from './components/Movies';
import Article from './components/Article';
import Search from './components/Search';

const Router = () => {

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

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/article/:id" element={<Article />} />
        <Route path="/form" element={<Form />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/blog/search/:search" element={<Search />} />
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

      <div className="clearfix"></div>

      <Footer />

    </BrowserRouter>
  )

}

export default Router;
