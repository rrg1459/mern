// import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import TestSection from './components/TestSection';
import MyComponent from './components/MyComponent';
import Movies from './components/Movies';
import Error from './components/Error';

const Router = () => {

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
        <Route path="*" element={<Error />} />

      </Routes>

    </BrowserRouter>
  )

}

export default Router;
