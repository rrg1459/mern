// import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import TestSection from './components/TestSection';
import MyComponent from './components/MyComponent';
import Movies from './components/Movies';

const Router = () => {

    return (

      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Movies />} />
          <Route path="/test" element={<TestSection />} />
          <Route path="/second" element={<MyComponent />} />

        </Routes>

      </BrowserRouter>
    )

}

export default Router;
