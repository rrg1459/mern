// import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';

import TestSection from './components/TestSection';
import MyComponent from './components/MyComponent';
import Movies from './components/Movies';
import Error from './components/Error';

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

      <Routes>

        <Route path="/" element={<Movies />} />
        <Route path="/test" element={<TestSection />} />
        <Route path="/second" element={<MyComponent />} />
        <Route path="/no-component" element={(
          <>
            <h1>From the page No Component</h1>
            <MyComponent greetings="Hi folk" />
          </>
        )} />

        <Route path="/optionals/:firstName/:lastName?" Component={OptionalRoute} />

        <Route path="*" element={<Error />} />

      </Routes>

    </BrowserRouter>
  )

}

export default Router;
